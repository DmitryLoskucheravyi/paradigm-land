import Card from '../card/Card'


import icon from '../../assets/icons/about-course-icon.png'

// import './AboutCourse.css'
import '../card/Card.css'
import '../about/About.css'
const AboutCourse = ({ content }) => {
    const data = content.map(({ title, description }, index) => <Card useCoursePageCard={true} title={title} desc={description} icon={icon} key={index} use />)

    return (

        <>

            <section className="about-course  container">
                <ul className="about__cards">
                    {data}
                </ul>
            </section>
        </>
    )
}

export default AboutCourse