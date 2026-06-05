import Hero from "../../hero/Hero";
import About from "../../about/About";
import Cources from "../../Cources/Cources";
import FaqAccordion from "../../faqAccordion/FaqAccordion";
import Response from "../../response/Response";
import Form from "../../Form/Form";
import Footer from "../../footer/Footer";
import { ResponseTextWrapper, ResponseVideoWrapper } from "../../response/Response";
import "./Main.css"
const Main = () => {
    return (
        <div className="main ">
            <Hero />
            <About />
            <Cources />
            <FaqAccordion />
            <Response >
                <ResponseVideoWrapper></ResponseVideoWrapper>
                <ResponseTextWrapper arrowHideClass={"arrows-fullhide"} ></ResponseTextWrapper>
            </Response>
            <Form />
            <Footer>
                <ul className="footer-nav">
                    <li><a className="footer-link" href="#hero">Головна</a></li>
                    <li><a className="footer-link" href="#features">Переваги</a></li>
                    <li><a className="footer-link" href="#courses">Курси</a></li>
                    <li><a className="footer-link" href="#responses">Відгуки</a></li>
                </ul>
            </Footer>
        </div>

    )
}

export default Main;