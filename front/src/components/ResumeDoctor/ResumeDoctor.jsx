import React, { useEffect, useState } from "react";
import "./ResumeDoctor.scss";
import Stars from "../Stars/Stars";
import { api } from "../../services/Api";

const ResumeDoctor = ({ doctor }) => {
  const [office, setOffice] = useState("");

  useEffect(() => {
    api.getOfficeByDoctor(doctor.officeId).then((data) => {
      setOffice(data);
    });
  }, []);

  return (
    <>
      <div className="doctor flex flex-col h-full justify-around">
        <div className="flex">
          <img />
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
