import { useState, useCallback } from "react";


const useHttp = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const req = useCallback(async (url, method = 'GET', body = null, headers = { 'Content-Type': 'application/json' }) => {
        setLoading(true);

        try {
            const res = await fetch(url);

            if (!res.ok) {
                throw new Error(`could not fetch ${url}, status: ${res.status}`);
            }


            const data = res.json();
            setLoading(false);
            return data;
        } catch (e) {
            setLoading(false);
            setError(e.message)
            throw e
        }
    }, [])
    const clearError = useCallback(() => {setError(null)}, [])
    return { loading, req, error, clearError }
}

export default useHttp;