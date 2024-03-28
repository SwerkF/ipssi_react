import {useEffect, useState} from 'react'
import Logo from '/logo.png'
import {api} from '../../services/Api'
import Button from '../Button/Button'

const StepTypePetChoice = () => {
    const [petsUser, setPetsUser] = useState(null)

    const userId_test = 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421i'
    const accessToken_test = ''

    useEffect(() => {
        api.getPetsOfUser(userId_test, accessToken_test).then((data) => {
            setPetsUser(data)
        })
    }, [])

    const handleClick = (id) => {
        console.log('Animal sélectionné : ', id)
    }

    console.log(petsUser)

    return (
        <>
            <h3 className="font-bold text-lg">Choix de votre animal</h3>
            <p className="py-4">
                Veuillez choisir l'animal qui se présentera à la consultation
            </p>
            <div className="grid grid-cols-3 gap-4">
                {petsUser &&
                    petsUser.map((value, index) => (
                        // <div key={index}>
                        //     <p>{value.avatar}</p>
                        //     <p>{value.name}</p>
                        // </div>

                        <div
                            key={index}
                            className="card w-auto bg-base-100 shadow-xl items-center">
                            <figure>
                                <img src={Logo} alt={value.avatar} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{value.name}</h2>
                                <div className="card-actions justify-center">
                                    <Button
                                        text="Sélectionner"
                                        value={value.id}
                                        onClick={handleClick}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    )
}

export default StepTypePetChoice
