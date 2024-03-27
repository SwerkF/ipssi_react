import React from 'react';
import './CardReview.scss';
import Stars from '../../Stars/Stars';

export default function CardReview(props) {

    // props: image, name, review, note
    console.log(props)
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-box-card p-4">
            <div className="flex flex-row gap-2">
                {props.image ? (<img src={props.image} alt="icon" className="w-16 rounded-full"/>)
                :
                (<img src={`/utilisateur.png`} alt="icon" className="w-16 p-2 rounded-full bg-neutral-content"/>)
                }
                <h2 className="card-title text-3xl font-black color-primary">{props.name}</h2>
            </div>
            <hr className='mt-3'/>
            <Stars notation={props.note}/>
            <div className="card-body">
                <p className='font-semibold text-base text-start'>"{props.review}"</p>
            </div>
        </div>
    )
}
