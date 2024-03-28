import React from 'react'
import './CardAnimal.scss'

const API_BASE_URL = 'http://localhost:3000/images/';

export default function CardAnimal( { pet }) {
    console.log(pet)
  return (
    <div className='card-animal'>
        <div className="img-content">
            <img src={`${API_BASE_URL}${pet.avatar}`} />
        </div>
        <p className='flex items-center justify-center'>{pet.name}</p>
    </div>
  )
}
