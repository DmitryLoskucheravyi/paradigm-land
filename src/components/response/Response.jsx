import Elipse from "../elipse/Elipse";
import VideoCard from "../video-card/VideoCard";
import CustomSlider from "../CustomSlider/CustomSlider";
import ReviewCard from "../ReviewCard/ReviewCard";
import useServices from "../services/Services";

import { SwiperSlide } from "swiper/react";
import { useState, useEffect, useMemo } from "react";

import "./Response.css";

const Response = (props) => {
    return (
        <section
            id="responses"
            className="response-section container rel-section section"
        >
            <Elipse parametr="glow-blue response-1" />
            <ResponseTitle />
            <div className="response-sliders-wrapper">
                {props.children}
                
            </div>
        </section>
    );

};


export const ResponseTitle = () => {
    return (
        <>
            <div className="response-text-content text-content-wrapper">

                <h2 className="h2">
                    Відгуки
                </h2>

                <p className="p-small-secondary">
                    Відгуки наших учнів і батьків — найкраще підтвердження
                    якості навчання. Перегляньте відео та прочитайте реальні історії.
                </p>

            </div>
        </>
    )
}

export const ResponseVideoWrapper = () => {

    const {
        loading,
        error,
        getVideoResponses,
    } = useServices();

    useEffect(() => {
        getVideoResponses().then(data => {
            setVideos(data);
        });
    }, []);

    const [videos, setVideos] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const videosData = videos.map(({ video, id }, index) => (
        <SwiperSlide key={id}>
            <VideoCard
                src={video}
                isActive={currentSlide === index}
            />
        </SwiperSlide>
    ));

    return (
        <>
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
        </>
    )
}
export const ResponseTextWrapper = (props) => {

    const [reviews, setReviews] = useState([]);


    const [currentSlide, setCurrentSlide] = useState(0);

    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isFetching, setIsFetching] = useState(false);

    const {
        loading,
        error,
        getTextResponses
    } = useServices();

    useEffect(() => {
        loadReviews(1);
    }, []);

    const loadReviews = async (currentPage) => {
        if (isFetching || !hasMore) return;
        try {
            setIsFetching(true);
            const response = await getTextResponses(currentPage, 6, props.filter);
            const reviewsData = response.data;
            if (!reviewsData.length) {
                setHasMore(false);
                return;
            }
            setReviews(prev => {

                const newReviews = reviewsData.filter(
                    review =>
                        !prev.some(prevReview =>
                            prevReview.id === review.id
                        )
                );
                return [...prev, ...newReviews];
            });
            if (!response.next) {
                setHasMore(false);
            }
        } catch (e) {
            console.log(e);
        } finally {
            setIsFetching(false);
        }
    };

    const handleReachEnd = async () => {
        console.log('pfagin')
        if (isFetching || !hasMore) return;
        setPage(prev => {
            const nextPage = prev + 1;
            loadReviews(nextPage);
            return nextPage;
        });
    };

    const reviewsData = useMemo(() => reviews.map(({ id, name, course, review }) => (
        <SwiperSlide key={id}>
            <ReviewCard
                id={id}
                name={name}
                course={course[0] === 'w' ? 'Web' : course}
                review={review}
            />
        </SwiperSlide>
    )), [reviews]);

    const breakpoints = useMemo(() => ({
        950: {
            slidesPerView: 3,
            spaceBetween: 18,
        },
        1440: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    }), []);

    return (
        <>
            <div className="response-slider-text-wrapper">

                {reviews.length > 0 && (

                    <CustomSlider
                        slidesCount={reviews.length}
                        freeScroll={false}
                        loop={!hasMore}
                        spaceBetween={16}
                        slidesPerView={1}
                        breakpoints={breakpoints}
                        arrowHideClass={props.arrowHideClass}
                        onReachEnd={handleReachEnd}
                        useCarousell= {props.useCarousell}
                    >
                        {reviewsData}
                    </CustomSlider>
                )}
            </div>
        </>
    )
}

export default Response;
