import { Swiper } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useRef, useState, useEffect } from "react";

import "swiper/css";
import "swiper/css/navigation";

import arrow from "../../assets/icons/arrow-icon.png";
import "./CustomSlider.css";

const CustomSlider = ({
    children,
    slidesCount,
    spaceBetween = 16,
    slidesPerView = 1,
    breakpoints,
    loop,
    onSlideChange,
    arrowHideClass,
}) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [isDesktop, setIsDesktop] = useState(
        window.innerWidth >= 950
    );

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 950);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div className="custom-slider">
            <Swiper
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                modules={[Navigation, Autoplay]}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                loop={loop}
                grabCursor={true}
                autoplay={
                    isDesktop && loop
                        ? {
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }
                        : false
                }
                speed={isDesktop && loop ? 16000 : 300}
                centeredSlides={isDesktop && loop}
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
                breakpoints={breakpoints || undefined}
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

            <div className={`arrows ${arrowHideClass || ""}`}>
                <div
                    className={isBeginning ? "arrow-btn-dis" : "arrow-btn"}
                    ref={prevRef}
                >
                    <img className="left-arrow" src={arrow} alt="previous" />
                </div>

                <div
                    className={isEnd ? "arrow-btn-dis" : "arrow-btn"}
                    ref={nextRef}
                >
                    <img className="right-arrow" src={arrow} alt="next" />
                </div>
            </div>
        </div>
    );
};

export default CustomSlider;