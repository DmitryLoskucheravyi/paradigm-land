import useHttp from "../hooks/http.hook";
import { useCallback } from "react";
const useServices = () => {

    const _VidAPI = 'http://localhost:3000/video';
    const _RevAPI = 'http://localhost:3000/reviews';
    const _CourseAPI = 'http://localhost:3000/courses';

    const { loading, req, error } = useHttp();

    const getVideoResponses = () => {
        return req(_VidAPI);
    };

    const getTextResponses = (page = 1, limit = 6) => {
        return req(
            `${_RevAPI}?_page=${page}&_per_page=${limit}`
        );
    };

    const getCourses = () => {
        return req(
            `${_CourseAPI}`
        );
    }
    const getCourse = useCallback(async (id) => {
        return req(
            `${_CourseAPI}/${id}`
        );
    }, [])

    return {
        loading,
        error,
        getVideoResponses,
        getTextResponses,
        getCourses,
        getCourse
    };

};

export default useServices;
