import React, { useState, useEffect } from 'react'
import './User.scss'
import Input from '../../components/Input/Input'
import Appointment from '../../components/Appointment/Appointment'
import {api} from "../../services/Api"

export default function User() {
    const [id, setId] = useState('dc67f5e9-d1f6-4ba1-9b16-b0eaf526421i');

    const [user, setUser] = useState({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      newPassword: ''
    });
    
    useEffect(() => {
      api.getPetsOfUser(id).then(res => console.log(res))
    }, [user])
    return (
      <div className='user page'>
        <div>
          <div className='flex'>
            <form>
              <h3>Vos informations</h3>
              <div className='flex flex-row justify-between'>
                <Input
                  label={'Nom'}
                  value={user.lastName}
                  onChange={(value) => setUser({ ...user, lastName: value })}
                />
                <Input
                  label={'Prénom'}
                  value={user.firstName}
                  onChange={(value) => setUser({ ...user, firstName: value })}
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
            </div>
          </div>
          <div>
            <Appointment /> 
          </div>
        </div>
      </div>
    );
  }
