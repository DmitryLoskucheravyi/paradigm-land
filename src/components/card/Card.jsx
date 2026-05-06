import "./Card.css"

const Card = (props) => {
    const { number, title, desc, icon } = props

    return (
        <li className="card">
            <img src={icon} alt="" className="card-icon"/>
            <h3 className="card-num">{number}+</h3>
            <p className="card-title">{title}</p>
            <p className="card-desc">{desc}</p>
        </li>
    )
}

export default Card