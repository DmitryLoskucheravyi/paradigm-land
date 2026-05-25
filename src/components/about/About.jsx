import Card from "../card/Card";
import Button from "../buttons/Button";
import academicIcon from "../../assets/icons/card-icons/academic-icon.png"
import clockIcon from "../../assets/icons/card-icons/clock-icon.png"
import feedIcon from "../../assets/icons/card-icons/feed-icon.png"
import listIcon from "../../assets/icons/card-icons/list-icon.png"
import "./About.css"


const icons = [academicIcon, clockIcon, feedIcon, listIcon]

const statisticsData = [
    {
        number: "1000",
        title: "Випускників",
        desc: "Допомогли дітям зробити перші кроки в IT та перетворили захоплення іграми на корисні навички.",
    },
    {
        number: "5000",
        title: "Годин практики",
        desc: "Жодних нудних лекцій. Навчання побудоване на інтерактиві, щоб дитина не втрачала цікавість.",
    },
    {
        number: "700",
        title: "Готових проєктів",
        desc: "Наші учні вже створили власні ігри, сайти та додатки. Кожен проходить шлях від ідеї до релізу.",
    },
    {
        number: "8000",
        title: "Виконаних завдань",
        desc: "Фокус на реальній роботі з кодом. Ми вчимо логічно мислити та вирішувати складні задачі самостійно.",
    }
];


const About = (props) => {

    const data = statisticsData.map(({ number, title, desc }, index) => <Card number={number} title={title} desc={desc} icon={icons[index]} key={index} />)

    return (
        <>
            <section id="about" className="about container">
                <Button text={'Обрати курс'} classes={'btn-course step-2 mobile-hero-btn '} action='scroll-to' />

                <ul className="about__cards">
                    {data}
                </ul>
            </section>
        </>
    )

}

export default About