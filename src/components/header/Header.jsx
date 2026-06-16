import Button from "../buttons/Button"
import MobileNav from "../MobileNav/MobileNav"
import "./Header.css"
import { Link } from "react-router-dom"
import logo from "../../assets/icons/logo.png"
import logoText from "../../assets/icons/logo-text.png"
import logoTextDesctop from "../../assets/icons/logo-text-big.png"
import burger from "../../assets/icons/menu-burger.png"
import { useState } from "react"
const Header = (props) => {

    const [active, setActive] = useState(false)

    return (
        <header className="container">
            <nav className="header-nav">
                <div className="logo">
                    <Link to={`/`}>
                        <img src={logo} alt="" className="logo-icon" />
                        <img src={logoText} alt="" className="logo-text" />
                        <img src={logoTextDesctop} alt="" className="logo-text-desctop" />
                    </Link>
                </div>
                {
                    props.mainPageHeader ? <div className="burger-menu" onClick={() => { setActive(prev => !prev) }}>
                        <img src={burger} alt="" />
                    </div> : <Button text={'+380 50 600 60 94'} link={'+380 50 600 60 94'} classes={'btn-course header-course-tel'} />
                }
                {props.children}
                <div className="header-btns">
                    <Button text={'+380 50 600 60 94'} link={'+380 50 600 60 94'} classes={'btn-course step-2 header-btn'} />
                    <Button text={'Записатися'} classes={'btn-course step-1 header-btn'} action='modal' />
                </div>
            </nav>

            {
                props.mainPageHeader ? <MobileNav active={active} setActive={setActive} /> : null
            }
        </header>
    )
}

export default Header;