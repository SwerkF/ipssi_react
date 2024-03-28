import React, { useEffect, useState } from "react";
import "./CardAppointment.scss";
import ResumeDoctor from "../ResumeDoctor/ResumeDoctor";
import { api } from "../../services/Api";

const CardAppointment = ({ doctor }) => {
  const [calendar, setCalendar] = useState([]);
  const [availableAppointment, setAvailableAppointment] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const currentDate = new Date();

  const incrementTime = (currentTime) => {
    console.log();
    if (currentTime.getMinutes() + 30 === 60) {
      currentTime.setMinutes(0);
      currentTime.setHours(currentTime.getHours() + 1);
    } else {
      currentTime.setMinutes(currentTime.getMinutes() + 30);
    }
    currentTime.setSeconds(0);
    return currentTime;
  };

  const handleConvertStringToDate = (stringToConvert) => {
    const [hours, minutes, seconds] = stringToConvert.split(":").map(Number);
    const time = new Date();
    time.setHours(hours);
    time.setMinutes(minutes);
    time.setSeconds(seconds);
    return time;
  };

  const updateCalendar = (data) => {
    let daySchedule = [];
    let currentTime = handleConvertStringToDate(data.startWorkAt);
    const endTime = handleConvertStringToDate(data.endWorkAt);
    const lunchBreakStartedAt = handleConvertStringToDate(
      data.lunchBreakStartedAt
    );
    const lunchBreakEndedAt = handleConvertStringToDate(data.lunchBreakEndedAt);
    while (endTime > currentTime) {
      currentTime = incrementTime(currentTime);
      if (
        currentTime <= lunchBreakStartedAt &&
        currentTime >= lunchBreakEndedAt &&
        schedule.some((schedule) => schedule.date === currentTime)
      ) {
        null;
      } else {
        daySchedule.push(new Date(currentTime));
      }
      console.log(schedule.some((schedule) => schedule.date === currentTime));
    }
    setAvailableAppointment(daySchedule);
  };

  useEffect(() => {
    api
      .getSchedulesOfDoctor({
        date: `${currentDate.getFullYear()}-${String(
          currentDate.getMonth() + 1
        ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(
          2,
          "0"
        )} 00:00:00`,
        userId: doctor.id,
      })
      .then((data) => setSchedule(data));
    api.getCalendarByDoctorId(doctor.id).then((data) => {
      setCalendar(data);
      updateCalendar(data);
    });
  }, []);

  return (
    <>
      <div className="appointment flex w-45 mx-5 mt-5 bg-white rounded-lg shadow-lg">
        <div className="flex justify-around w-2/3 m-10 items-center">
          <ResumeDoctor doctor={doctor} />
          <div className="separation"></div>
        </div>
        <div className="w-full m-10 item-center">
          <table className="table-auto w-full">
            <thead>
              <tr>
                {calendar.isWorkingOnMonday && <th>Lundi</th>}
                {calendar.isWorkingOnTuesday && <th>Mardi</th>}
                {calendar.isWorkingOnWednesday && <th>Mercredi</th>}
                {calendar.isWorkingOnThursday && <th>Jeudi</th>}
                {calendar.isWorkingOnFriday && <th>Vendredi</th>}
                {calendar.isWorkingOnSaturday && <th>Samedi</th>}
                {calendar.isWorkingOnSunday && <th>Dimanche</th>}
              </tr>
            </thead>
            <tbody>
              {availableAppointment.map((slot, index) => (
                <tr key={index} className="text-center">
                  <td>
                    {slot.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CardAppointment;
