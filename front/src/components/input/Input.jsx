import React from 'react';
import './Input.scss';

export default function Input({ label, value, onChange }) {
  return (
    <div className='input-group'>
      <label>{label}</label>
      <input
        className='input-component'
        type='text'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
