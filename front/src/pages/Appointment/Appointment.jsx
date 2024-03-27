import React, { useState } from "react";
import "./Appointment.scss";
import Input from "../../components/input/Input";
import CardAppointment from "../../components/CardAppointment/CardAppointment";

const Appointment = () => {
  const [search, setSearch] = useState({
    name: "",
    when: "",
  });
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
      <div className="">
        <CardAppointment />
      </div>
    </div>
  );
};

export default Appointment;
