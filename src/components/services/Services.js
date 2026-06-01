import useHttp from "../hooks/http.hook";

const useServices = () => {

    const _VidAPI = 'http://localhost:3000/video';
    const _RevAPI = 'http://localhost:3000/reviews';

    const { loading, req, error } = useHttp();

    const getVideoResponses = () => {
        return req(_VidAPI);
    };

    const getTextResponses = (page = 1, limit = 6) => {
        return req(
            `${_RevAPI}?_page=${page}&_per_page=${limit}`
        );
    };

    return {
        loading,
        error,
        getVideoResponses,
        getTextResponses
    };

};

export default useServices;
