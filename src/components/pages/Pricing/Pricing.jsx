import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import Button from "@components/Button/Button";
import { Link } from "react-router-dom";
import "./Pricing.css";

const CheckIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const PRICING_TIERS = [
    { id: "base", tag: "База", lessons: "1 заняття", price: 500, oldPrice: null, perLesson: 500, discount: null, savings: null },
    { id: "start", tag: "Старт", lessons: "4 заняття", price: 1900, oldPrice: 2000, perLesson: 475, discount: 5, savings: 100 },
    { id: "optimal", tag: "Оптимальний", lessons: "8 занять", price: 3600, oldPrice: 4000, perLesson: 450, discount: 10, savings: 400 },
    { id: "power", tag: "Потужний", lessons: "16 занять", price: 6800, oldPrice: 8000, perLesson: 425, discount: 15, savings: 1200 },
    { id: "mega", tag: "Мега", lessons: "32 заняття", price: 12800, oldPrice: 16000, perLesson: 400, discount: 20, savings: 3200 },
];

const PROMO_TIER = {
    tag: "Для нових учнів",
    lessons: "Перші 4 заняття",
    price: 1400,
    oldPrice: 2000,
    perLesson: 350,
    discount: 30,
    savings: 600,
};

const formatPrice = (value) => value.toLocaleString("uk-UA");

const PricingCard = ({ tier, promo }) => (
    <div className={`pricing-card bg-secondary base-card card-padding${promo ? " pricing-card--promo" : ""}`}>
        <div className="pricing-card-tag">{tier.tag}</div>

        {tier.discount && <span className="absolute-card-span pricing-card-discount">-{tier.discount}%</span>}

        <h3 className="pricing-card-lessons">{tier.lessons}</h3>

        <div className="pricing-card-price-row">
            {tier.oldPrice && <span className="pricing-card-price-old">{formatPrice(tier.oldPrice)} грн</span>}
            <span className="pricing-card-price-new">{formatPrice(tier.price)} грн</span>
        </div>

        <p className="p-small-secondary pricing-card-per-lesson">{formatPrice(tier.perLesson)} грн / урок</p>

        {tier.savings && (
            <p className="pricing-card-savings">
                <CheckIcon />
                Вигода {formatPrice(tier.savings)} грн
            </p>
        )}

        <Button text="Оплатити" classes="btn-course course-card-step-1 pricing-card-btn" action="modal" />
    </div>
);

const Pricing = () => {
    return (
        <div className="main">
            <Header />

            <section className="pricing-page section container">
                <h1 className="h2 pricing-page-title">Платіть менше, отримуйте більше</h1>
                <p className="p-small-secondary pricing-page-subtitle">
                    Обирайте абонемент зі знижкою — чим більше занять у пакеті, тим менша вартість одного уроку.
                </p>

                <div className="pricing-promo-wrapper">
                    <PricingCard tier={PROMO_TIER} promo />
                </div>

                <div className="pricing-grid">
                    {PRICING_TIERS.map((tier) => (
                        <PricingCard key={tier.id} tier={tier} />
                    ))}
                </div>

                <p className="p-small-secondary pricing-page-footnote">
                    * Йдеться про оплату конкретної кількості занять одним платежем.
                </p>
            </section>

            <Footer>
                <ul className="footer-nav">
                    <li><Link className="footer-link" to="/">Головна</Link></li>
                    <li><Link className="footer-link" to="/#features">Переваги</Link></li>
                    <li><Link className="footer-link" to="/#courses">Курси</Link></li>
                    <li><Link className="footer-link" to="/#responses">Відгуки</Link></li>
                </ul>
            </Footer>
        </div>
    );
};

export default Pricing;
