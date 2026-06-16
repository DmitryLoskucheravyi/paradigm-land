import useHttp from "../hooks/http.hook";
import { useCallback } from "react";
const useServices = () => {

    const API = `http://192.168.0.103:3000`
    const _VidAPI = `${API}/video`;
    const _RevAPI = `${API}/reviews`;
    const _CourseAPI = `${API}/courses`;

    const { loading, req, error } = useHttp();

    const getVideoResponses = () => {
        return req(_VidAPI);
    };

    const getTextResponses = (page = 1, limit = 6, filter) => {
        if (filter) return req(`${_RevAPI}?course=${filter}&_page=${page}&_per_page=${limit}`)
        else return req(`${_RevAPI}?_page=${page}&_per_page=${limit}`)
       
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
