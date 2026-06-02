import Response from "../../response/Response";
import Form from "../../Form/Form";
import Footer from "../../footer/Footer";
import { ResponseTextWrapper, ResponseVideoWrapper } from "../../response/Response";

import { Link } from "react-router-dom";
import "./Course.css"
const Course = () => {
    return (
        <div className="main ">
            <Response>
                <ResponseTextWrapper arrowHideClass={"arrows-mobile-hide"} useCarousell={true}></ResponseTextWrapper>

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