import React, { useState, useEffect } from 'react'
import Input from '../../Input/Input';
import './NewPet.scss';

export default function NewPet() {
    const [newPet, setNewPet] = useState({
        name: '',
        specie: '',
        weight: '',
        height: '',
        color: ''

    });
    return (
        <div className='background-new-pet'>
            <div className="form-container">
                <form className='new-pet'>
                    <Input
                        label={'Nom'}
                        value={newPet.name}
                        onChange={(value) => setNewPet({ ...newPet, name: value })}
                    />
                    <Input
                        label={'Espèce'}
                        value={newPet.specie}
                        onChange={(value) => setNewPet({ ...newPet, specie: value })}
                    />
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
                    <Input
                        label={'Couleur'}
                        value={newPet.color}
                        onChange={(value) => setNewPet({ ...newPet, color: value })}
                        type={'color'}
                    />
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <input type="color" id="avatar" name="avatar" accept="image/png, image/jpeg" />
                    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
                    <input type="date" id="avatar" name="avatar" accept="image/png, image/jpeg" />


                </form>
            </div>
        </div>
    )
}
