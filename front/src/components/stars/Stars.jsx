import React from 'react';
import './Stars.scss';

//size: xs, sm, md, lg
export default function Stars({ notation, size }) {
  const notationInt = Math.round(notation);
  const starClass = `bg-orange-500 mask mask-star-2`;
  const stars = [];
  
  for (let i = 0; i < 5; i++) {
    if (i < notationInt) {
      stars.push(<input key={i} className={starClass}/>);
    } else {
      stars.push(<input key={i} className={`mask mask-star-2 bg-gray-200`}/>);
    }
  }

  return (
    <div className={`flex flex-row justify-center pt-1 rating rating-${size}`}>
      {stars}
    </div>
  );
}
