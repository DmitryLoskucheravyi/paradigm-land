import { useEffect, useRef, useState } from "react";
import useServices from "../services/Services";

const useTextReviews = ({ filter }) => {
    const [reviews, setReviews] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [isFetching, setIsFetching] = useState(false);
    const page = useRef(1);

    const { getTextResponses } = useServices();

    const loadReviews = async (currentPage) => {
        if (isFetching || !hasMore) return;

        setIsFetching(true);

        try {
            const response = await getTextResponses(
                currentPage,
                6,
                filter
            );

            const reviewsData = response.data;

            if (!reviewsData.length) {
                setHasMore(false);
                return;
            }

            setReviews((prev) => {
                const newReviews = reviewsData.filter(
                    (review) =>
                        !prev.some(
                            (prevReview) => prevReview.id === review.id
                        )
                );

                return [...prev, ...newReviews];
            });

            if (!response.next) {
                setHasMore(false);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsFetching(false);
        }
    };

    useEffect(() => {
        loadReviews(1);
    }, []);

    const handleReachEnd = () => {
        if (isFetching || !hasMore) return;

        page.current += 1;
        loadReviews(page.current);
    };

    return {
        reviews,
        hasMore,
        handleReachEnd,
    };
};

export default useTextReviews;
