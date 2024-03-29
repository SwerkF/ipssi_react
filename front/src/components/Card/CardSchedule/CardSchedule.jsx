import React, { useEffect, useState } from 'react';
import './CardSchedule.scss';

export default function CardSchedule({ daysOfWeek, showAll }) {

    return (
        <div className="card-schedule w-full">
            {daysOfWeek.map((day, index) => (
                <div className="day-column" key={index}>
                    <h3 className="mb-1">{day.dayName}</h3>
                    <h2 className="mb-4">{day.day} {day.month}</h2>

                    <ul>
                        {(showAll ? day.timing : day.timing.slice(0, 3)).map((timeSlot, idx) => (
                            <li key={idx} className="px-2 py-2 flex items-center justify-center mb-3">
                                {timeSlot.hour}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
