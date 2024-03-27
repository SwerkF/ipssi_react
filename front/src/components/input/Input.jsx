import React from 'react'
import './Input.scss'
import Button from '../Button/Button'

export default function Input({
    label,
    value,
    onChange,
    placeholder,
    className,
    type,
    shadow,
    submitButton = null,
}) {
    return (
        <div className="flex flex-col w-full">
            <label>{label ? label : ''}</label>
            <div
                className={
                    (className ? className : 'input-component') +
                    ' ' +
                    (shadow ? '' : 'shadow-lg')
                }>
                <div className="flex flex-row justify-between items-center h-full">
                    <input
                        type={!type ? 'text' : type}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder={!placeholder ? '' : placeholder}
                    />
                    {submitButton && (
                        <Button
                            onClick={submitButton}
                            className={'btn btn-primary btn-sm w-1/8'}
                            icon={'/avion-en-papier.svg'}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}
