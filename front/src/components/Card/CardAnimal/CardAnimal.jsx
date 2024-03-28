import React from 'react'
import './CardAnimal.scss'

const API_BASE_URL = 'http://localhost:3000/images/'

export default function CardAnimal(props) {
    // const handleClick = () => {
    //     console.log(pet.id)
    // }

    console.log(props.pet)
    return (
        <div className="card-animal" onClick={props.onClick}>
            <div className="img-content">
                <img src={`${API_BASE_URL}${props.pet.avatar}`} />
            </div>
            <p className="flex items-center justify-center">{props.pet.name}</p>
        </div>
    )
}
