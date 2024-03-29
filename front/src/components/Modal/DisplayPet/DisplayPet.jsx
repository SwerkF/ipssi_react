import React, { useState, useEffect } from "react";
import "../DisplayPet/DisplayPet.scss";

const API_BASE_URL = "http://localhost:3000/images/";

const DisplayPet = ({ pet, hideDisplayAnimal }) => {
  const handleDate = (dateString) => {
    return new Date(dateString);
  };

  return (
    <div className="background-new-pet">
      <div className="form-container">
        <form className="new-pet p-25">
          <i className="bx bx-x" onClick={(e) => hideDisplayAnimal(false)}></i>
          {/* <p className="text-center font-bold text-2xl">Informations</p> */}
          <div className="img-content">
            <img
              src={`${API_BASE_URL}${pet.avatar}`}
              className="rounded-full"
            />
          </div>
          <p className="text-center font-bold text-xl text-orange-400">
            {pet.name}
          </p>
          <div className="flex justify-between">
            <p className="text-orange-400 font-semibold">Genre</p>
            <p className="text-orange-400 font-semibold">Couleur</p>
          </div>
          <div className="flex justify-between">
            <p>{pet.gender.charAt(0).toUpperCase() + pet.gender.slice(1)}</p>
            <p>{pet.color}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-orange-400 font-semibold">Espèce</p>
            <p className="text-orange-400 font-semibold">Poids</p>
          </div>
          <div className="flex justify-between">
            <p>{pet.specie}</p>
            <p>{pet.weight} kg</p>
          </div>
          <div className="flex justify-between">
            <p className="text-orange-400 font-semibold">Hauteur</p>
            <p className="text-orange-400 font-semibold">Date de naissance</p>
          </div>
          <div className="flex justify-between">
            <p>{pet.height} cm</p>
            <p>
              {`${handleDate(pet.birth_date)
                .getDate()
                .toString()
                .padStart(2, "0")}/${(handleDate(pet.birth_date).getMonth() + 1)
                .toString()
                .padStart(2, "0")}/${handleDate(pet.birth_date).getFullYear()}`}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DisplayPet;
