import React from 'react'

export default function Stats(props) {

    // props: number, text

    return (
        <div className="text-white">
            <h2 className="text-3xl font-black">{props.number}</h2>
            <p className='text-sm'>{props.text}</p>
        </div>
    )
}
