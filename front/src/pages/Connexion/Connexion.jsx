import ConnexionForm from '../../components/Forms/ConnexionForm'
import RegisterForm from '../../components/Forms/RegisterForm'
import Logo from '../../../public/logo.png'
import Button from '../../components/Button/Button'
import {useNavigate, useLocation} from 'react-router-dom'

const Connexion = ({form}) => {
    const location = useLocation()
    const navigate = useNavigate()

    let textButton = ''
    location.pathname == '/register' && (textButton = `Déjà un compte ?`)
    location.pathname == '/login' && (textButton = `S'inscrire`)

    const handleClick = () => {
        if (location.pathname == '/register') {
            navigate('/login')
        }
        if (location.pathname == '/login') {
            navigate('/register')
        }
    }

    return (
        <div
            className="hero min-h-screen"
            style={{backgroundImage: 'url(/image_fond_connexion.jpeg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content card bg-base-100 shadow-xl w-full max-w-2xl">
                <figure className="py-4">
                    <div className="flex flex-row items-center">
                        <img src={Logo} alt="logo" />
                        <p className="text-3xl font-bold align-middle">
                            Veto'Lib
                        </p>
                    </div>
                </figure>
                <div className="flex item-center justify-items-center border-y-2 w-full">
                    <div className="card-body w-full flex items-center">
                        {form == 'connexion' && <ConnexionForm />}
                        {form == 'register' && <RegisterForm />}
                    </div>
                </div>
                <div className="flex flex-col py-2 w-2/3 items-center">
                    <Button text={textButton} onClick={handleClick} />
                    <p className="text-center text-xs text-gray-400 pt-3">
                        Veto'Lib 2024®
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Connexion
