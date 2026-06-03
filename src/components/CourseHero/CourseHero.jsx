import Header from "../header/Header";
import Button from "../buttons/Button";


import './CourseHero.css'
const CourseHero = (props) => {

    const { title, subtitle, description, ageRange, tags, image } = props.content
    console.log(image)
    return (
        <>

            <section className="container">
                <Header />
                <div className="hero__course-wrapper" >
                    <div className="hero__course-content">
                        <div className="hero__course-tags">
                            <div className="course-tag" style={{ borderRadius: '1.6rem' }}>
                                <p>Для дітей {ageRange}</p></div>
                            <div className="course-tag" style={{ borderRadius: '1.6rem' }}>
                                <p>{tags[0]}</p></div>
                            <div className="course-tag" style={{ borderRadius: '1.6rem' }}>
                                <p>{tags[1]}</p></div>
                        </div>

                        <div>
                            <div className="hero__course-text">
                                <h2 className="hero__course-content-title">{title} - <br /> {subtitle.toLowerCase()}</h2>
                                <p className="hero__content-desc">{description}</p>
                            </div>
                            <Button text={'Записатися'} classes={'btn-course step-1 course-page-button'} action='modal' />
                        </div>
                    </div>
                    <div className="hero__course-logo">
                        <img src={image} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}


export default CourseHero;