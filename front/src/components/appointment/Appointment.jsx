import React, { useEffect, useState } from "react";
import "./Appointment.scss";
import Stars from "../Stars/Stars";
import ResumeDoctor from "../ResumeDoctor/ResumeDoctor";

export default function () {
  const [notice, setNotice] = useState({
    rating: null,
    description: "",
  });

  useEffect(() => {});
  return (
    <div className="appointment flex w-full">
      <div className="flex w-1/2 items-center">
        <ResumeDoctor />
        <div className="separation mx-10"></div>
        <div className="appointment flex flex-col">
          <div className="state flex">
            <h6 className="mr-10">Status</h6>
            <p>A venir</p>
          </div>
          <p className="date">22/02/2024</p>
          <div className="detail flex">
            <div className="flex flex-col">
              <h6>Rendez-vous pour</h6>
              <div className="flex flex-col">
                <img />
                <p>Max</p>
              </div>
            </div>
            <div className="flex flex-col">
              <h6>Horaires:</h6>
              <p className="hour-meeting p-2">9:20 - 10:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="notice flex flex-col w-1/2">
        <div className="flex mb-5">
          <h6 className="mr-3">Avis</h6>
          <Stars notation={2.4} size={"md"} />
        </div>
        <textarea className="p-5" name="" id="" cols="30" rows="10"></textarea>
      </div>
    </div>
  );
}
