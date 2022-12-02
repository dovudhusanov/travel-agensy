import React from 'react';
import {Link} from "react-router-dom";
import "./footer-links.css"

function FooterLinks({title, link, link2, link3, link4, link5}) {
    return (
        <ul className="footer-links">
            <li>{title}</li>
            <li><Link to="/">{link}</Link></li>
            <li><Link to="/">{link2}</Link></li>
            <li><Link to="/">{link3}</Link></li>
            <li><Link to="/">{link4}</Link></li>
            <li><Link to="/">{link5}</Link></li>
        </ul>
    );
}

export default FooterLinks;