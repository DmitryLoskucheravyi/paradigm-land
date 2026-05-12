import Elipse from "../elipse/Elipse";
import VideoCard from "../video-card/VideoCard";
import CustomSlider from "../CustomSlider/CustomSlider";
import ReviewCard from "../ReviewCard/ReviewCard";

import { SwiperSlide } from "swiper/react";
import { useState } from "react";
import video1 from "../../assets/video/video-1.mp4";
import video2 from "../../assets/video/video-2.mp4";
import video3 from "../../assets/video/video-3.MP4";
import video4 from "../../assets/video/video-4.MP4";
import video5 from "../../assets/video/video-5.MP4";
import video6 from "../../assets/video/video-6.MP4";

import "./Response.css";

const data = [
    { src: video1, id: 1 },
    { src: video2, id: 2 },
    { src: video3, id: 3 },
    { src: video4, id: 4 },
    { src: video5, id: 5 },
    { src: video6, id: 6 },
];

const reviewData = [
    {
        id: 1,
        name: "Ірина",
        course: "Scratch",
        review: "Доброго вечора, дитина задоволена, заняття дуже подобаються."
    },
    {
        id: 2,
        name: "Олександр",
        course: "Roblox",
        review: "Син із задоволенням чекає кожного уроку, вже створив свою першу гру."
    },
    {
        id: 3,
        name: "Марина",
        course: "Web",
        review: "Дякуємо викладачам за цікаву подачу матеріалу та підтримку дітей."
    },
    {
        id: 4,
        name: "Андрій",
        course: "Unity",
        review: "Донька почала цікавитися розробкою і тепер постійно щось тестує вдома."
    },
    {
        id: 13,
        name: "Ірина",
        course: "Scratch",
        review: "Доброго вечора, дитина задоволена, заняття дуже подобаються."
    },
    {
        id: 23,
        name: "Олександр",
        course: "Roblox",
        review: "Син із задоволенням чекає кожного уроку, вже створив свою першу гру."
    },
    {
        id: 31,
        name: "Марина",
        course: "Web",
        review: "Дякуємо викладачам за цікаву подачу матеріалу та підтримку дітей."
    },
    {
        id: 44,
        name: "Андрій",
        course: "Unity",
        review: "Донька почала цікавитися розробкою і тепер постійно щось тестує вдома."
    },
    {
        id: 534,
        name: "Наталія",
        course: "Scratch",
        review: "Уроки проходять дуже цікаво, дитина стала більш уважною та творчою."
    }
];

const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,


};

const Response = () => {


    const [currentSlide, setCurrentSlide] = useState(0);

    const videos = data.map(({ src, id }, index) => (
        <SwiperSlide key={id}>
            <VideoCard src={src} isActive={currentSlide === index} />
        </SwiperSlide>
    ));

    const reviews = reviewData.map(({ id, name, course, review }, index) => (
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
                        slidesCount={data.length}
                        spaceBetween={16}
                        slidesPerView={1}
                        onSlideChange={(index) => setCurrentSlide(index)}
                    >
                        {videos}
                    </CustomSlider>
                </div>

                <div className="response-slider-text-wrapper">
                    <CustomSlider
                        slidesCount={reviewData.length}
                        loop={true}
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
                        {reviews}
                    </CustomSlider>
                </div>
            </div>
        </section >
    );
};

export default Response;