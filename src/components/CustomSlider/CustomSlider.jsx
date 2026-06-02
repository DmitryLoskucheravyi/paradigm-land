import { Swiper } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
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
    breakpoints,
    onSlideChange,
    onReachEnd,
    arrowHideClass,
    freeScroll = false,
    loop = false,
}) => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const MAX_VISIBLE_DOTS = 10;

    const getVisibleDots = () => {

        if (slidesCount <= MAX_VISIBLE_DOTS) {
            return Array.from(
                { length: slidesCount },
                (_, i) => i
            );
        }

        let start = Math.max(
            0,
            activeIndex - Math.floor(MAX_VISIBLE_DOTS / 2)
        );

        let end = start + MAX_VISIBLE_DOTS;

        if (end > slidesCount) {
            end = slidesCount;
            start = end - MAX_VISIBLE_DOTS;
        }

        return Array.from(
            { length: end - start },
            (_, i) => start + i
        );
    };

    return (
        <div className="custom-slider">

            <Swiper
                loop={loop}
                  loopAdditionalSlides={slidesCount}
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                modules={[Navigation, FreeMode]}
                freeMode={freeScroll}
                grabCursor={true}
                speed={300}
                breakpoints={breakpoints || undefined}





                onSwiper={(swiper) => {

                    swiperRef.current = swiper;

                    setTimeout(() => {

                        if (!swiper.navigation) return;

                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;

                        swiper.navigation.init();
                        swiper.navigation.update();

                    });

                }}
                onSlideChange={(swiper) => {

                    setActiveIndex(swiper.activeIndex);

                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);

                    onSlideChange?.(swiper.activeIndex);
                }}

                onReachEnd={() => {
                    onReachEnd?.();
                }}
            >

                {children}

            </Swiper>

            <div className="course-dots">

                {getVisibleDots().map((index) => (

                    <div
                        key={index}
                        onClick={() =>
                            swiperRef.current?.slideTo(index)
                        }
                        className={`dot ${activeIndex === index
                            ? "active"
                            : ""
                            }`}
                    />

                ))}

            </div>

            <div className={`arrows ${arrowHideClass || ""}`}>

                <div
                    className={
                        isBeginning
                            ? "arrow-btn-dis"
                            : "arrow-btn"
                    }
                    ref={prevRef}
                >
                    <img
                        className="left-arrow"
                        src={arrow}
                        alt="previous"
                    />
                </div>

                <div
                    className={
                        isEnd
                            ? "arrow-btn-dis"
                            : "arrow-btn"
                    }
                    ref={nextRef}
                >
                    <img
                        className="right-arrow"
                        src={arrow}
                        alt="next"
                    />
                </div>

            </div>

        </div>
    );

};

export default CustomSlider;
