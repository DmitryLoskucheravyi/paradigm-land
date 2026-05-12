import Hero from "../../hero/Hero";
import About from "../../about/About";
import Cources from "../../Cources/Cources";
import FaqAccordion from "../../faqAccordion/FaqAccordion";
import Response from "../../response/Response";
import Form from "../../Form/Form";
import Footer from "../../footer/Footer";

import "./Main.css"
const Main = () => {
    return (
        <div className="main ">
            <Hero />
            <About />
            <Cources />
            <FaqAccordion />
            <Response />
            <Form />
            <Footer />
        </div>

    )
}

export default Main;