import React from "react";
import "./CardAppointment.scss";
import ResumeDoctor from "../ResumeDoctor/ResumeDoctor";

const CardAppointment = () => {
  return (
    <>
      <div className="appointment flex w-45 mx-5 bg-white">
        <div className="flex w-1/2 m-10 items-center">
          <ResumeDoctor />
          <div className="separation mx-10"></div>
          <div className="appointment flex flex-col"></div>
        </div>
      </div>
    </>
  );
};

export default CardAppointment;
