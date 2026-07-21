import { useEffect, useState } from "react";
import Elipse from "../elipse/Elipse";
import Button from "../buttons/Button";
import Reveal from "../Reveal/Reveal";
import useServices from "../../services/Services";
import "./accordion.css";

const ArrowIcon = () => (
    <svg
        width="16"
        height="8"
        viewBox="0 0 16 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path
            d="M14.75 0.750001L7.75 6.75L0.75 0.75"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const FaqAccordion = () => {
    const [activeId, setActiveId] = useState(null);
    const [faqData, setFaqData] = useState([]);
    const { getFaq } = useServices();

    useEffect(() => {
        getFaq().then(data => setFaqData(data || []));
    }, []);

    const toggleItem = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <div className=" faq-section container section">
            <div className="accordion-text-content">
                <h2 className="h2">Відповіді на <br /> найпоширеніші питання</h2>
                <p className="p-small-secondary">Не знайшли потрібне? Напишіть нам.</p>
                <Button text='Поставити питання' classes={'btn-course step-2 accordion-quest-btn'} action='modal'></Button>
            </div>
            <Elipse parametr='glow-green accordion-2'></Elipse>
            <div className="accordion ">
                {faqData.map((item, index) => (
                    <div key={item.id} className="accordion-item">

                        <Reveal>
                            <div
                                className="accordion-header"
                                onClick={() => toggleItem(item.id)}
                            >
                                <div className="accordion-left">
                                    <span className="accordion-index">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <span className="accordion-title">{item.title}</span>
                                </div>

                                <div tabIndex={0} className={`accordion-icon ${activeId === item.id ? "open" : ""}`}>
                                    <ArrowIcon />
                                </div>
                            </div>
                        </Reveal>
                        <div
                            className={`accordion-content ${activeId === item.id ? "show" : ""
                                }`}
                        >
                            <p className="accordion-faq-desc">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqAccordion