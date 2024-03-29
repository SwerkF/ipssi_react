import {api} from '../../services/Api'
import Button from '../Button/Button'
import {useNavigate} from 'react-router-dom'

const StepConfirmation = (props) => {
    const navigate = useNavigate()
    return (
        <>
            <h3 className="font-bold text-lg">
                Confirmation de votre rendez-vous
            </h3>
            <p className="py-4">
                Veuillez trouver ci-dessous le résumé de votre rendez-vous
            </p>
            <table className="table">
                <tbody>
                    <tr>
                        <th>Date et Heure</th>
                        <td>{props.schedule.date}</td>
                    </tr>
                    <tr>
                        <th>Votre animal</th>
                        <td>{props.schedule.pet}</td>
                    </tr>
                    <tr>
                        <th>Type de rendez-vous</th>
                        <td>{props.schedule.appointmentType}</td>
                    </tr>
                    <tr>
                        <th>Chez</th>
                        <td>
                            Dr. {props.schedule.doctorLastname} :{' '}
                            {props.schedule.address} - {props.schedule.city}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="flex flex-col items-center space-y-4">
                <Button
                    text="Valider le rendez-vous"
                    onClick={() => {
                        api.addSchedule(props.schedule)
                        alert('Votre rendez-vous a été validé')
                        //navigate('/');
                    }}
                />
            </div>
        </>
    )
}

export default StepConfirmation
