import React from "react";

const heroImage = "/images/skyline1.jpeg";
const posts = [{
    image: "/images/adventure2.jpeg",
    title: "Stepping above the clouds gives you a whole new perspective on life. Discover the thrill of challenging mountain trails, the peace of untouched nature, and essential tips for preparing for your next high-altitude solo expedition.",
},
{
    image: "/images/mountain.jpeg",
    title: "Tucked away beneath towering rocky peaks lies the ultimate peaceful getaway. Experience the charm of remote mountain cabins, crisp alpine air, and scenic hiking paths far away from the noise of everyday city life.",
},
{
    image: "/images/ride.jpeg",
    title: "Nothing matches the pure freedom of carving your own path across endless sand dunes. Gear up for an adrenaline-filled motorcycle journey through rugged desert landscapes, golden sunsets, and untamed wilderness.",
},];

const popularposts = [{
    image: "/images/redbus.jpeg",
    title: "Top 5 European Cities to Explore on a Budget",
},
{
    image: "/images/taj.jpeg",
    title: "Best Time to Visit the Taj Mahal Without Crowds",
},
{
    image: "/images/fourth.jpeg",
    title: "Hidden Coastal Beaches You Must Visit This Year"
},
{
    image: "/images/burj.jpeg",
    title: "Luxury Travel Guide: Experiencing Dubai Like a Local"
},
];

function Category() {
    return <span className="category">LIFESTYLE</span>;
}

function PostMeta() {
    return (
        <div className="post-meta">
            <span>
                <i className="fa-regular fa-comments"></i>
                2 Comments
            </span>

            <span>
                <i className="fa-regular fa-calendar"></i>
                July 11, 2016
            </span>
        </div>
    );
}

function Cities() {
    return (
        <section className="cities-content">
            <main className="blog-main">
                <article className="hero-post">
                    <img src="/images/skyline1.jpeg" alt="hero" />
                    <Category />
                    <h2>
                        City skyline reflected in calm water at dusk
                    </h2>
                    <PostMeta />

                    <p>
                        Explore the beauty of breathtaking city skylines, where modern architecture meets vibrant city life. Discover stunning urban destinations,
                        iconic landmarks, beautiful waterfront views, and unforgettable experiences. From spectacular sunsets to sparkling city lights, every 
                        skyline tells a unique story waiting to be explored.
                    </p>
                </article>

                <div className="blog-post-list">
                    {posts.map((post, index) => (
                        <article className="blog-post-row" key={index}>
                            <img
                                src={post.image}
                                alt={post.title}
                            />

                            <div className="blog-post-content">

                                <Category />

                                <h3>{post.title}</h3>

                                <PostMeta />



                            </div>
                        </article>
                    ))}
                </div>

                <div className="pagination">

                    {[1, 2, 3, 4, 5, 6].map((number) => (
                        <button
                            key={number}
                            className={number === 1 ? "selected" : ""}
                        >
                            {number}
                        </button>
                    ))}

                </div>
            </main>

            <aside className="blog-sidebar">
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Search"
                    />

                    <button type="button">
                        🔍
                    </button>

                </div>

                <h3 className="sidebar-title">
                    MOST POPULAR
                </h3>

                <div className="cities-popular-list">
                    {popularposts.map((post, index) => (
                        <article className="popular-item" key={index}>
                            <img
                                src={post.image}
                                alt={post.title}
                            />
                            <div className="popular-content">

                                <h4>{post.title}</h4>

                                <PostMeta />

                            </div>
                        </article>
                    ))}
                </div>

                {/* FEATURED SIDEBAR IMAGE */}

                <div className="sidebar-feature">
                    <img src="/images/jeruselam.jpeg" alt="city" />

                    <div className="sidebar-overlay">
                        <h3>
                            Walking through thousands of years of history in Jerusalem.
                        </h3>

                        <PostMeta />
                    </div>
                </div>

                {/* BANNER */}

                <div className="sidebar-banner">

                    <img
                        src="/images/palm.jpeg" alt="Dubai island" />

                    <h2>BANNER</h2>

                </div>
            </aside>

        </section>
    );
}

export default Cities;