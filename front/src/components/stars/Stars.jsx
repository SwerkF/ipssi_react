import React, { useEffect, useState } from 'react';
import './Stars.scss';

export default function Stars({ notation, size }) {
    const [rating, setRating] = useState(0);

    useEffect(() => {
        setRating(Math.ceil(notation * 2));
    }, [notation]);

    const renderStars = () => {
        const stars = [];
        stars.push(<input type="radio" name="rating-10" class="rating-hidden" />);

        for (let i = 0; i < 10; i++) {
            const defaultChecked = i === rating;
            stars.push(
                <input
                    key={`star-${i}`}
                    type="radio"
                    name="rating-10"
                    defaultChecked={defaultChecked}
                    className={`bg-orange-500 mask mask-star-2 mask-half-${i % 2 === 0 ? '1' : '2'}`}
                />
            );
        }
        return stars;
    };

    return (
        <div className={`rating rating-${size} rating-half`}>
            {renderStars()}
        </div>
    );
}
