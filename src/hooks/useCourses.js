import { useEffect, useState } from "react";
import useServices from "@services/Services";

const useCourses = () => {
    const [courses, setCourses] = useState([]);
    const { loading, getCourses } = useServices();

    useEffect(() => {
        getCourses().then(data => setCourses(data));
    }, []);

    return { loading, courses };
};

export default useCourses;
