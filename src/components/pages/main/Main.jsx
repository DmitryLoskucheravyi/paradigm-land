import Hero from "../../hero/Hero";
import About from "../../about/About";
import Cources from "../../Cources/Cources";
import FaqAccordion from "../../faqAccordion/FaqAccordion";
import "./Main.css"
const Main = () => {
    return (
        <div className="main ">
            <Hero></Hero>
            <About></About>
            <Cources></Cources>
            <FaqAccordion></FaqAccordion>
        </div>

    )
}

export default Main;