import React from 'react';
import "./footer.css"
import FooterLinks from "./footer-links/footer-links";

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="logo logo-f">JelongTour</div>
                    <div className="footer-items">
                        <h1 className="logo">JelongTour</h1>
                        <FooterLinks
                            title="Information"
                            link="About us"
                            link2="More search"
                            link3="Blogs"
                            link4="Testimonial"
                            link5="Event"
                        />
                        <FooterLinks
                            title="Help Full Link"
                            link="Services"
                            link2="Support"
                            link3="Team & Condition"
                            link4="Privacy"
                            link5="FAQ"
                        />
                        <FooterLinks
                            title="Our Services"
                            link="Travel"
                            link2="Guide Travel"
                            link3="Study Tour"
                            link4=""
                            link5=""
                        />
                        <div className="footer-social-links">
                            <div className="social-links-icon">
                                <a
                                    rel="noreferrer"
                                    href="https://www.facebook.com"
                                    target="_blank">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a rel="noreferrer"
                                   href="https://www.linkedin.com/company/sitelabscompany/mycompany"
                                   target="_blank">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a rel="noreferrer"
                                   href="https://www.twitter.com"
                                   target="_blank">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </div>
                            <span>dovudkhon@gmail.com</span>
                            <span><a href="tel:+998976815007" target="_blank">+998976815007</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <span className="container">All right reseved <a href="https://dovudhonhusanov.vercel.app" target="_blank">Dovudhon Husanov</a></span>
            </div>
        </>
    );
}

export default Footer;