import {useEffect, useState} from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'

const ConnexionForm = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    useEffect(() => {}, [user])

    const handleSumbit = async () => {
        const response = await fetch(`http://localhost:3000/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(user),
        })
        if (!response.ok) {
            alert(
                `Erreur : ${response.status} - ${response.statusText} \n Veuillez réessayer.`
            )
        } else {
            const token = await response.json()
            localStorage.setItem('token', (token.token))
            window.location.href = '/'
        }
    }

    return (
        <div className="w-2/3 flex flex-col items-center">
            <h1 className="card-title place-content-center text-2xl font-bold">
                Connexion
            </h1>
            <Input
                label={'Email'}
                value={user.email}
                onChange={(value) => setUser({...user, email: value})}
                placeholder={'youremail@mail.com'}
            />
            <Input
                label={'Mot de passe'}
                type="password"
                value={user.password}
                onChange={(value) => setUser({...user, password: value})}
                placeholder={'***********'}
            />
            <div className="card-actions justify-end pt-3">
                <Button text="Se connecter" onClick={handleSumbit} />
            </div>
            <a
                className="link link-primary pt-2"
                onClick={() =>
                    document.getElementById('my_modal_5').showModal()
                }>
                Mot de passe oublié ?
            </a>
            <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Mot de passe oublié</h3>
                    <p className="py-4">
                        Veuillez saisir l'adresse mail associée à votre compte :
                    </p>
                    <Input
                        label={'Email'}
                        value={user.email}
                        onChange={(value) => setUser({...user, email: value})}
                        placeholder={'youremail@mail.com'}
                    />
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Button text="Envoyer" />
                            <Button text="Fermer" />
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default ConnexionForm
