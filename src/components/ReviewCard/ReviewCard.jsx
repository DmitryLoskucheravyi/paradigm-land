import "./ReviewCard.css"

const ReviewCard = ({ id, name, course, review }) => {


    return (
        <div className="review-card base-card p-sm bg-secondary">
            <span className="absolute-card-span ">{course}</span>
            <h3 className="review-card-name">{name}</h3>
            <p className="p-small-secondary">{review}</p>
        </div>
    )
}

export default ReviewCard;