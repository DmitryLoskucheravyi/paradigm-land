

import { useModal } from "../../ModalContext"
import "./Button.css"

const Button = (props) => {
    const { text, link, classes, action } = props

    const { modalVissionToggler } = useModal()

    return (
        <button onClick={() => {
            switch (action) {
                case 'modal':
                    modalVissionToggler()
                    break;
                case 'scroll-to':
                    document
                        .getElementById("courses")
                        ?.scrollIntoView({
                            behavior: "smooth"
                        });
                    break;
                default:
                    console.log('no action!')
            }
        }} className={classes + " button-utility"} style={{ borderRadius: '1.6rem', padding: '1.6rem' }}>{link ? <a href={'tel:' + link}>{text}</a> : text}</button>
    )
}

export default Button