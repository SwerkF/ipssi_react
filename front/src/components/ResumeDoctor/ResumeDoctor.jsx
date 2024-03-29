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
  }, [doctor]);

  return (
    <>
      <div className="doctor flex flex-col h-full justify-around">
        <div className="flex">
          <div className="img-content">
            <img
              src={`${API_BASE_URL}${doctor.avatar}`}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <h6>
              Docteur {doctor.firstname} {doctor.lastname}
            </h6>
            <Stars notation={3.0} size={"md"} />
          </div>
        </div>
        {office ? <p>{office.address}</p> : <p></p>}
        <button className="p-2">Prendre un rendez-vous</button>
      </div>
    </>
  );
};

export default ResumeDoctor;
