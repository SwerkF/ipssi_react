import React from "react";
import "./ResumeDoctor.scss";
import Stars from "../stars/Stars";

const ResumeDoctor = () => {
  return (
    <>
      <div className="doctor flex flex-col h-full justify-around py-10">
        <div className="flex">
          <img />
          <div className="flex flex-col">
            <h6>Docteur Richtofen E.</h6>
            <Stars notation={3.0} size={"md"} />
          </div>
        </div>
        <p>83 Rue de la Villette, 75001 PARIS</p>
        <button className="p-2">Prendre un rendez-vous</button>
      </div>
    </>
  );
};

export default ResumeDoctor;
