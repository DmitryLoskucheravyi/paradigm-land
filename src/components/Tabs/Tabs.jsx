import { useState } from "react";
import Elipse from "../elipse/Elipse";
import Reveal from "../Reveal/Reveal";
import './Tabs.css'

const plans = {
    junior: [
        "Основи Python: змінні, типи даних, input/print",
        "Оператори та базові обчислення",
        "Умови та цикли (if, while, for)",
        "Рядки та списки: методи, операції",
        "Перші консольні проєкти",
        "Функції (def) та модулі",
        "Знайомство з графікою: Turtle",
        "Основи створення інтерфейсу: Tkinter",
        "Фінальний проєкт: розробка та захист",
    ],

    middle: [
        "ООП",
        "Робота з файлами",
        "SQLite",
        "API",
        "Flask",
        "Django",
    ],

    senior: [
        "Архітектура",
        "Патерни проєктування",
        "Docker",
        "CI/CD",
        "Мікросервіси",
        "Хмарні сервіси",
    ],
};
function Tabs() {
    const [activeTab, setActiveTab] = useState("junior");

    const tabs = [
        { id: "junior", label: "python" },
        { id: "middle", label: "python" },
        { id: "senior", label: "python" },
    ];

    return (
        <section className="roadmap container">
            <Elipse parametr='glow-green tabs-1'></Elipse>
            <Elipse parametr='glow-blue tabs-2'></Elipse>

            <div className="">
                <div className="roadmap__top">
                    <h2 className="h2">План навчання</h2>
                    <p className="p-small-secondary">
                        Після проходження кожного етапу наші учні отримують сертифікат
                    </p>
                </div>

                <div className="roadmap__main">
                    <div className="roadmap__tabs">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                className={`roadmap__tab ${activeTab === tab.id ? "active" : ""
                                    }`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <span className="roadmap__tab-label">{tab.label}</span> <span>{tab.id}</span>
                            </button>
                        ))}
                    </div>



                    <div className="roadmap__list" key={activeTab}>
                        {plans[activeTab].map((item, index) => (
                            <Reveal>
                                <div className={"roadmap__card "} key={index}>
                                    <span className="p-small-secondary">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <p className="p-small-secondary">{item}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Tabs