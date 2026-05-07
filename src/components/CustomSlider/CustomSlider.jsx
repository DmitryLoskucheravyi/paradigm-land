import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";

import { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";

import arrow from "../../assets/icons/arrow-icon.png";

import "./CustomSlider.css";

const CustomSlider = ({
    children,
    slidesCount,
    spaceBetween = 16,
    slidesPerView = 1,
    onSlideChange,
}) => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    return (
        <div className="custom-slider">

            <Swiper
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
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

                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}

                onSlideChange={(swiper) => {
                    setActiveIndex(swiper.activeIndex);
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                    onSlideChange?.(swiper.activeIndex);

                }}
            >
                {children}
            </Swiper>

            <div className="course-dots">
                {Array.from({ length: slidesCount }).map((_, index) => (
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
                    ref={prevRef}
                >
                    <img className="left-arrow" src={arrow} alt="" />
                </div>

                <div
                    className={isEnd ? "arrow-btn-dis" : "arrow-btn"}
                    ref={nextRef}
                >
                    <img className="right-arrow" src={arrow} alt="" />
                </div>

            </div>

        </div>
    );
};

export default CustomSlider;