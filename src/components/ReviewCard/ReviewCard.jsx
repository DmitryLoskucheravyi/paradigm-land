import "./ReviewCard.css"

const ReviewCard = ({ id, name, course, review }) => {


    return (
        <div className="review-card-container base-card bg-secondary card-padding">
            <span className="absolute-card-span ">{course}</span>
            <h3 className="review-card-name">{name}</h3>
            <p className="p-small-secondary review-card-desc">{review}</p>
        </div>
    )
}

export default ReviewCard;