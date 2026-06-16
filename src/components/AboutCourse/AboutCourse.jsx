import Card from '../card/Card'
import Elipse from '../elipse/Elipse'
import icon from '../../assets/icons/about-course-icon.png'
import Reveal from '../Reveal/Reveal'
import '../card/Card.css'
import '../about/About.css'
import './AboutCourse.css'

const AboutCourse = ({ content, suitable }) => {
    return (
        <section id='about' className="about-course section container">
            <Elipse parametr='glow-blue about-course-1-1'></Elipse>
            <div className="about__course-top">
                <h2 className="h2">Кому підходить цей курс</h2>
                <p className="p-small-secondary">
                    {suitable}
                </p>
            </div>
            <ul className="about__cards">
                {content.map(({ title, description }, index) => (
                    <Reveal key={index}>
                        <Card
                            useCoursePageCard={true}
                            title={title}
                            desc={description}
                            icon={icon}
                        />
                    </Reveal>
                ))}
            </ul>
            <Elipse parametr='glow-green about-course-1-2'></Elipse>
        </section>
    )
}

export default AboutCourse