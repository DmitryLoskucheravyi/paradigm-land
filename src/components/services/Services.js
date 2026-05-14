import useHttp from "../hooks/http.hook";

const useServices = () => {

    const _VidAPI = 'http://localhost:3000/video';
    const _RevAPI = 'http://localhost:3000/reviews';

    const { loading, req, error } = useHttp();


    const getVideoResponses = () => {
        return req(_VidAPI);
    }
    const getTextResponses = () => {
        return req(_RevAPI);
    }

    return { loading, error, getVideoResponses, getTextResponses }
}


export default useServices;