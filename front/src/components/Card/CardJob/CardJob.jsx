import Button from '../../Button/Button'
import Input from '../../Input/Input'

const CardJob = (props) => {
    return (
        <>
            <div className="card w-80 h-80 bg-primary text-primary-content">
                <div className="card-body items-center flex flex-col">
                    <h2 className="card-title text-center">
                        {props.jobs.poste}
                    </h2>
                    <div className="overflow-x-auto w-full rounded-md">
                        <table className="table">
                            <tbody>
                                <tr className="bg-base-200">
                                    <th>Quand</th>
                                    <td>{props.jobs.start}</td>
                                </tr>

                                <tr className="bg-base-200">
                                    <th>Contrat</th>
                                    <td>{props.jobs.contractType}</td>
                                </tr>

                                <tr className="bg-base-200">
                                    <th>Lieu</th>
                                    <td>{props.jobs.place}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="card-actions justify-center w-full">
                        <button
                            className="btn"
                            onClick={() =>
                                document
                                    .getElementById('my_modal_4')
                                    .showModal()
                            }>
                            Postuler
                        </button>
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">
                                <h3 className="font-bold text-lg">
                                    Formulaire
                                </h3>
                                <h2 className="font-bold text-md">
                                    Veuillez remplir le formulaire suivant. Vous
                                    serez contacté prochainement.
                                </h2>
                                <div className="modal-action flex flex-col">
                                    <Input label={'Nom'} placeholder={'Nom'} />
                                    <Input
                                        label={'Prénom'}
                                        placeholder={'Prénom'}
                                    />
                                    <Input
                                        label={'Adresse mail'}
                                        placeholder={'johndoe@mail.com'}
                                        type={'email'}
                                    />
                                    <Input
                                        label={'Numéro de téléphone'}
                                        placeholder={'06 ** ** ** **'}
                                        type={'tel'}
                                    />

                                    <form method="dialog">
                                        {/* if there is a button, it will close the modal */}
                                        <button
                                            className="btn"
                                            onClick={() =>
                                                alert('Candidature envoyée.')
                                            }>
                                            Envoyer
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardJob
