import React from 'react';
import './Stars.scss';

//size: xs, sm, md, lg
export default function Stars({ notation, size }) {
  const notationInt = Math.round(notation);

  const stars = [];
  for (let i = 1; i <= 10; i++) {
    const isChecked = i <= notationInt;

    const starClass = `bg-orange-500 mask mask-star-2 mask-half-${i % 2 === 0 ? 2 : 1} ${isChecked ? 'checked' : ''}`;

    stars.push(
      <input
        key={i}
        type="radio"
        name="rating-10"
        className={`${starClass}`}
        checked={isChecked}
      />
    );
  }

  return (
    <div className={`rating rating-${size} rating-half`}>
      {stars}
    </div>
  );
}
