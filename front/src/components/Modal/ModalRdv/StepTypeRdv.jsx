import {useEffect, useState} from 'react';
import {api} from '../../services/Api';
import Button from '../Button/Button';
import {useNavigate} from 'react-router-dom';

const StepTypeRdv = (props) => {
    //Datas de test
    const dId_test = 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421f';
    const token_test =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAbWFpbC5jb20iLCJpZCI6IjFmODg3MWZjLTRhYTAtNDMyZi1iNzhhLTAwZTI0ZGVmZDgwMiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzExNjE3NTI3LCJleHAiOjE3MTE2MjExMjd9.MGRu2MGgLeZlCF_t0Fpoj0OM6FgCdqNHEMZDByKxKXY';

    const [rdvType, setRdvType] = useState(null);

    const navigate = useNavigate();

    const handleClick = () => {
        props.setSchedule({...props.schedule, step: 'pet'});
    };

    const handleChange = (e) => {
        const data = JSON.parse(e.target.value);
        props.setSchedule({
            ...props.schedule,
            appointmentType: data.name,
            appointmentTypeId: data.id,
        });
    };

    useEffect(() => {
        api.getAppointmentsYpeByDoctor(dId_test, token_test).then((data) => {
            setRdvType(data);
        });
    }, []);

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
                    {/* {rdvType && (
                    rdvType.map((value, index) => (
                        <option value={value.id} key={index}>
                            {value.name}
                        </option>
                    ))
                )} */}
                    {rdvType && (
                        <option
                            value={JSON.stringify({
                                id: rdvType.id,
                                name: rdvType.name,
                            })}
                            key={rdvType.id}>
                            {rdvType.name}
                        </option>
                    )}
                </select>
                <Button text="Valider" onClick={handleClick} />
            </div>
        </>
    );
};
export default StepTypeRdv;
