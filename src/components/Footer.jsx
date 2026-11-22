
import React from "react";
import { MessageCircle, CalendarDays } from "lucide-react";

// MOST POPULAR POSTS
const popularPosts = [
    { image: "/images/redbus.jpeg", title: "Exploring beautiful cities around the world" },
    { image: "/images/burj.jpeg", title: "Discovering luxury destinations in Dubai" },
    { image: "/images/citylite.jpeg", title: "Amazing city views and beautiful places" },
    { image: "/images/ride.jpeg", title: "Adventures across breathtaking landscapes" },
];

// GALLERY IMAGES
const galleryImages = [
    "/images/whiteiger.jpeg",
    "/images/burj.jpeg",
    "/images/mountain.jpeg",
    "/images/skyline1.jpeg",
    "/images/bikeadve.jpeg",
    "/images/bigben.jpeg",
    "/images/lowangel.jpeg",
    "/images/taj.jpeg",
];

// LATEST POSTS
const latestPosts = [
    { image: "/images/europinhouse.jpeg", title: "Beautiful European architecture and streets" },
    { image: "/images/resort.jpeg", title: "Relaxing at amazing holiday destinations" },
    { image: "/images/greatwall.jpeg", title: "Exploring the wonders of ancient China" },
    { image: "/images/desert.jpeg", title: "Discovering exciting travel adventures" },
];

function FooterMeta() {
    return (
        <div className="footer-meta">
            <span><MessageCircle size={11} /> 2 Comments</span>
            <span><CalendarDays size={11} /> July 11, 2016</span>
        </div>
    );
}

function FooterPost({ post }) {
    return (
        <article className="footer-post">
            <img src={post.image} alt={post.title} />
            <div className="footer-post-content">
                <h4>{post.title}</h4>
                <FooterMeta />
            </div>
        </article>
    );
}

function Footer() {
    return (
        <footer className="footer-template">

            <div className="footer-container">

                {/* MOST POPULAR */}
                <div className="footer-column">
                    <h3>MOST POPULAR</h3>

                    {popularPosts.map((post, index) => (
                        <FooterPost post={post} key={index} />
                    ))}
                </div>

                {/* GALLERY */}
                <div className="footer-column footer-gallery">
                    <h3>GALLERY</h3>

                    <div className="footer-gallery-grid">
                        {galleryImages.map((image, index) => (
                            <img
                                src={image}
                                alt={`Gallery ${index + 1}`}
                                key={index}
                            />
                        ))}
                    </div>
                </div>

                {/* LATEST */}
                <div className="footer-column">
                    <h3>LATEST</h3>

                    {latestPosts.map((post, index) => (
                        <FooterPost post={post} key={index} />
                    ))}
                </div>

            </div>

            {/* COPYRIGHT */}
            <div className="footer-copyright">
                © 2016 ALL RIGHT RESERVED PSDfreebies.com
            </div>

        </footer>
    );
}

export default Footer;
