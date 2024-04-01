import React, { useEffect, useState, useContext } from "react";
import "./Appointment.scss";
import Stars from "../Stars/Stars";
import ResumeDoctor from "../ResumeDoctor/ResumeDoctor";
import { api } from "../../services/Api";
import { UserContext } from "../../App";

const API_BASE_URL = "http://localhost:3000/images/";

export default function Appointment({ schedule }) {
  const [notice, setNotice] = useState({
    rating: null,
    description: "",
  });

  const [pet, setPet] = useState("");

  const [doctorNotice, setDoctorNotice] = useState(null);

  useEffect(() => {

  }, [])


  

  const handleFindNotice = (doctorId) => {
    const result = doctorNotice.filter((notice) => notice.doctorId == doctorId);
    if (result.length > 0) {
      return result[0].description;
    } else {
      return "";
    }
  };

  const handleSetHours = (date) => {
    const dateHours = new Date(date);
    dateHours.setHours(dateHours.getHours() - 1);
    return dateHours.toLocaleTimeString();
  };

  return (
    <div className="appointment flex w-full lg:py-3 flex flex-col lg:flex-row justify-between">
      <div className="flex flex-col lg:w-2/3 lg:flex-row justify-between">
        <ResumeDoctor doctor={schedule.doctor} />
        <div className="separation mx-10"></div>
        <div className="flex flex-col w-full lg:pr-20 lg:my-0 my-5">
          <div className="state flex justify-between items-center">
            <div className="flex items-center">
              <h6 className="mr-2">Status</h6>
              <p
                className={
                  schedule.status === "booked"
                    ? "badge badge-info text-white font-bold text-sm"
                    : schedule.status === "finished"
                    ? "badge badge-success"
                    : "badge badge-error"
                }
              >
                {schedule.status === "booked"
                  ? "À venir"
                  : schedule.status === "finished"
                  ? "Effectué"
                  : "Annulé"}
              </p>
            </div>
            <p className="date">
              {`${new Date(schedule.date)
                .getDate()
                .toString()
                .padStart(2, "0")}/${(new Date(schedule.date).getMonth() + 1)
                .toString()
                .padStart(2, "0")}/${new Date(
                schedule.date
              ).getFullYear()}`}{" "}
            </p>
          </div>
          <div className="detail flex items-center mt-5 justify-between">
            <div className="flex flex-col">
              <h6 className="mb-3">Rendez-vous pour</h6>
              <div className="flex items-center w-20 h-20">
                <img
                  src={`${API_BASE_URL}${schedule.pet.avatar}`}
                  className="rounded-full"
                />
                <p className="text-center ml-5 text-orange-500 font-semibold">
                  {schedule.pet.name}
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <h6 className="mb-5">Horaires:</h6>
              <p className="hour-meeting px-5 py-3">
                {handleSetHours(schedule.date)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="notice flex flex-col w-full lg:w-1/3">
              <div className="flex mb-5 items-center">
          <h6 className="mr-3">Avis</h6>
          <Stars notation={2.4} size={"md"} />
        </div>
        <textarea
          className="p-5"
          placeholder="Votre message"
          name=""
          id=""
          cols="30"
          rows="4"
          value={doctorNotice && handleFindNotice(schedule.doctorId)}
        ></textarea>
      </div>
    </div>
  );
}

