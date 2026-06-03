import { SwiperSlide } from 'swiper/react';

import CourcesCard from "../CourcesCard/CourcesCard";
import CustomSlider from "../CustomSlider/CustomSlider";
import useServices from '../services/Services';
import "./Cources.css"
import { useEffect, useState } from 'react';




const data = [
    {
        id: "scratch",
        title: "Scratch",
        ageRange: "5-9 років",
        description: "Ідеальний старт у програмуванні. Діти створюють ігри та анімації через візуальні блоки, розвиваючи логіку та креативність.",
        image: '../../assets/icons/cources-icons/python-icon.png'
    },
    {
        id: "roblox",
        title: "Roblox",
        ageRange: "7-9 років",
        description: "Розробка власних ігор у Roblox. Учні створюють світи, механіки та знайомляться з основами геймдеву.",
        image: "../../assets/icons/cources-icons/roblox-icon.png"
    },
    {
        id: "python",
        title: "Python",
        ageRange: null,
        description: "Вивчення програмування через практику та реальні задачі. Учні засвоюють логіку, алгоритми та створюють власні програми і міні-проєкти.",
        image: "../../assets/icons/cources-icons/scratch-icon.png"
    },
    {
        id: "web-development",
        title: "Курс веб-розробки — створення сайтів з нуля",
        ageRange: "12-17 років",
        description: "Цей курс знайомить учнів із веб-розробкою та створенням сайтів. Вивчаються HTML, CSS та JavaScript — основні технології для створення сучасних вебсторінок.",
        image: "../../assets/icons/cources-icons/unity-icon.png"
    },
    {
        id: "unity",
        title: "Курс Unity — створення 2D та 3D ігор",
        ageRange: "10-17 років",
        description: "Цифрове навчання для учнів зі створення ігор. Діти вивчають програмування і принципи дизайну ігор у Unity, створюючи власні 2D та 3D проєкти.",
        image: "../../assets/icons/cources-icons/web-icon.png"
    }
];

const Cources = () => {


    const [courses, setCourses] = useState([])
    const {
        loading,
        error,
        getCourses
    } = useServices();

    useEffect(() => {
        getCourses().then(data => setCourses(data))
    }, [])
    return (
        <section id="courses" className="container cources-container section">

            <div className="courses-top-content">
                <h2 className="h2">Наші курси</h2>

                <p className="p-small-secondary">
                    Ми допомагаємо дітям розвивати логічне мислення, креативність та впевненість у собі через програмування. Кожен курс адаптований під вік дитини та подається у простій і цікавій формі.
                </p>
            </div>

            <CustomSlider slidesCount={courses.length}
                breakpoints={{
                    950: { slidesPerView: 2, spaceBetween: 18, },
                    1400: { slidesPerView: 3, spaceBetween: 24, },
                }}
            >
                {courses.map(({ id, title, ageRange, description, image }) => (
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

        </section>
    );
};

export default Cources;