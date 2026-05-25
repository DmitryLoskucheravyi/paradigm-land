import Elipse from "../elipse/Elipse";

import logo from "../../assets/icons/logo.png";
import logoText from "../../assets/icons/logo-text.png";
import facebook from "../../assets/icons/footer-icons/facebook-icon.png";
import inst from "../../assets/icons/footer-icons/inst-icon.png";
import tikTok from "../../assets/icons/footer-icons/tiktok-icon.png";
import telegram from "../../assets/icons/footer-icons/telegram-icon.png";

import './Footer.css';

const Footer = () => {
  return (
    <div className="footer_outer">

      <Elipse parametr='glow-green form-2'></Elipse>

      <footer className="footer">

        <div className="footer-top container">
          <div className="footer-left">
            <div className="logo ft-logo">
              <img src={logo} alt="" className="logo-icon" />
              <img src={logoText} alt="" className="logo-text" />
            </div>

            <p className="footer-description p-small-secondary">
              Онлайн-школа програмування для дітей від 5 до 17 років. Ми навчаємо створювати ігри, сайти та додатки через практику та роботу над реальними проєктами. Ми допомагаємо зробити перші кроки в IT та поступово доводимо учнів до створення власних повноцінних проєктів.
            </p>

            <ul className="footer-nav">
              <li><a href="#home">Головна</a></li>
              <li><a href="#features">Переваги</a></li>
              <li><a href="#courses">Курси</a></li>
              <li><a href="#reviews">Відгуки</a></li>
            </ul>
          </div>

          <div className="footer-right">
            <div className="footer-contact-block">
              <h3 className="footer-title">Контакти</h3>
              <a href="tel:+380506006094" className="footer-link tel">+380 50 600 60 94</a>
            </div>

            <div className="footer-contact-block">
              <h3 className="footer-title">Соціальні мережі</h3>
              <div className="social-icons">
                <a href="#" className="social-icon-placeholder"><img src={facebook} alt="Facebook" /></a>
                <a href="#" className="social-icon-placeholder"><img src={inst} alt="Instagram" /></a>
                <a href="#" className="social-icon-placeholder"><img src={tikTok} alt="TikTok" /></a>
                <a href="#" className="social-icon-placeholder"><img src={telegram} alt="Telegram" /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="footer-copyright">© 2026 IT Paradigma. Всі права захищені</p>
            <a href="#" className="">Договір оферти</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;