import Button from '../buttons/Button';

import './MobileNav.css'
import close from "../../assets/icons/burger-close-icon.png";
import phone from "../../assets/icons/phone-icon.png";


const MobileNav = ({active}) => {
    return (
        <div className={'mobile__nav container ' + (active ? 'active' : null)}>
            <img src={close} alt="close" />
            <ul className="mobile__nav-ul">
                <li><a href="#main">Головна</a></li>
                <li><a href="#about">Переваги</a></li>
                <li><a href="#cources">Курси</a></li>
                <li><a href="#responses">Відгуки</a></li>
            </ul>
            <div className='mobile__nav-bottom'>
                <img src={phone} alt="phone" />
                <Button text={'+380 50 600 60 94'} link={'+380 50 600 60 94'} classes={'btn-course step-2 mobile-nav-btn'} />

            </div>
        </div>
    )
}



export default MobileNav