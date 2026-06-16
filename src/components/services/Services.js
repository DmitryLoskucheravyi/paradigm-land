import useHttp from "../hooks/http.hook";
import { useCallback } from "react";
const useServices = () => {

    const API = `http://192.168.0.103:3000`
    const _VidAPI = `${API}/video`;
    const _RevAPI = `${API}/reviews`;
    const _CourseAPI = `${API}/courses`;

    const { loading, req, error } = useHttp();

    const getVideoResponses = useCallback(() => {
        return req(_VidAPI);
    }, [req]);

    const getTextResponses = useCallback((page = 1, limit = 6, filter) => {
        if (filter) return req(`${_RevAPI}?course=${filter}&_page=${page}&_per_page=${limit}`)
        else return req(`${_RevAPI}?_page=${page}&_per_page=${limit}`)

    }, [req]);

    const getCourses = useCallback(() => {
        return req(
            `${_CourseAPI}`
        );
    }, [req])
    const getCourse = useCallback(async (id) => {
        return req(
            `${_CourseAPI}/${id}`
        );
    }, [req])

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
