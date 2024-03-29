import React, { useEffect, useState } from "react";
import "./ResumeDoctor.scss";
import Stars from "../Stars/Stars";
import { api } from "../../services/Api";

const API_BASE_URL = "http://localhost:3000/images/";

const ResumeDoctor = ({ doctor }) => {
  const [office, setOffice] = useState(null); // Initialize office as null

  useEffect(() => {
    const fetchOffice = async () => {
      try {
        const data = await api.getOfficeByDoctor(doctor.officeId);
        setOffice(data);
      } catch (error) {
        console.error("Error fetching office data:", error);
      }
    };
    fetchOffice();
  }, [doctor]);

  return (
    <div className="doctor flex flex-col h-full">
      <div className="flex items-center">
        <div className="img-content">
          <img
            src={`${API_BASE_URL}${doctor.avatar}`}
            className="rounded-full"
            alt={`Avatar of Dr. ${doctor.firstname} ${doctor.lastname}`} // Add alt text
          />
        </div>
        <div className="flex flex-col">
          <h6>
            Docteur {doctor.firstname} {doctor.lastname}
          </h6>
          <Stars notation={3.0} size={"md"} />
        </div>
      </div>
      {office && ( // Conditional rendering
        <p>
          {office.address}, {office.city}
        </p>
      )}
      <button className="p-2 w-full cursor-default">Prendre un rendez-vous</button>
    </div>
  );
};

export default ResumeDoctor;
