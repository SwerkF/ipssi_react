import {useEffect, useState} from 'react'
import {api} from '../../services/Api'
import Button from '../Button/Button'

const StepTypeRdv = ({doctor}) => {
    const [rdvType, setRdvType] = useState(null)
    const [typeChoice, setTypeChoice] = useState(null)

    const dId_test = 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421f'
    const token_test =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAbWFpbC5jb20iLCJpZCI6IjFmODg3MWZjLTRhYTAtNDMyZi1iNzhhLTAwZTI0ZGVmZDgwMiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzExNjE3NTI3LCJleHAiOjE3MTE2MjExMjd9.MGRu2MGgLeZlCF_t0Fpoj0OM6FgCdqNHEMZDByKxKXY'

    const handleClick = () => {
        console.log('RDV Type sélectionné', typeChoice)
    }

    const handleChange = (e) => {
        setTypeChoice(e.target.value)
    }

    useEffect(() => {
        api.getAppointmentsYpeByDoctor(dId_test, token_test).then((data) => {
            setRdvType(data)
        })
    }, [])

    console.log('RDV Type', rdvType)

    return (
        <>
            <h3 className="font-bold text-lg">Prise de rendez-vous</h3>
            <p className="py-4">Veuillez choisir le type de rendez-vous</p>
            <select
                className="select select-primary w-full max-w-xs"
                name="rdvType"
                defaultValue="default"
                onChange={handleChange}>
                <option value="default" disabled>
                    Type de rendez-vous
                </option>
                {/* {rdvType && (
                    rdvType.map((value, index) => (
                        <option value={value.id} key={index}>
                            {value.name}
                        </option>
                    ))
                )} */}
                {rdvType && (
                    <option value={rdvType.id} key={rdvType.id}>
                        {rdvType.name}
                    </option>
                )}
            </select>
            <Button text="Valider" onClick={handleClick} />
            <ul className="steps">
                <li className="step step-primary">Horaire</li>
                <li className="step step-primary">Type de RDV</li>
                <li className="step">Choix de l'animal</li>
                <li className="step">Confirmation</li>
            </ul>
        </>
    )
}
export default StepTypeRdv
