import { useModal } from "../../ModalContext";
import Form from "../Form/Form";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import './Modal.css'

const Modal = () => {

    const { isModalOpen, modalVissionToggler } = useModal()
    
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") modalVissionToggler();
        };

        if (isModalOpen) {
            document.body.style.overflow = "hidden";
            document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isModalOpen, modalVissionToggler]);

    if (!isModalOpen) return null

    return createPortal(
        <div className="modal_outer" onClick={(e) => {
            console.log(e.target)
            if (e.target.classList.contains('modal_outer') || e.target.classList.contains('h2')) {
                modalVissionToggler()
            }
        }}>
            <Form />
        </div>,
        document.body
    )
}

export default Modal;