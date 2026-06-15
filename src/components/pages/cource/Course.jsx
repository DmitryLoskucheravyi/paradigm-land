import Response from "../../response/Response";
import CourseHero from "../../CourseHero/CourseHero";
import AboutCourse from "../../AboutCourse/AboutCourse";
import Form from "../../Form/Form";
import Footer from "../../footer/Footer";
import Tabs from "../../Tabs/Tabs";
import ChildWork from "../../ChildWork/ChildWork";
import { ResponseTextWrapper } from "../../response/Response";
import useServices from "../../services/Services";
import { Link, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
import "./Course.css"
import Reveal from "../../Reveal/Reveal";
const Course = () => {

    const { id } = useParams();
    console.log(id)
    const {
        loading,
        error,
        getCourse
    } = useServices();

    const [content, setContent] = useState(null)



    useEffect(() => {
        let mounted = true;

        getCourse(id).then(course => {
            if (mounted) {
                setContent(course);
            }
        });

        return () => {
            mounted = false;
        }
    }, [id, getCourse])
    if (error) {
        return (
            <>
                <div>Error!</div>
            </>
        )
    }
    if (loading || !content) {
        return (
            <>
                <div>Loading...</div>
            </>
        )
    }
    return (
        <div className="main" >
            <Reveal>
                <CourseHero content={content} />
            </Reveal>
            <Reveal>
                <AboutCourse content={content.fit} suitable={content.suitable} />
            </Reveal>
            <Reveal>
                <ChildWork video={content.video} isActive={true} />
            </Reveal>
            <Reveal>
                <Tabs />
            </Reveal>
            <Reveal>
                <Response>
                    <Reveal>
                        <ResponseTextWrapper filter={id} arrowHideClass={"arrows-mobile-hide"} useCarousell={true} />
                    </Reveal>
                </Response>
            </Reveal>
            <Reveal>
                <Form />
            </Reveal>


            <Footer >
                <ul className="footer-nav">
                    <li><Link to="/">Головна</Link></li>
                    <li><a href="#about">Переваги</a></li>
                    <li><HashLink to="/#courses">Курси</HashLink></li>
                    <li><a href="#responses">Відгуки</a></li>
                </ul>
            </Footer>
        </div>

    )
}

export default Course;










