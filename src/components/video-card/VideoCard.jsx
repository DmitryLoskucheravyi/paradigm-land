import { useRef } from "react";
import "./VideoCard.css";
import play from "../../assets/icons/play-icon.png";

const VideoCard = ({ src }) => {
    const videoRef = useRef(null);

    const handleToggle = () => {
        const video = videoRef.current;

        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    };

    return (
        <div className="video-card" onClick={handleToggle}>
            <video ref={videoRef}>
                <source src={src} type="video/mp4" />
            </video>

            <div className="video-toggle-btn" onClick={handleToggle}>
                <img src={play} alt="" />
            </div>
        </div>
    );
};

export default VideoCard;