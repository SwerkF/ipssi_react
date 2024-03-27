import React from 'react'
import './Input.scss'

export default function Input({label, value, onChange, placeholder, type}) {
    return (
        <div className="input-group">
            <label>{label ? label : ''}</label>
            <input
                className="input-component"
                type={!type ? 'text' : type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={!placeholder ? '' : placeholder}
            />
        </div>
    )
}
