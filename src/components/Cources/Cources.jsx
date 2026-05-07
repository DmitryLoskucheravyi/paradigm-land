import { SwiperSlide } from 'swiper/react';

import CourcesCard from "../CourcesCard/CourcesCard";
import CustomSlider from "../CustomSlider/CustomSlider";

import pythonIcon from "../../assets/icons/cources-icons/python-icon.png"
import robloxIcon from "../../assets/icons/cources-icons/roblox-icon.png"
import scratchIcon from "../../assets/icons/cources-icons/scratch-icon.png"
import unityIcon from "../../assets/icons/cources-icons/unity-icon.png"
import webIcon from "../../assets/icons/cources-icons/web-icon.png"

import "./Cources.css"




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
    return (
        <div className="container cources-container">

            <div className="courses-top-content">
                <h2 className="h2">Наші курси</h2>

                <p className="p-small-secondary">
                    Ми допомагаємо дітям...
                </p>
            </div>

            <CustomSlider slidesCount={data.length}>
                {data.map(({ id, title, ageRange, description, image }) => (
                    <SwiperSlide key={id}>
                        <CourcesCard
                            id={id}
                            title={title}
                            ageRange={ageRange}
                            description={description}
                            image={image}
                        />
                    </SwiperSlide>
                ))}
            </CustomSlider>

        </div>
    );
};

export default Cources;