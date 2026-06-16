import Card from "../card/Card";
import Button from "../buttons/Button";
import academicIcon from "../../assets/icons/card-icons/academic-icon.png"
import clockIcon from "../../assets/icons/card-icons/clock-icon.png"
import feedIcon from "../../assets/icons/card-icons/feed-icon.png"
import listIcon from "../../assets/icons/card-icons/list-icon.png"
import Reveal from "../Reveal/Reveal";
import "./About.css"

const statisticsData = [
    {
        id: 1,
        number: "1000",
        title: "Випускників",
        desc: "Допомогли дітям зробити перші кроки в IT та перетворили захоплення іграми на корисні навички.",
        icon: academicIcon
    },
    {
        id: 2,
        number: "5000",
        title: "Годин практики",
        desc: "Жодних нудних лекцій. Навчання побудоване на інтерактиві, щоб дитина не втрачала цікавість.",
        icon: clockIcon
    },
    {
        id: 3,
        number: "700",
        title: "Готових проєктів",
        desc: "Наші учні вже створили власні ігри, сайти та додатки. Кожен проходить шлях від ідеї до релізу.",
        icon: feedIcon
    },
    {
        id: 4,
        number: "8000",
        title: "Виконаних завдань",
        desc: "Фокус на реальній роботі з кодом. Ми вчимо логічно мислити та вирішувати складні задачі самостійно.",
        icon: listIcon
    }
];


const About = () => {
    return (
        <section id="features" className="about container">
            <Button text={'Обрати курс'} classes={'btn-course step-2 mobile-hero-btn '} action='scroll-to' />

            <ul className="about__cards">
                {statisticsData.map(({ id, number, title, desc, icon }) =>
                (
                    <Reveal key={id}>
                        <Card
                            number={number}
                            title={title}
                            desc={desc}
                            icon={icon}
                        />
                    </Reveal>
                ))}
            </ul>
        </section>
    )
}

export default About