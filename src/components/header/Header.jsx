
import "./Header.css"

import logo from "../../assets/icons/logo.png"
import logoText from "../../assets/icons/logo-text.png"
import burger from "../../assets/icons/menu-burger.png"
const Header = (props) => {



    return (
        <header>
            <nav className="header-nav">
                <div className="logo">
                    <img src={logo} alt="" className="logo-icon" />
                    <img src={logoText} alt="" className="logo-text" />

                </div>
                <div className="burger-menu">
                    <img src={burger} alt="" />
                </div>
            </nav>
        </header>

    )
}

export default Header;