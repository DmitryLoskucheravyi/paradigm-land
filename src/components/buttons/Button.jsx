

import { useModal } from "../../ModalContext"
import { Link } from "react-router-dom"
import "./Button.css"

const Button = (props) => {
    const { text, link, classes, action, useRouterLink } = props
    const classNames = classes + " button-utility"
    const { modalVissionToggler } = useModal()
    const styles = { borderRadius: '1.6rem', padding: '1.6rem' }
    const actionFunction = () => {
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
    }
    if (useRouterLink) return (<Link to={useRouterLink} className={classNames} style={styles}>{text}</Link>)
    else if (link) return (<a href={'tel:' + link} onClick={actionFunction} className={classNames} style={styles}>{text}</a>)
    else return (<button onClick={actionFunction} className={classNames} style={styles}>{text}</button>)

}

export default Button