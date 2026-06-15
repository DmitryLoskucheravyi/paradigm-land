import Hero from "../../hero/Hero";
import About from "../../about/About";
import Cources from "../../Cources/Cources";
import FaqAccordion from "../../faqAccordion/FaqAccordion";
import Response from "../../response/Response";
import Form from "../../Form/Form";
import Footer from "../../footer/Footer";
import { ResponseTextWrapper, ResponseVideoWrapper } from "../../response/Response";

import Reveal from "../../Reveal/Reveal";
import "./Main.css"
const Main = () => {
    return (
        <div className="main ">

            <Reveal>
                <Hero />
            </Reveal>
            <About />
            <Reveal>
                <Cources />
            </Reveal>
            <Reveal>
                <FaqAccordion />
            </Reveal>
            <Reveal>
                <Response useElipse>
                    <Reveal>
                        <ResponseVideoWrapper></ResponseVideoWrapper>
                    </Reveal>
                    <Reveal>
                        <ResponseTextWrapper arrowHideClass={"arrows-fullhide"} ></ResponseTextWrapper>
                    </Reveal>
                </Response>
            </Reveal>
            <Reveal>
                <Form />
            </Reveal>
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