import React, {useEffect, useRef, useState} from 'react';
import "./navbar.css"
import "./navbarMedia.css"
import {Link, NavLink} from "react-router-dom";

function Navbar() {

    const [header, setHeader] = useState(false);

    const handleNavScroll = () => {
        window.scrollY > 0 ? setHeader(true) : setHeader(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleNavScroll);
        return () => window.removeEventListener("scroll", handleNavScroll);
    }, [header]);

    const navRef = useRef(null)
    const animateRef = useRef(null)

    const showNav = () => {
        navRef.current["classList"].toggle("active");
        animateRef.current["classList"].toggle("active");
    };

    const navClose = () => {
        if (navRef.current["classList"].contains("active")) {
            navRef.current["classList"].remove("active");
            animateRef.current["classList"].remove("active");
        }
    };

    return (
        <nav className={header ? "nav fixed" : "nav"}>
            <div className="container">
                <div className="navbar">
                    <Link to="/"><h1 className="logo">JelongTour</h1></Link>
                    <ul className="nav-list" ref={navRef}>
                        <Link to="/"><h1 className="logo logo-m">JelongTour</h1></Link>
                        <li><NavLink to="/" onClick={navClose}>Home</NavLink></li>
                        <li><NavLink to="/explore" onClick={navClose}>Explore</NavLink></li>
                        <li><NavLink to="/about" onClick={navClose}>About Us</NavLink></li>
                        <li><NavLink to="/booking" onClick={navClose}>Booking</NavLink></li>
                        <button className="btn" onClick={navClose}>Sing Up</button>
                    </ul>
                    <div className="burger" onClick={showNav} ref={animateRef}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;