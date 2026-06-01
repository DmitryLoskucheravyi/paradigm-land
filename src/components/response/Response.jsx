import Elipse from "../elipse/Elipse";
import VideoCard from "../video-card/VideoCard";
import CustomSlider from "../CustomSlider/CustomSlider";
import ReviewCard from "../ReviewCard/ReviewCard";
import useServices from "../services/Services";
import { SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";


import "./Response.css";



const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
};

const Response = () => {

    const [videos, setVideos] = useState([])
    const [reviews, setReviews] = useState([])
    const { laoding, error, getVideoResponses, getTextResponses } = useServices();

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        getVideoResponses().then(data => {
            setVideos([...data])
        })
        getTextResponses().then(data => {
            setReviews([...data])
        })
    }, [])
    const videosData = videos.map(({ video, id }, index) => (
        <SwiperSlide key={id}>
            <VideoCard src={video} isActive={currentSlide === index} />
        </SwiperSlide>
    ));
    const reviewsData = reviews.map(({ id, name, course, review }, index) => (
        <SwiperSlide key={id}>
            <ReviewCard id={id} name={name} course={course} review={review} />
        </SwiperSlide>
    ));


    return (
        <section id="responses" className="response-section container rel-section section">

            <Elipse parametr="glow-blue response-1" />

            <div className="response-text-content text-content-wrapper">
                <h2 className="h2">Відгуки</h2>

                <p className="p-small-secondary">
                    Відгуки наших учнів і батьків — найкраще підтвердження
                    якості навчання. Перегляньте відео та прочитайте реальні історії.
                </p>
            </div>

            <div className="response-sliders-wrapper">
                <div className="response-slider-video-wrapper">
                    <CustomSlider
                        slidesCount={videos.length}
                        spaceBetween={16}
                        slidesPerView={1}
                        onSlideChange={(index) => setCurrentSlide(index)}
                    >
                        {videosData}
                    </CustomSlider>
                </div>

                <div className="response-slider-text-wrapper">
                    {reviews.length > 0 && (
                        <CustomSlider
                            slidesCount={reviewsData.length}
                            freeScroll={true}
                            spaceBetween={16}
                            slidesPerView={1}
                            breakpoints={{
                                950: { slidesPerView: 3, spaceBetween: 18, },
                                1440: { slidesPerView: 4, spaceBetween: 24, },
                            }}
                            onSlideChange={(index) => setCurrentSlide(index)

                            }

                            arrowHideClass='arrows-fullhide'

                        >
                            {reviewsData}
                        </CustomSlider>
                    )}
                </div>
            </div>
        </section >
    );
};

export default Response;