import { useState, useRef, useEffect } from "react";
import "./VideoCard.css";
import play from "../../assets/icons/play-icon.png";

const VideoCard = ({ src, isActive }) => {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false)
    const handleToggle = () => {
        const video = videoRef.current;

        if (video.paused) {
            video.play();
            setPlaying((state) => state = true)
        } else {
            video.pause();
            setPlaying((state) => state = false)

        }
    };

    useEffect(() => {
        const video = videoRef.current;

        if (!isActive && video) {
            video.pause();
            setPlaying((state) => state = false)
        }
    }, [isActive]);

    return (
        <div className="video-card base-card" onClick={handleToggle} >
            <video  ref={videoRef} style={playing ? {objectFit : 'contain'} : undefined}>
                <source  src={src} type="video/mp4" />
            </video>

            <div className={`video-toggle-btn ` + (playing ? 'none' : null)} onClick={handleToggle}>
                <img src={play} alt="" onClick={handleToggle} />
            </div>
        </div>
    );
};

export default VideoCard;