import { useState } from "react";
import Elipse from "../elipse/Elipse";
import Button from "../buttons/Button";
import arrow from "../../assets/icons/arrow-icon.png"
import "./accordion.css";

const faqData = [
    { id: 1, title: "З якого віку можна починати професійне програмування?" },
    { id: 2, title: "Як проходять заняття?" },
    { id: 3, title: "Чи є офлайн заняття?" },
    { id: 4, title: "Який графік занять?" },
    { id: 5, title: "Чи є пробне заняття?" },
    { id: 6, title: "Коли дитина отримає сертифікат?" },
    { id: 7, title: "Можна обговорити питання по телефону?" },
];

const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Reprehenderit, ipsa.";

const FaqAccordion = () => {
    const [activeId, setActiveId] = useState(null);

    const toggleItem = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <div className=" faq-section container">
            <div className="accordion-text-content">
                <h2 className="h2">Відповіді на <br/> найпоширеніші питання</h2>
                <p>Не знайшли потрібне? Напишіть нам.</p>
                <Button text='Поставити питання' classes={'btn-course step-2 accordion-quest-btn'}></Button>
            </div>
            <Elipse parametr='glow-green accordion-2'></Elipse>
            <div className="accordion ">
                {faqData.map((item, index) => (
                    <div key={item.id} className="accordion-item">
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

                            <div className={`accordion-icon ${activeId === item.id ? "open" : ""}`}>
                                <img src={arrow} alt="" />
                            </div>
                        </div>

                        <div
                            className={`accordion-content ${activeId === item.id ? "show" : ""
                                }`}
                        >
                            <p className="accordion-faq-desc">{lorem}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqAccordion