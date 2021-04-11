import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import "@/styles/styles.scss";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        AOS.init({});
    }, []);
    return <Component {...pageProps} />;
}

export default MyApp;
