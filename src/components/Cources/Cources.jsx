import CourcesCard from "../CourcesCard/CourcesCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import pythonIcon from "../../assets/icons/cources-icons/python-icon.png"
import robloxIcon from "../../assets/icons/cources-icons/roblox-icon.png"
import scratchIcon from "../../assets/icons/cources-icons/scratch-icon.png"
import unityIcon from "../../assets/icons/cources-icons/unity-icon.png"
import webIcon from "../../assets/icons/cources-icons/web-icon.png"

import arrow from "../../assets/icons/arrow-icon.png"

import 'swiper/css';
import 'swiper/css/navigation';

import "./Cources.css"
import { useRef, useState } from "react";

const data = [
    {
        id: "scratch",
        title: "Scratch",
        ageRange: "5-9 років",
        description: "Ідеальний старт у програмуванні. Діти створюють ігри та анімації через візуальні блоки, розвиваючи логіку та креативність.",
        image: scratchIcon
    },
    {
        id: "roblox",
        title: "Roblox",
        ageRange: "7-9 років",
        description: "Розробка власних ігор у Roblox. Учні створюють світи, механіки та знайомляться з основами геймдеву.",
        image: robloxIcon
    },
    {
        id: "python",
        title: "Python",
        ageRange: null,
        description: "Вивчення програмування через практику та реальні задачі. Учні засвоюють логіку, алгоритми та створюють власні програми і міні-проєкти.",
        image: pythonIcon
    },
    {
        id: "web-development",
        title: "Курс веб-розробки — створення сайтів з нуля",
        ageRange: "12-17 років",
        description: "Цей курс знайомить учнів із веб-розробкою та створенням сайтів. Вивчаються HTML, CSS та JavaScript — основні технології для створення сучасних вебсторінок.",
        image: webIcon
    },
    {
        id: "unity",
        title: "Курс Unity — створення 2D та 3D ігор",
        ageRange: "10-17 років",
        description: "Цифрове навчання для учнів зі створення ігор. Діти вивчають програмування і принципи дизайну ігор у Unity, створюючи власні 2D та 3D проєкти.",
        image: unityIcon
    }
];

const Cources = () => {
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const cources = data.map(({ id, title, ageRange, description, image }) => (
        <SwiperSlide key={id}>
            <CourcesCard id={id} title={title} ageRange={ageRange} description={description} image={image} />
        </SwiperSlide>
    ))
    return (
        <div className="container cources-container" >

            <div className="courses-top-content">
                <h2 className="h2">Наші курси</h2>
                <p>Ми допомагаємо дітям розвивати логічне мислення, креативність та впевненість у собі через програмування. Кожен курс адаптований під вік дитини та подається у простій і цікавій формі.</p>
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
                {cources}
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


export default Cources;