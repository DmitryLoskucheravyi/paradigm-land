import Button from "../buttons/Button"
import { Link } from "react-router-dom";
import "./CourcesCard.css"



const CourcesCard = (props) => {
    const { id, title, ageRange, description, cardImage } = props

    return (
        <>
            <div className="course-card-container bg-secondary base-card course-card">
                <p className=" absolute-card-span">{ageRange ? ageRange : title}</p>
                <img src={cardImage} alt="" />
                <div className="course-card-text-content">
                    <h3 >{title}</h3>
                    <p className="p-small-secondary">{description}</p>
                </div>
                <div className="course-card-btns">
                    <Link to={`/course/${id}`}>
                        <Button text={"Детальніше"} classes={'btn-course more course-card-more'}></Button>
                    </Link>
                    <Button text={'Записатися'} classes={'btn-course course-card-step-1 '} action='modal'></Button>
                </div>
            </div>
        </>
    )
}


export default CourcesCard;