import {useState} from 'react'
import Button from '../Button/Button'
import StepTypePetChoice from './StepTypePetChoice'
import StepTypeRdv from './StepTypeRdv'
import StepConfirmation from './StepConfirmation'
import {useLocation} from 'react-router-dom'

const ModalRdv = (props) => {
    const [appointment, setAppointment] = useState({
        step: '',
        rdvType: '',
        idRdvType: '',
        pet: '',
        idPet: '',
        time: '',
    })

    return (
        <>
            <Button
                onClick={() =>
                    document.getElementById('my_modal_3').showModal()
                }
                text="Prendre RDV"
            />
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box max-w-3xl flex flex-col items-center">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Button
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            text="X"
                            onClick={() => {
                                setAppointment({
                                    step: '',
                                    rdvType: '',
                                    idRdvType: '',
                                    pet: '',
                                    idPet: '',
                                    time: '',
                                })
                            }}
                        />
                    </form>
                    <div className="flex flex-col py-4 space-y-4 w-full">
                        {!appointment.step && (
                            <StepTypeRdv
                                setAppointment={setAppointment}
                                appointment={appointment}
                            />
                        )}
                        {appointment.step == 'pet' && (
                            <StepTypePetChoice
                                setAppointment={setAppointment}
                                appointment={appointment}
                            />
                        )}
                        {appointment.step == 'confirm' && (
                            <StepConfirmation appointment={appointment} />
                        )}
                    </div>
                    <div className="flex items-center">
                        <ul className="steps just">
                            <li className={`step step-primary`}>Horaire</li>
                            <li
                                className={`step ${
                                    !appointment.step |
                                        (appointment.step == 'pet') |
                                        (appointment.step == 'confirm') &&
                                    'step-primary'
                                }`}>
                                Type de RDV
                            </li>
                            <li
                                className={`step ${
                                    (appointment.step == 'confirm') |
                                        (appointment.step == 'pet') &&
                                    'step-primary'
                                }`}>
                                Choix de l'animal
                            </li>
                            <li
                                className={`step ${
                                    appointment.step == 'confirm' &&
                                    'step-primary'
                                }`}>
                                Confirmation
                            </li>
                        </ul>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default ModalRdv
