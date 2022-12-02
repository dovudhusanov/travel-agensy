import React, {useEffect, useState} from "react";
import "./scrollToTop.css";

function ScrollToTop(props) {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 400) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div className={isVisible ? "scroll__top-top-parent scroll" : "scroll__top-top-parent"}>
            <button  type={"button"}
                     onClick={scrollToTop}
                     className="scrollToTopBTn"><i className="fa-solid fa-angle-up"></i>
            </button>
        </div>
    );
}

export default ScrollToTop;
