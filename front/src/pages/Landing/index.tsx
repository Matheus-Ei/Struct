// HOCs
import withLoader from "../../HOCs/withLoader";

// Components
import { useDark } from "../../hooks/useTheme";
import { useEffect, useState } from "react";

const Landing = () => {
    const [theme, setTheme] = useDark();
    useEffect(() => {
        setTheme("light");
    }, []);

    return <div></div>;
};

export default withLoader(Landing, "small");
