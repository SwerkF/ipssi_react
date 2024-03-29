import React, { useEffect, useState } from "react";
import "./CardAppointment.scss";
import ResumeDoctor from "../ResumeDoctor/ResumeDoctor";
import { api } from "../../services/Api";

const CardAppointment = ({ doctor }) => {
  const [calendar, setCalendar] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const currentDate = new Date();

  useEffect(() => {
    api.getCalendarByDoctorId(doctor.id).then((data) => {
      setCalendar(data);
    });
    api.getSchedulesOfDoctor(doctor.id).then((data) => setSchedule(data));
  }, []);

  return (
    <>
      <div className="appointment flex w-45 mx-5 mt-5 bg-white rounded-lg shadow-lg">
        <div className="flex w-1/2 m-10 items-center">
          <ResumeDoctor doctor={doctor} />
          <div className="separation mx-10"></div>
          <div className="appointment flex flex-col"></div>
        </div>
        <div className="flex w-full m-10 item-center">
          <table className="table-auto">
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
              <tr>{calendar.startWorkAt}</tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CardAppointment;
