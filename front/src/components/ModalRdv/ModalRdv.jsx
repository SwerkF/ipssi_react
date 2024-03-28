import Button from '../Button/Button'
import StepTypePetChoice from './StepTypePetChoice'
import StepTypeRdv from './StepTypeRdv'

const ModalRdv = () => {
    return (
        <>
            <Button
                onClick={() =>
                    document.getElementById('my_modal_3').showModal()
                }
                text="Prendre RDV"
            />
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Button
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            text="X"
                        />
                    </form>
                    <div className="flex flex-col">
                        {/* <StepTypeRdv /> */}
                        <StepTypePetChoice />
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default ModalRdv
