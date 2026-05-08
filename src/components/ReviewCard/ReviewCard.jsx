import "./ReviewCard.css"

const ReviewCard = ({ id, name, course, review }) => {


    return(
        <div className="review-card">
            <span className="review-course-name">{course}</span>
            <h3 className="review-card-name">{name}</h3>
            <p className="p-small-secondary">{review}</p>
        </div>
    )
}

export default ReviewCard;