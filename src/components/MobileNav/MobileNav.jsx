import Button from '../buttons/Button';
import { useEffect } from 'react';
import './MobileNav.css'
import close from "../../assets/icons/burger-close-icon.png";
import phone from "../../assets/icons/phone-icon.png";


const MobileNav = ({ active, setActive }) => {

    useEffect(() => {
        if (active) {
            document.body.style.overflow = 'hidden';
            document.body.style.touchAction = 'none';
        } else {
            document.body.style.overflow = 'auto';
            document.body.style.touchAction = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
            document.body.style.touchAction = 'auto';
        };

        return () => {
            document.body.style.overflowY = 'auto';
        };
    }, [active]);

    return (
        <div className={'mobile__nav container ' + (active ? 'active' : null)} onClick={() => { setActive(prev => !prev) }}>
            <div className='mobile__nav-top'><img src={close} alt="close" /></div>
            <ul className="mobile__nav-ul">
                <li><a href="#main">Головна</a></li>
                <li><a href="#about">Переваги</a></li>
                <li><a href="#courses">Курси</a></li>
                <li><a href="#responses">Відгуки</a></li>
            </ul>
            <div className='mobile__nav-bottom'>
                <img className='phone-icon' src={phone} alt="tel" />
                <Button text={'+380 50 600 60 94'} link={'+380 50 600 60 94'} classes={'btn-course step-2 mobile-nav-btn'} />
            </div>
        </div>
    )
}



export default MobileNav