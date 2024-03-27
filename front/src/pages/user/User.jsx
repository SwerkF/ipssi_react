import React, { useState, useEffect } from 'react'
import './User.scss'
import Input from '../../components/Input/Input'
import Appointment from '../../components/Appointment/Appointment'

export default function User() {
    const [user, setUser] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      newPassword: ''
    });
    useEffect(() => {
        console.log(user)
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
