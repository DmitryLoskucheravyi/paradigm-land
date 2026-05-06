import Button from "../buttons/Button"

import "./CourcesCard.css"



const CourcesCard = (props) => {
    const { id, title, ageRange, description, image } = props

    return (
        <>
            <div className="course-card">
                <p className="age-range">{ageRange ? ageRange : title}</p>
                <img src={image} alt="" />
                <div className="course-card-text-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="course-card-btns">
                    <Button text={"Детальніше"} classes={'btn-course more '}></Button>
                    <Button text={'Записатись'} classes={'btn-course   course-card-step-1 '}></Button>
                </div>
            </div>
        </>
    )
}


export default CourcesCard;