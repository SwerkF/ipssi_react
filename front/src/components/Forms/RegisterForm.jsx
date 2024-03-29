import {useEffect, useState} from 'react'
import Input from '../Input/Input'
import {useNavigate} from 'react-router-dom'
import Button from '../Button/Button'

const RegisterForm = () => {
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    })
    useEffect(() => {}, [user])

    const navigate = useNavigate()

    const handleSumbit = async () => {
        const response = await fetch(`http://localhost:3000/user/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(user),
        })
        if (!response.ok) {
            
        } else {
            const token = await response.json()
            localStorage.userToken = JSON.stringify(token)
            navigate('/')
        }
    }

    return (
        <div className="w-2/3 flex flex-col items-center">
            <h1 className="card-title place-content-center text-2xl font-bold">
                Inscription
            </h1>
            <div className="flex flex-row justify-between space-x-2">
                <Input
                    label={'Nom'}
                    value={user.lastname}
                    onChange={(value) => setUser({...user, lastname: value})}
                    placeholder={'Doe'}
                />
                <Input
                    label={'Prénom'}
                    value={user.firstname}
                    onChange={(value) => setUser({...user, firstname: value})}
                    placeholder={'John'}
                />
            </div>
            <Input
                label={'Email'}
                value={user.email}
                onChange={(value) => setUser({...user, email: value})}
                type={'email'}
                placeholder={'youremail@mail.com'}
            />
            <Input
                label={'Mot de passe'}
                value={user.password}
                onChange={(value) => setUser({...user, password: value})}
                type={'password'}
                placeholder={'***********'}
            />
            <div className="card-actions justify-center pt-3 w-full">
                <Button text={`S'inscrire`} onClick={handleSumbit} />
            </div>
        </div>
    )
}

export default RegisterForm
