
import React from "react";
import { MessageCircle, CalendarDays } from "lucide-react";

// FEATURED POSTS
const featuredPosts = [
    {
        image: "/images/bikeadve.jpeg",
        title: "Conquering the winding mountain roads on two wheels",
    },
    {
        image: "/images/tallship.jpeg",
        title: "Sailing across the deep blue ocean in style",
    },
    {
        image: "/images/japatemple.jpeg",
        title: "Finding peace among ancient temples and autumn leaves",
    },
    {
        image: "/images/bigben.jpeg",
        title: "Exploring the historic charm of London's iconic tower",
    },
];

// LEFT POSTS
const leftPosts = [
    {
        image: "/images/whiteiger.jpeg",
        title: "A rare close look at the majestic white tiger",
    },
    {
        image: "/images/greatwall.jpeg",
        title: "Walking along the endless green ridges of ancient China",
    },
];

// RIGHT POSTS
const rightPosts = [
    {
        image: "/images/fourth.jpeg",
        title: "Relaxing under swaying palm trees by the crystal sea",
    },
    {
        image: "/images/taj.jpeg",
        title: "Witnessing the golden sunrise glow over the Taj Mahal",
    },
];

// CENTER IMAGE
const centerPost = {
    image: "/images/beach.jpeg",
    title: "Relaxing on a beautiful tropical beach surrounded by nature",
};

function Category() {
    return <span className="category">LIFESTYLE</span>;
}

function PostMeta() {
    return (
        <div className="post-meta">
            <span>
                <MessageCircle size={14} />
                2 Comments
            </span>

            <span>
                <CalendarDays size={14} />
                July 11, 2016
            </span>
        </div>
    );
}

// SMALL POST
function SmallPost({ post }) {
    return (
        <article className="gallery-small-post">
            <img src={post.image} alt={post.title} />
            <Category />
            <h3>{post.title}</h3>
            <PostMeta />
        </article>
    );
}

// TOP BLACK SECTION
function Gallery() {
    return (
        <section className="gallery-featured-section">
            <div className="gallery-featured-container">
                {featuredPosts.map((post, index) => (
                    <SmallPost post={post} key={index} />
                ))}
            </div>
        </section>
    );
}

// BOTTOM POPULAR SECTION
function PopularPosts() {
    return (
        <section className="gallery-popular-section">

            <h2 className="gallery-popular-heading">
                Most Popular Posts
            </h2>

            <div className="gallery-popular-container">

                {/* LEFT SIDE */}
                <div className="gallery-popular-side">
                    {leftPosts.map((post, index) => (
                        <SmallPost post={post} key={index} />
                    ))}
                </div>

                {/* CENTER BIG IMAGE */}
                <article className="gallery-center-post">

                    <img
                        src={centerPost.image}
                        alt={centerPost.title}
                    />

                    <div className="gallery-center-content">
                        <Category />
                        <h3>{centerPost.title}</h3>
                        <PostMeta />
                    </div>

                </article>

                {/* RIGHT SIDE */}
                <div className="gallery-popular-side">
                    {rightPosts.map((post, index) => (
                        <SmallPost post={post} key={index} />
                    ))}
                </div>

            </div>
        </section>
    );
}

// MAIN COMPONENT
function GalleryPage() {
    return (
        <div className="gallery-template">

            {/* TOP BLACK SECTION */}
            <Gallery />

            {/* BOTTOM POPULAR SECTION */}
            <PopularPosts />

        </div>
    );
}

export default GalleryPage;
