import React, { useEffect, useState, useContext } from "react";
import "./Appointment.scss";
import Input from "../../components/Input/Input";
import CardAppointment from "../../components/CardAppointment/CardAppointment";
import { api } from "../../services/Api";
import ModalRdv from "../../components/Modal/ModalRdv/ModalRdv";
import { UserContext } from '../../App';

const Appointment = () => {
  const [doctorInformation, setDoctorInformation] = useState([]);
  const [search, setSearch] = useState({
    name: "",
    when: "",
  });
  const [currentDoctor, setCurrentDoctor] = useState(null);
  const user = useContext(UserContext);
  const [dateSelected, setDateSelected] = useState(null);

  const [isActiveModalAppointment, setIsActiveModalAppointment] = useState(false);

  const loadModal = (doctor, date) => {
    setIsActiveModalAppointment(true)
    setCurrentDoctor(doctor)
    setDateSelected(date)
  }

  useEffect(() => {
    api.getAllDoctors().then((data) => {
      setDoctorInformation(data)
      console.log(data)
    });
  }, []);

  const searchDoctor = (value) => {
    console.log('value', value);
    setSearch({ ...search, name: value, when: "" });
    api.getAllDoctors(value).then((data) => {
        setDoctorInformation(data);
        console.log(data);
    });
};

  return (
    <div className="bg-orange-200 py-8 min-h-screen">
      <ModalRdv isActive={isActiveModalAppointment} setDisabled={setIsActiveModalAppointment} user={user} doctorInfo={currentDoctor} date={dateSelected}/>
      <div className="flex mx-4">
        <div className="w-1/2 mr-4">
          <Input
            value={search.name}
            placeholder={"Nom"}
            onChange={(value) => searchDoctor(value)}
          />
        </div>
        <div className="w-1/2">
          <div className="input-group">
            <input
              className="input-component"
              type="date"
              placeholder="Quand"
              value={search.when}
              onChange={(e) => setSearch({ ...search, when: e.target.value })}
            />
          </div>
        </div>
      </div>
      {/* <div className="flex"></div> */}
      {doctorInformation &&
        doctorInformation.map((doctor) => (
          <CardAppointment key={doctor.id} doctor={doctor}  setModalActive={loadModal} inputDate={search.when}/>
        ))}
    </div>
  );
};

export default Appointment;
