import Button from "../buttons/Button"

import "./CourcesCard.css"



const CourcesCard = (props) => {
    const { id, title, ageRange, description, image } = props

    return (
        <>
            <div className=" br-sm p-sm bg-secondary base-card course-card">
                <p className=" absolute-card-span">{ageRange ? ageRange : title}</p>
                <img src={image} alt="" />
                <div className="course-card-text-content">
                    <h3 >{title}</h3>
                    <p className="p-small-secondary">{description}</p>
                </div>
                <div className="course-card-btns">
                    <Button text={"Детальніше"} classes={'btn-course more course-card-more'}></Button>
                    <Button text={'Записатися'} classes={'btn-course course-card-step-1 '}></Button>
                </div>
            </div>
        </>
    )
}


export default CourcesCard;