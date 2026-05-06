import Header from "../header/Header"
import About from "../about/About"
import Button from "../buttons/Button"
import Elipse from "../elipse/Elipse"

import academicIcon from "../../assets/icons/academic-icon.png"
import medalIcon from "../../assets/icons/medal-icon.png"
import layersIcon from "../../assets/icons/layers-icon.png"
import "./Hero.css"
const Hero = () => {
    return (
        <>
            <div className="hero container  ">

                <Header></Header>
                <div className="hero__content">
                    <div className="hero__tags">
                        <div className="tag">
                            <img src={medalIcon} alt="" />
                            <p>Сертифікат про навчання</p></div>
                        <div className="tag">
                            <img src={academicIcon} alt="" />
                            <p>IT-професія</p></div>
                        <div className="tag">
                            <img src={layersIcon} alt="" />
                            <p>Портфоліо проектів</p></div>
                    </div>

                    <div className="hero__text">
                        <h2 className="hero__content-title">Школа програмування для дітей від 5 років</h2>
                        <p className="hero__content-desc">З IT Paradigma ваша дитина вже на перших заняттях створить власну гру, програму або сайт. </p>
                    </div>
                </div>



                <div className="btns hero_btns">
                    <Button text={'Записатися'} classes={'btn-course step-1 hero-mobile-shadow-btn'} />
                    <Button text={'Обрати курс'} classes={'btn-course step-2 hero-desctop-btn'} />
                </div>
                <Elipse parametr='glow-blue hero-1'></Elipse>
                <Elipse parametr='glow-green hero-2'></Elipse>
            </div>


        </>
    )
}

export default Hero;