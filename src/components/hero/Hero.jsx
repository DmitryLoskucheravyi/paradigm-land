import About from "../about/About"
import Button from "../buttons/Button"
import Elipse from "../elipse/Elipse"
import Header from "../header/Header"
import image1 from "../../assets/images/image1.png"
import image2 from "../../assets/images/image2.png"
import "./Hero.css"



const Hero = () => {
    return (
        <section id="hero" className="hero container  ">
            <Header></Header>

            <div className="hero__wrapper">
                <div className="hero__content">
                    <div className="hero__tags">
                        <div className="tag" style={{ borderRadius: '1.6rem' }}>

                            <svg className="hero-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="9" r="7" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M7.35111 15L6.71424 17.323C6.0859 19.6148 5.77173 20.7607 6.19097 21.3881C6.3379 21.6079 6.535 21.7844 6.76372 21.9008C7.41635 22.2331 8.42401 21.7081 10.4393 20.658C11.1099 20.3086 11.4452 20.1339 11.8014 20.0959C11.9335 20.0818 12.0665 20.0818 12.1986 20.0959C12.5548 20.1339 12.8901 20.3086 13.5607 20.658C15.576 21.7081 16.5837 22.2331 17.2363 21.9008C17.465 21.7844 17.6621 21.6079 17.809 21.3881C18.2283 20.7607 17.9141 19.6148 17.2858 17.323L16.6489 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>

                            <p>Сертифікат про навчання</p></div>
                        <div className="tag" style={{ borderRadius: '1.6rem' }}>
                            <svg className="hero-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.78272 3.49965C11.2037 2.83345 12.7962 2.83345 14.2172 3.49965L20.9084 6.63664C22.3639 7.31899 22.3639 9.68105 20.9084 10.3634L14.2173 13.5004C12.7963 14.1665 11.2038 14.1665 9.78281 13.5004L3.0916 10.3634C1.63613 9.68101 1.63614 7.31895 3.0916 6.63659L9.78272 3.49965Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
                                <path d="M2 8.5V14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                                <path d="M19 11.5V16.6254C19 17.6334 18.4965 18.5772 17.6147 19.0656C16.1463 19.8787 13.796 21 12 21C10.204 21 7.8537 19.8787 6.38533 19.0656C5.5035 18.5772 5 17.6334 5 16.6254V11.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                            </svg>

                            <p>IT-професія</p></div>
                        <div className="tag" style={{ borderRadius: '1.6rem' }}>
                            <svg className="hero-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.97883 9.68508C2.99294 8.89073 2 8.49355 2 8C2 7.50645 2.99294 7.10927 4.97883 6.31492L7.7873 5.19153C9.77318 4.39718 10.7661 4 12 4C13.2339 4 14.2268 4.39718 16.2127 5.19153L19.0212 6.31492C21.0071 7.10927 22 7.50645 22 8C22 8.49355 21.0071 8.89073 19.0212 9.68508L16.2127 10.8085C14.2268 11.6028 13.2339 12 12 12C10.7661 12 9.77318 11.6028 7.7873 10.8085L4.97883 9.68508Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
                                <path d="M22 12C22 12 21.0071 12.8907 19.0212 13.6851L16.2127 14.8085C14.2268 15.6028 13.2339 16 12 16C10.7661 16 9.77318 15.6028 7.7873 14.8085L4.97883 13.6851C2.99294 12.8907 2 12 2 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                                <path d="M22 16C22 16 21.0071 16.8907 19.0212 17.6851L16.2127 18.8085C14.2268 19.6028 13.2339 20 12 20C10.7661 20 9.77318 19.6028 7.7873 18.8085L4.97883 17.6851C2.99294 16.8907 2 16 2 16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                            </svg>

                            <p>Портфоліо проектів</p></div>
                    </div>

                    <div>
                        <div className="hero__text">
                            <h2 className="hero__content-title">Школа програмування для дітей від 5 років</h2>
                            <p className="hero__content-desc">З IT Paradigma ваша дитина вже на перших заняттях створить власну гру, програму або сайт. </p>
                        </div>
                        <div className="btns hero_btns">
                            <Button text={'Записатися'} classes={'btn-course step-1 hero-mobile-shadow-btn'} action='modal' />
                            <Button text={'Обрати курс'} classes={'btn-course step-2 hero-desctop-btn'} action='scroll-to' />
                        </div>
                    </div>
                </div>

                <div className="hero__wrapper-imgs">
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                </div>
            </div>

            <Elipse parametr='glow-blue hero-1'></Elipse>
            <Elipse parametr='glow-green hero-2'></Elipse>
            <Elipse parametr='glow-blue hero-3'></Elipse>

        </section>
    )
}

export default Hero;