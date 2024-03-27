import React, { useEffect, useState } from "react";
import "./Appointment.scss";
import Input from "../../components/Input/Input";
import CardAppointment from "../../components/CardAppointment/CardAppointment";
import { api } from "../../services/Api";
import { useAuth } from "../../services/utils/provider";

const Appointment = () => {
  const accessToken = useAuth();
  const [doctorInformation, setDoctorInformation] = useState([]);
  const [search, setSearch] = useState({
    name: "",
    when: "",
  });

  useEffect(() => {
    api.getAllUser(accessToken).then((data) => setDoctorInformation(data));
  }, []);

  useEffect(() => {
    console.log(doctorInformation);
  }, [doctorInformation]);
  return (
    <div className="bg-orange-200 py-8">
      <div className="flex mx-4">
        <div className="w-1/2 mr-4">
          <Input
            value={search.name}
            placeholder={"Nom"}
            onChange={(value) => setSearch({ ...search, name: value })}
          />
        </div>
        <div className="w-1/2">
          <div className="input-group">
            <input
              className="input-component"
              type="date"
              placeholder="Quand"
              onChange={(value) => setSearch({ ...search, when: value })}
            />
          </div>
        </div>
      </div>
      {/* <div className="flex"></div> */}
      {doctorInformation &&
        doctorInformation.map((doctor) => (
          <CardAppointment key={doctor.id} doctor={doctor} />
        ))}
    </div>
  );
};

export default Appointment;