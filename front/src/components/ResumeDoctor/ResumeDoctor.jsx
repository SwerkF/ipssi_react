import React, { useEffect, useState } from "react";
import "./ResumeDoctor.scss";
import Stars from "../Stars/Stars";
import { api } from "../../services/Api";

const API_BASE_URL = "http://localhost:3000/images/";

const ResumeDoctor = ({ doctor }) => {
  useEffect(() => {
    console.log(doctor)
  }, [doctor])
  return (
    <div className="doctor flex flex-col h-full">
      <div className="flex items-center">
        <div className="img-content mr-5">
          <img
            src={`${API_BASE_URL}${doctor.avatar}`}
            className="rounded-full w-20"
            alt={`Avatar of Dr. ${doctor.firstname} ${doctor.lastname}`} // Add alt text
          />
        </div>
        <div className="flex flex-col items-start">
          <h6>
            Docteur {doctor.firstname} {doctor.lastname}
          </h6>
          <Stars notation={3.0} size={"md"} />
        </div>
      </div>
      {doctor && doctor.office && ( // Conditional rendering
        <p className="my-5">
          {doctor.office.address}, {doctor.office.city}
        </p>
      )}
      <button className="p-2 w-full cursor-default">Prendre un rendez-vous</button>
    </div>
  );
};

export default ResumeDoctor;
