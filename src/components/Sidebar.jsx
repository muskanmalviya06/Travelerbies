
import React from "react";
import { MessageCircle } from "lucide-react";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaYoutube
} from "react-icons/fa";

function Sidebar() {

    const posts = [
        {
            image: "fourth.jpeg",
            title: "Discover the beauty of Paris and its famous landmarks"
        },
        {
            image: "fifth.jpeg",
            title: "Enjoy the breathtaking views of Dubai at night"
        },
        {
            image: "sixth.jpeg",
            title: "Explore the charm of historic streets and architecture"
        },
        {
            image: "taj.jpeg",
            title: "Explore the timeless beauty of the Taj Mahal"
        }
    ];

    return (
        <aside className="sidebar">

            {posts.map((post, index) => (

                <div className="popular-post" key={index}>

                    <img
                        src={`/images/${post.image}`}
                        alt={post.title}
                    />

                    <div>
                        <h4>
                            {post.title}
                        </h4>

                        <small>
                            <MessageCircle size={12} />
                            2 Comments | July 11, 2016
                        </small>
                    </div>

                </div>

            ))}

            <div className="social-buttons">

                <button><FaFacebookF /> Facebook</button>
                <button><FaTwitter /> Twitter</button>
                <button><FaLinkedinIn /> Linked In</button>
                <button><FaYoutube /> YouTube</button>

            </div>

        </aside>
    );
}

export default Sidebar;
