import {useEffect, useState} from 'react';
import Logo from '/logo.png';
import {api} from '../../services/Api';
import Button from '../Button/Button';
import CardAnimal from '../Card/CardAnimal/CardAnimal';

const StepTypePetChoice = (props) => {
    //Datas test
    const userId_test = 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421i';
    const accessToken_test = '';

    const [petsUser, setPetsUser] = useState(null);

    useEffect(() => {
        api.getPetsOfUser(userId_test, accessToken_test).then((data) => {
            setPetsUser(data);
        });
    }, []);

    return (
        <>
            <h3 className="font-bold text-lg">Choix de votre animal</h3>
            <p className="py-4">
                Veuillez choisir l'animal qui se présentera à la consultation
            </p>
            <div className="grid grid-cols-3 gap-4">
                {petsUser &&
                    petsUser.map((value, index) => (
                        <CardAnimal
                            pet={value}
                            key={index}
                            onClick={() => {
                                props.setAppointment({
                                    ...props.appointment,
                                    step: 'confirm',
                                    petId: value.id,
                                    pet: value.name,
                                });
                                console.log('Animal', props.appointment);
                            }}
                        />
                    ))}
            </div>
        </>
    );
};

export default StepTypePetChoice;
