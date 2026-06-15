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
import { useEffect, useState } from "react";
import "./Course.css"
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
            <CourseHero content={content} />
            <AboutCourse content={content.fit} suitable={content.suitable} />
            <ChildWork video={content.video} isActive={true}/>
            <Tabs />
            <Response>
                <ResponseTextWrapper filter={id} arrowHideClass={"arrows-mobile-hide"} useCarousell={true} />
            </Response>
            <Form />
            <Footer >
                <ul className="footer-nav">
                    <li><Link to="/">Головна</Link></li>
                    <li><a href="#features">Переваги</a></li>
                    <li><a href="#courses">Курси</a></li>
                    <li><a href="#responses">Відгуки</a></li>
                </ul>
            </Footer>
        </div>

    )
}

export default Course;










