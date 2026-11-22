
import React from "react";
import { Search, Menu } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

function Header() {
    return (
        <header className="header">

            <div className="top-bar">
                <div className="social-icons">
                    <FontAwesomeIcon icon={faFacebookF} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faTwitter} />
                </div>
            </div>

            <div className="logo-section">
                <h1>TRAVELERBIES</h1>

                <div className="header-icons">
                    <Search size={20} />
                    <Menu size={20} />
                </div>
            </div>

            <nav className="navbar">
                <a href="#">Home</a>
                <a href="#">Features</a>
                <a href="#">Travel</a>
                <a href="#">Lifestyle</a>
                <a href="#">Music</a>
                <a href="#">Shop</a>
                <a href="#">Contact Us</a>
            </nav>

        </header>
    );
}

export default Header;
