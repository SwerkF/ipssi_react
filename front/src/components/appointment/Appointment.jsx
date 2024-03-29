import React, { useEffect, useState } from "react";
import "./Appointment.scss";
import Stars from "../Stars/Stars";
import ResumeDoctor from "../ResumeDoctor/ResumeDoctor";
import { api } from "../../services/Api";

const API_BASE_URL = "http://localhost:3000/images/";

export default function Appointment({ schedule }) {
  const [notice, setNotice] = useState({
    rating: null,
    description: "",
  });
  const [doctor, setDoctor] = useState("");
  const [pet, setPet] = useState("");

  useEffect(() => {
    api.getAllOfUser(schedule.doctorId).then((data) => setDoctor(data));
    api.getAllPetInformationById(schedule.petId).then((data) => setPet(data));
  }, []);

  return (
    <div className="appointment flex w-full">
      <div className="flex w-1/2 items-center">
        <ResumeDoctor doctor={doctor} />
        <div className="separation mx-10"></div>
        <div className="appointment flex flex-col">
          <div className="state flex">
            <h6 className="mr-10">Status</h6>
            <p>
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
              .padStart(2, "0")}/${new Date(schedule.date).getFullYear()}`}{" "}
          </p>
          <div className="detail flex">
            <div className="flex flex-col">
              <h6>Rendez-vous pour</h6>
              <div className="flex flex-col">
                <img
                  src={`${API_BASE_URL}${pet.avatar}`}
                  className="rounded-full"
                />
                <p>{pet.name}</p>
              </div>
            </div>
            <div className="flex flex-col">
              <h6>Horaires:</h6>
              <p className="hour-meeting p-2">
                {new Date(schedule.date).toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="notice flex flex-col w-1/2">
        <div className="flex mb-5">
          <h6 className="mr-3">Avis</h6>
          <Stars notation={2.4} size={"md"} />
        </div>
        <textarea className="p-5" name="" id="" cols="30" rows="10">
          {}
        </textarea>
      </div>
    </div>
  );
}
