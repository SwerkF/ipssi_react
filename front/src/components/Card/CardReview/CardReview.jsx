import React from 'react';
import './CardReview.scss';

export default function CardReview(props) {

    // props: image, name, review, note
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-3">
            <div className="flex flex-row gap-2">
                {props.image ? (<img src={props.image} alt="icon" className="w-16 rounded-full"/>)
                :
                (<img src={`/utilisateur.png`} alt="icon" className="w-16 p-2 rounded-full bg-neutral-content"/>)
                }
                <h2 className="card-title text-3xl font-black color-primary">{props.name}</h2>
            </div>
            
            <hr className='mt-3'/>
            <div className="card-body">
                <p>{props.review}</p>
            </div>
        </div>
    )
}
