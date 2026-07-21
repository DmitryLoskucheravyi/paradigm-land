import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useServices from "../services/Services";

const useMobileNav = (active) => {
    const [coursesOpen, setCoursesOpen] = useState(false);
    const [courses, setCourses] = useState([]);
    const { getCourses } = useServices();
    const location = useLocation();
    const isCoursePage = location.pathname.startsWith('/course');

    useEffect(() => {
        getCourses().then(data => setCourses(data || []));
    }, []);

    useEffect(() => {
        if (active) {
            document.body.style.overflow = 'hidden';
            document.body.style.touchAction = 'none';
        } else {
            document.body.style.overflow = 'auto';
            document.body.style.touchAction = 'auto';
            setCoursesOpen(false);
        }

        return () => {
            document.body.style.overflow = 'auto';
            document.body.style.touchAction = 'auto';
        };
    }, [active]);

    const toggleCoursesDropdown = (e) => {
        e.stopPropagation();
        setCoursesOpen(prev => !prev);
    };

    return {
        coursesOpen,
        courses,
        isCoursePage,
        toggleCoursesDropdown,
    };
};

export default useMobileNav;
