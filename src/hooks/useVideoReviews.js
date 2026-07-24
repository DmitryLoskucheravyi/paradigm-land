import { useEffect, useState } from "react";
import useServices from "@services/Services";

const useVideoReviews = () => {
    const [videos, setVideos] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    const { loading, getVideoResponses } = useServices();

    useEffect(() => {
        getVideoResponses().then(setVideos);
    }, []);

    return {
        loading,
        videos,
        currentSlide,
        setCurrentSlide,
    };
};

export default useVideoReviews;
