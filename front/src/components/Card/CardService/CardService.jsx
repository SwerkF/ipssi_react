import React from 'react';
import './CardService.scss';

export default function CardService(props) {

    //props: title, icon, text
    
    return (
        <div className="card card-compact md:w-96 w-72 bg-base-100 shadow-xl p-3">
            <div className="flex flex-row gap-2">
                <img src={`/icons/${props.icon}`} alt="icon" className="w-16 color-primary" fill="#E0773C"/>
                <h2 className="card-title text-3xl font-black color-primary">{props.title}</h2>
            </div>
            <div className="card-body">
                <p>{props.text}</p>
            </div>
        </div>
    )
}
