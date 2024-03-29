import {useEffect, useState} from 'react';
import Button from '../../Button/Button';
import StepTypePetChoice from './StepTypePetChoice';
import StepTypeRdv from './StepTypeRdv';
import StepConfirmation from './StepConfirmation';
import {useLocation} from 'react-router-dom';

const ModalRdv = ({ isActive, setDisabled, doctorInfo, user, date}) => {
    const [schedule, setSchedule] = useState({
        step: '',
        appointmentType: '',
        appointmentTypeId: '',
        pet: '',
        petId: '',
        dateString: '2024-03-28 00:00:00',
        date: null,
        city: 'Paris',
        address: '12 rue Cuvelier',
        doctorId: 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421f',
        doctorLastname: 'Martin',
        userId: 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421i',
    });
    
    
    useEffect(() => {
        if (doctorInfo) {
            setSchedule(prevSchedule => ({
                ...prevSchedule,
                doctorId: doctorInfo.id,
                doctorLastname: doctorInfo.lastname,
                address: doctorInfo.office.address,
                city: doctorInfo.office.city,
                
            }));
        }
    }, [doctorInfo]);

    useEffect(() => {
        if (user) {
            setSchedule(prevSchedule => ({
                ...prevSchedule,
                userId: user.id
            }));
        }
    }, [user]);

    useEffect(() => {
        if (date) {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };

            const dateObject = new Date(date);
            setSchedule(prevSchedule => ({
                ...prevSchedule,
                date: dateObject,
                dateString: date.toLocaleDateString('fr-FR', options).replace(/,.+$/, '')
            }));
        }
    }, [date]);

    return (
        <>
        {
            isActive &&
            <dialog id="my_modal_3" className="modal modal-open">
                <div className="modal-box max-w-3xl flex flex-col items-center">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Button
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            text="X"
                            onClick={() => {
                                setSchedule({
                                    step: '',
                                    appointmentType: '',
                                    appointmentTypeId: '',
                                    pet: '',
                                    petId: '',
                                    date: '',
                                    city: '',
                                    address: '',
                                    doctorId: '',
                                    doctorLastname: '',
                                    userId: '',
                                });
                                setDisabled(false)
                            }}
                        />
                    </form>
                    <div className="flex flex-col py-4 space-y-4 w-full">
                        {!schedule.step && (
                            <StepTypeRdv
                                setSchedule={setSchedule}
                                schedule={schedule}
                            />
                        )}
                        {schedule.step == 'pet' && (
                            <StepTypePetChoice
                                setSchedule={setSchedule}
                                schedule={schedule}
                            />
                        )}
                        {schedule.step == 'confirm' && (
                            <StepConfirmation schedule={schedule} />
                        )}
                    </div>
                    <div className="flex items-center">
                        <ul className="steps just">
                            <li className={`step step-primary`}>Horaire</li>
                            <li
                                className={`step ${
                                    !schedule.step |
                                        (schedule.step == 'pet') |
                                        (schedule.step == 'confirm') &&
                                    'step-primary'
                                }`}>
                                Type de RDV
                            </li>
                            <li
                                className={`step ${
                                    (schedule.step == 'confirm') |
                                        (schedule.step == 'pet') &&
                                    'step-primary'
                                }`}>
                                Choix de l'animal
                            </li>
                            <li
                                className={`step ${
                                    schedule.step == 'confirm' && 'step-primary'
                                }`}>
                                Confirmation
                            </li>
                        </ul>
                    </div>
                </div>
            </dialog>
        }
        </>
    );
};

export default ModalRdv;
