import { useEffect, useState } from "react";
import useServices from "@services/Services";

const useSocials = () => {
    const [socials, setSocials] = useState([]);
    const { getSocials } = useServices();

    useEffect(() => {
        getSocials().then(data => setSocials(data || []));
    }, []);

    return { socials };
};

export default useSocials;
