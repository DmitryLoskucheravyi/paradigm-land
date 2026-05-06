import Elipse from "../elipse/Elipse";
import VideoCard from "../video-card/VideoCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { useRef, useState } from "react";

import video1 from "../../assets/video/video-1.mp4"
import video2 from "../../assets/video/video-2.mp4"
import video3 from "../../assets/video/video-3.MP4"
import video4 from "../../assets/video/video-4.MP4"
import video5 from "../../assets/video/video-5.MP4"
import video6 from "../../assets/video/video-6.MP4"

import arrow from "../../assets/icons/arrow-icon.png"

import "./Response.css"


import 'swiper/css';
import 'swiper/css/navigation';

const data = [
    { src: video1, id: 1 },
    { src: video2, id: 2 },
    { src: video3, id: 3 },
    { src: video4, id: 4 },
    { src: video5, id: 5 },
    { src: video6, id: 6 },
]

const Response = () => {

    const prevRef = useRef(null)
    const nextRef = useRef(null)
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const videos = data.map(({ src, id }) => (
        <SwiperSlide key={id}>
            <VideoCard src={src} />
        </SwiperSlide>
    ))

    return (
        <div className="response-section container rel-section">
            <Elipse parametr='glow-blue response-1'></Elipse>
            <div className="response-text-content text-content-wrapper">
                <h2 className="h2">Відгуки</h2>
                <p className="p-small-secondary"> Відгуки наших учнів і батьків — найкраще підтвердження якості навчання. Перегляньте відео та прочитайте реальні історії.</p>
            </div>

            <Swiper
                spaceBetween={16}
                slidesPerView={1}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                onInit={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => {
                    setActiveIndex(swiper.activeIndex);
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
            >
                {videos}
            </Swiper>
            <div className="course-dots">
                {data.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => swiperRef.current?.slideTo(index)}
                        className={`dot ${activeIndex === index ? "active" : ""}`}
                    />
                ))}
            </div>
            <div className="arrows">
                <div
                    className={isBeginning ? "arrow-btn-dis" : "arrow-btn"}
                    ref={prevRef}>
                    <img className="left-arrow" src={arrow} alt="" />
                </div>
                <div
                    className={isEnd ? "arrow-btn-dis" : "arrow-btn"}
                    ref={nextRef}>
                    <img className="right-arrow" src={arrow} alt="" />
                </div>
            </div>
        </div>

    )
}

export default Response;






