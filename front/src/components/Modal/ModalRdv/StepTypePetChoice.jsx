import { useEffect, useState } from 'react';
import Logo from '/logo.png';
import { api } from '../../../services/Api';
import Button from '../../Button/Button';
import CardAnimal from '../../Card/CardAnimal/CardAnimal';

const StepTypePetChoice = (props) => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        setPets(props.user.pets);
        console.log('Pets ->', props.user.pet);
    }, [props.user]);

    const clickCardPet = (pet) => {
        console.log('click');
        props.setSchedule({
            ...props.schedule,
            step: 'confirm',
            petId: pet.id,
            pet: pet.name,
        });
    };

    return (
        <div className="flex flex-col items-center">
            <h3 className="font-bold text-lg">Choix de votre animal</h3>
            <p className="py-4">
                Veuillez choisir l'animal qui se présentera à la consultation
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {pets &&
                    pets.map((pet, index) => (
                        <CardAnimal
                            pet={pet}
                            key={index}
                            clickOnCard={clickCardPet}
                        />
                    ))}
            </div>
        </div>
    );
};

export default StepTypePetChoice;

