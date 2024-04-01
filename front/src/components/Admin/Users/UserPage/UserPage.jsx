import React, { useEffect, useState } from "react";
import NewPet from "../../../Modal/NewPet/NewPet";
import DisplayPet from "../../../Modal/DisplayPet/DisplayPet";
import CardAnimal from "../../../Card/CardAnimal/CardAnimal";
import Appointment from "../../../Appointment/Appointment";
import Input from "../../../Input/Input";
import { api } from "../../../../services/Api";

const UserPage = ({ user }) => {
  const [cardNewPetIsActive, setCardNewPetIsActive] = useState(false);
  const [cardDisplayPetIsActive, setCardDisplayPetIsActive] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const [schedules, setSchedules] = useState([])
  const [newUser, setNewUser] = useState({
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    password: user.password,
    newPassword: user.password,
  });

useEffect(() => {
  api.getAllSchedulesOfUser(user.id).then(res => {
    setSchedules(res);
    console.log('Res',res);
  });
}, [user])

  return (
    <div className="user page">
      {cardNewPetIsActive && (
        <NewPet ownerId={user.id} hideCardNewAnimal={setCardNewPetIsActive} />
      )}
      {cardDisplayPetIsActive && (
        <DisplayPet
          pet={selectedPet}
          hideDisplayAnimal={setCardDisplayPetIsActive}
        />
      )}
      <div className="flex flex-col lg:flex-row justify-between">
        <form className="mr-5">
          <h3>Vos informations</h3>
          <div className="flex flex-row justify-between">
            <Input
              label={"Nom"}
              value={user.lastname}
              onChange={(value) => setNewUser({ ...user, lastname: value })}
            />
            <Input
              label={"Prénom"}
              value={user.firstname}
              onChange={(value) => setNewUser({ ...user, firstname: value })}
            />
          </div>
          <Input
            label={"Email"}
            value={user.email}
            onChange={(value) => setNewUser({ ...user, email: value })}
          />
          <Input
            label={"Mot de passe"}
            value={user.password}
            type={"password"}
            onChange={(value) => setNewUser({ ...user, password: value })}
          />
          <Input
            label={"Nouveau mot de passe"}
            value={user.newPassword}
            type={"password"}
            onChange={(value) => setNewUser({ ...user, newPassword: value })}
          />
          <button>Sauvegarder les informations</button>
        </form>
        <div className="pets">
          <h3>Vos animaux</h3>
          <div className="animals">
            {user.pets.map((pet, index) => (
              <div
                key={index}
                onClick={(e) => {
                  setSelectedPet(pet);
                  setCardDisplayPetIsActive(true);
                }}
              >
                <CardAnimal pet={pet} />
              </div>
            ))}
            <div>
              <div
                className="card-plus flex justify-center items-center"
                onClick={(e) => setCardNewPetIsActive(true)}
              >
                <i className="bx bx-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="appointments mt-10">
          <h3>Vos rendez vous</h3>
          <div className="appointments">
            {schedules.map((schedule, indice) => (
              <Appointment key={indice} schedule={schedule} />
            ))}
          </div>
        </div>
    </div>
  );
};

export default UserPage;
