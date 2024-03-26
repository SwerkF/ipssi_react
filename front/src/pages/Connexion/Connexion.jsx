import ConnexionForm from '../../components/Connexion/ConnexionForm'
import RegisterForm from '../../components/Connexion/RegisterForm'

const Connexion = ({etat}) => {
    return (
        <div
            className="hero min-h-screen"
            style={{backgroundImage: 'url(/image_fond_connexion.jpeg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content card bg-base-100 shadow-xl w-full max-w-2xl">
                <figure className="py-4">
                    <div className="flex flex-row">
                        <img src="" alt="logo" />
                        <p className="text-3xl font-bold">Veto'Lib</p>
                    </div>
                </figure>
                <div className="flex item-center justify-items-center border-y-2 w-full">
                    <div className="card-body w-full flex items-center">
                        {etat == 'connexion' ? (
                            <ConnexionForm />
                        ) : (
                            <RegisterForm />
                        )}
                    </div>
                </div>
                <div className="flex flex-col py-2 w-2/3 items-center">
                    <button className="btn btn-primary w-full">
                        Créer un compte / S'inscrire
                    </button>
                    <p className="text-center text-xs">Veto'Lib 2024®</p>
                </div>
            </div>
        </div>
    )
}

export default Connexion
