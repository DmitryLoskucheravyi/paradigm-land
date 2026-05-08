import logo from "../../assets/icons/logo.png"
import logoText from "../../assets/icons/logo-text.png"
import facebook from "../../assets/icons/footer-icons/facebook-icon.png"
import inst from "../../assets/icons/footer-icons/inst-icon.png"
import tikTok from "../../assets/icons/footer-icons/tiktok-icon.png"
import telegram from "../../assets/icons/footer-icons/telegram-icon.png"



import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            {/* Top Section */}
            <div className="footer-top container">
                <div className="footer-left">
                    <div className="logo ft-logo">
                        <img src={logo} alt="" className="logo-icon" />
                        <img src={logoText} alt="" className="logo-text" />

                    </div>
                    <p className="footer-description p-small-secondary">
                        Онлайн-школа програмування для дітей від 5 до 17 років. Ми навчаємо створювати ігри, сайти та додатки через практику та роботу над реальними проєктами. Ми допомагаємо зробити перші кроки в IT та поступово доводимо учнів до створення власних повноцінних проєктів.
                    </p>
                </div>

                <div className="footer-right">
                    <ul className="footer-nav">
                        <li><a href="#home">Головна</a></li>
                        <li><a href="#features">Переваги</a></li>
                        <li><a href="#courses">Курси</a></li>
                        <li><a href="#reviews">Відгуки</a></li>
                    </ul>
                </div>
            </div>

            {/* Middle Section */}
            <div className="footer-middle container">
                <div className="footer-left">
                    <h3 className="footer-title">Контакти</h3>
                    <a href="tel:+380506006094" className="footer-link">+380 50 600 60 94</a>
                </div>

                <div className="footer-right">
                    <h3 className="footer-title">Соціальні мережі</h3>
                    <div className="social-icons">
                        <img className="social-icon-placeholder" src={facebook} alt='facebook'></img>
                        <img className="social-icon-placeholder" src={inst} alt='facebook'></img>
                        <img className="social-icon-placeholder" src={tikTok} alt='facebook'></img>
                        <img className="social-icon-placeholder" src={telegram} alt='facebook'></img>

                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="footer-bottom">
                <div className="container">
                    <p className="footer-copyright">© 2026 IT Paradigma. Всі права захищені</p>
                    <a href="#" className="footer-link">Договір оферти</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
