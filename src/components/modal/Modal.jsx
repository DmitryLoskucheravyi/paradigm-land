import { useModal } from "../../ModalContext";
import Form from "../Form/Form";
import { createPortal } from "react-dom";
import './Modal.css'

const Modal = () => {

    const { isModalOpen, modalVissionToggler } = useModal()

    if (!isModalOpen) return null

    return createPortal(
        <div className="modal_outer" onClick={(e) => {
            if (e.currentTarget === e.target) {
                modalVissionToggler()
            }
        }}>
            <Form />
        </div>,
        document.body
    )
}

export default Modal;