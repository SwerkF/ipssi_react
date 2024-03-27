import {useState} from 'react'
import Input from '../input/Input'

const RegisterForm = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })

    const handleSumbit = () => {}
    return (
        <div className="w-2/3 flex flex-col items-center">
            <form>
                <h1 className="card-title place-content-center text-2xl font-bold">
                    Inscription
                </h1>
                <div className="flex flex-row justify-between space-x-2">
                    <Input
                        label={'Nom'}
                        value={user.lastName}
                        onChange={(value) =>
                            setUser({...user, lastName: value})
                        }
                    />
                    <Input
                        label={'Prénom'}
                        value={user.firstName}
                        onChange={(value) =>
                            setUser({...user, firstName: value})
                        }
                    />
                </div>
                <Input
                    label={'Email'}
                    value={user.email}
                    onChange={(value) => setUser({...user, email: value})}
                />
                <Input
                    label={'Mot de passe'}
                    value={user.password}
                    onChange={(value) => setUser({...user, password: value})}
                />
                <div className="card-actions justify-end pt-3">
                    <button className="btn btn-primary w-full">
                        S'inscrire
                    </button>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm
