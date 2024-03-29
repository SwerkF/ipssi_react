import {useEffect, useState} from 'react';
import {api} from '../../../services/Api';
import Button from '../../Button/Button';
import {useNavigate} from 'react-router-dom';

const StepTypeRdv = (props) => {
   
    const handleClick = () => {
        props.setSchedule({...props.schedule, step: 'pet'});
    };

    const handleChange = (e) => {
        const appointmentTypeId = e.target.value;
        const selectedAppointment = props.doctor.doctorAppointments.find(appointment => appointment.id === appointmentTypeId);

        console.log(appointmentTypeId, selectedAppointment)
        props.setSchedule({
            ...props.schedule,
            appointmentType:selectedAppointment.name ,
            appointmentTypeId: appointmentTypeId,
        });
    };

 

    return (
        <>
            <h3 className="font-bold text-lg">Prise de rendez-vous</h3>
            <p className="py-4">Veuillez choisir le type de rendez-vous</p>

            <div className="flex flex-col items-center space-y-4">
                <select
                    className="select select-primary w-full max-w-xs"
                    name="rdvType"
                    defaultValue="default"
                    onChange={handleChange}>
                    <option value="default">Type de rendez-vous</option>
                    {props.doctor && (
                    props.doctor.doctorAppointments.map((value, index) => (
                        <option value={value.id} key={index}>
                            {value.name}
                        </option>
                    ))
                )}
            
                </select>
                <Button text="Valider" onClick={handleClick} />
            </div>
        </>
    );
};
export default StepTypeRdv;
