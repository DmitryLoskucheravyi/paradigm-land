import "./Card.css"

const Card = ({ number, title, desc, icon, useCoursePageCard }) => {
    return (
        <li className={"about_card-container bg-def " + (useCoursePageCard ? '' : 'about_card')}>
            <img src={icon} alt="" className="card-icon" />
            <h3 className="card-num">{useCoursePageCard ? null : number + '+'}</h3>
            <p className="card-title">{title}</p>
            <p className="card-desc p-small-secondary" >{desc}</p>
        </li>
    )
}

export default Card