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
                        <th>Heure</th>
                        <td>{props.appointment.time}</td>
                    </tr>
                    <tr>
                        <th>Votre animal</th>
                        <td>{props.appointment.pet}</td>
                    </tr>
                    <tr>
                        <th>Type de rendez-vous</th>
                        <td>{props.appointment.rdvType}</td>
                    </tr>
                </tbody>
            </table>
            <div className="flex flex-col items-center space-y-4">
                <Button
                    text="Valider le rendez-vous"
                    onClick={() => {
                        //TODO : Ajouter la requete pour ajouter le rendez-vous dans la BDD
                        alert('Votre rendez-vous a été validé')
                        navigate('/')
                    }}
                />
            </div>
        </>
    )
}

export default StepConfirmation
