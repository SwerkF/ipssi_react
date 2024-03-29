import React, { useState, useEffect } from 'react'
import Input from '../../Input/Input';
import './NewPet.scss';
import { api } from '../../../services/Api';

export default function NewPet({ ownerId, hideCardNewAnimal }) {
    const [newPet, setNewPet] = useState({
        name: '',
        specie: '',
        weight: '',
        height: '',
        color: '',
        id_owner: ownerId,
        birth_date: null,
        gender: 'male',
        avatar: ''
    });

    useEffect(() => {
        console.log(newPet)
    }, [newPet])

    const createPet = () => {
        api.createNewPet(newPet).then(res => console.log(res));
    }

    const handleGenderChange = (event) => {
        setNewPet({ ...newPet, gender: event.target.value });
    };
    return (
        <div className='background-new-pet'>
            <div className="form-container">
                <form className='new-pet'>
                    <i className='bx bx-x' onClick={e => hideCardNewAnimal(false)}></i>
                    <div className="flex items-center">
                        <Input
                            label={'Nom'}
                            value={newPet.name}
                            onChange={(value) => setNewPet({ ...newPet, name: value })}
                        />
                        <div className="flex flex-col w-1/2 ml-5">
                            <label>Sexe</label>
                            <div className='flex gender'>
                                <p className='mr-2'>Male</p>
                                <input type="radio" name="radio-8" value="male" className="radio radio-error mr-2" checked={newPet.gender === 'male'} onChange={handleGenderChange} />
                                <input type="radio" name="radio-8" value="female" className="radio radio-error mr-2" checked={newPet.gender === 'female'} onChange={handleGenderChange} />
                                <p>Female</p>
                            </div>
                        </div>
                    </div>
                    <Input
                        label={'Espèce'}
                        value={newPet.specie}
                        onChange={(value) => setNewPet({ ...newPet, specie: value })}
                    />
                    <div className="flex">
                        <Input
                            label={'Poid (en kg)'}
                            value={newPet.weight}
                            onChange={(value) => setNewPet({ ...newPet, weight: value })}
                            type={'number'}
                        />
                        <Input
                            label={'Taille (en cm)'}
                            value={newPet.height}
                            onChange={(value) => setNewPet({ ...newPet, height: value })}
                            type={'number'}
                        />
                    </div>
                    <div className='mb-4'>
                        <label>Date</label>
                        <input
                            type="date" 
                            id="date_new_pew" 
                            name="date_new_pew" 
                            accept="image/png, image/jpeg" 
                            onChange={(e) => setNewPet({ ...newPet, birth_date: e.target.value })}
                        />
                    </div>
                    <Input
                        label={'Couleur'}
                        value={newPet.color}
                        onChange={(value) => setNewPet({ ...newPet, color: value })}
                        type={'color'}
                    />
                    <div className='flex flex-col w-full input-img'>
                        <label>Photo</label>
                        <input 
                            type="file" 
                            id="avatar" 
                            name="avatar" 
                            accept="image/png, image/jpeg" 
                           // onChange={(value) => setNewPet({ ...newPet, avatar: value })}
                        />
                    </div>
                    <button type='button' className='mt-5' onClick={e => createPet()}>Sauvegarder les informations</button>
                </form>
            </div>
        </div>
    )
}
