import React from 'react'

export default function Button(props) {

    // props : text, color, size, width, onClick, icon, type
    console.log(`btn btn-${props.color}  ${props.width ? 'w-'+props.width : 'w-100'}`)
    return (
        <button onClick={props.onClick} className={props.className ? props.className : `btn btn-${props.color} btn-${props.size} w-${props.width ? props.width : '1/2'}`} type={props.type ? props.type : 'text'}>
            {props.text ? props.text : null}
            {props.icon ? <img src={`/icons/${props.icon}`} alt="icon" className="w-3"/> : null}
        </button>
    )
}
