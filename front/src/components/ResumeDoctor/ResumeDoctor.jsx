import React, { useEffect, useState } from "react";
import "./ResumeDoctor.scss";
import Stars from "../Stars/Stars";
import { api } from "../../services/Api";

const API_BASE_URL = "http://localhost:3000/images/";

const ResumeDoctor = ({ doctor }) => {
  const [office, setOffice] = useState("");

  useEffect(() => {
    api.getOfficeByDoctor(doctor.officeId).then((data) => {
      setOffice(data);
    });
  }, []);

  return (
    
      <div className="doctor flex flex-col w-full justify-around">
        <div className="flex">
          <img src={`${API_BASE_URL}${doctor.avatar}`} />
          <div className="flex flex-col items-start">
            <h6 cl>
              Docteur {doctor.firstname} {doctor.lastname}
            </h6>
            <Stars notation={3.0} size={"md"} />
          </div>
        </div>
        {office ? (
          <p className="my-5">
            {office.address}, {office.city}
          </p>
        ) : (
          <p></p>
        )}
        <button className="p-2 w-full cursor-default">Prendre un rendez-vous</button>
      </div>
    
  );
};

export default ResumeDoctor;
