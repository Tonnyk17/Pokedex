import React from "react";
import "../assets/styles/components/Footer.css";

const Footer = () => (
    <div className="footer">
        <div className="footer-icons title">
            <a
                href="https://www.instagram.com/tonnyk17/"
                target="_blank"
                rel="noopener"
            >
                <i className="fab fa-instagram icon" />
            </a>
            <a
                href="https://www.linkedin.com/in/tonatiuh-jimenez-sanchez-877300193/"
                target="_blank"
                rel="noopener"
            >
                <i className="fab fa-linkedin icon" />
            </a>
            <a
                href="https://github.com/Tonnyk17"
                target="_blank"
                rel="noopener"
            >
                <i className="fab fa-github-square icon" />
            </a>
            <a
                href="mailto:tonykurosaki117@gmail.com"
                target="_blank"
                rel="noopener"
            >
                <i className="fas fa-envelope-square icon" />
            </a>
        </div>
        <p className="footer-text h6">
            Made with love by
            <a
                href="https://tonnyk17.github.io/Portafolio/index"
                target="_blank"
                rel="noopener"
            > Tonyk
            </a> 💙
        </p>
    </div>
)

export default Footer;
