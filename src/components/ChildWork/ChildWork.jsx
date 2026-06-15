import VideoCard from "../video-card/VideoCard"

import './ChildWork.css'

const ChildWork = ({ video, isActive }) => {


    return (
        <>
            <section className=" childwork__section section container">
                <div className="childwork__top">
                    <h2 className="h2">Що створить дитина</h2>
                    <div className="childwork__top-left__content">
                        <p className="p-small-secondary">
                            Під час курсу учень не просто вивчає теорію, а створює власні програми та міні-проєкти. Кожне заняття — це практика, результат якої можна побачити вже з перших уроків.
                        </p>
                    </div>
                </div>

                <div className="childwork__main">
                    <div className="video__wrapper">
                        <VideoCard src={video} isActive={isActive} />
                    </div>
                    <div className="childwork__main-descriptions">
                        <div className="desc-top">
                            <p className="p-small-secondary">У процесі навчання дитина проходить шлях від простих задач до створення повноцінних програм, які можна запускати, змінювати та показувати іншим.</p>
                        </div>
                        <div className="desc-bottom">
                            <p className="p-small-secondary">Серед проєктів: ігри, калькулятори, програми з інтерфейсом, робота з файлами та власні ідеї учнів.</p>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}


export default ChildWork