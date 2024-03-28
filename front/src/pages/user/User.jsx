import React, { useState, useEffect } from 'react'
import './User.scss'
import Input from '../../components/Input/Input'
import Appointment from '../../components/Appointment/Appointment'
import { api } from "../../services/Api";
import CardAnimal from '../../components/Card/CardAnimal/CardAnimal';
import NewPet from '../../components/Modal/NewPet/NewPet';

export default function User() {
  const [id, setId] = useState('dc67f5e9-d1f6-4ba1-9b16-b0eaf526421i');
  const [pets, setPets] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [cardNewPetIsActive, setCardNewPetIsActive] = useState(false);

  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    newPassword: ''
  });

  

  useEffect(() => {
    api.getPetsOfUser(id).then(res => {
      setPets(res);
    });

    api.getUserById(id).then(res => {
      setUser(res);
      console.log('user', res)
    })
    

    api.getAllScheduleByUser(id).then(res => {
      console.log('schedules ->',res)
      setSchedules(res);
    })
    

  }, [])


  return (
    <div className='user page'>
      {cardNewPetIsActive &&  <NewPet ownerId={id} hideCardNewAnimal={setCardNewPetIsActive}/>}
        <div className='flex justify-between'>
          <form>
            <h3>Vos informations</h3>
            <div className='flex flex-row justify-between'>
              <Input
                label={'Nom'}
                value={user.lastname}
                onChange={(value) => setUser({ ...user, lastname: value })}
              />
              <Input
                label={'Prénom'}
                value={user.firstname}
                onChange={(value) => setUser({ ...user, firstname: value })}
              />
            </div>
            <Input
              label={'Email'}
              value={user.email}
              onChange={(value) => setUser({ ...user, email: value })}
            />
            <Input
              label={'Mot de passe'}
              value={user.password}
              onChange={(value) => setUser({ ...user, password: value })}
            />
            <Input
              label={'Nouveau mot de passe'}
              value={user.newPassword}
              onChange={(value) => setUser({ ...user, newPassword: value })}
            />
            <button>Sauvegarder les informations</button>
          </form>
          <div className="pets">
            <h3>Vos animaux</h3>
            <div className="animals">
              {pets.map((pet, index) => (
                <CardAnimal key={index} pet={pet} />
              ))}
              <div>
                <div className="card-plus flex justify-center items-center" onClick={e => setCardNewPetIsActive(true)}>
                  <i className='bx bx-plus'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='appointments mt-10'>
          <h3>Vos rendez vous</h3>
          <div className="appointments">
            <Appointment doctor={user} />
          </div>
        </div>
    </div>
  );
}
