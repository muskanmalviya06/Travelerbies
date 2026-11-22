import React from "react";
import Header from "./components/Header";
import PostCard from "./components/PostCard";
import Sidebar from "./components/Sidebar";
import Cities from "./components/Cities";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import { MessageCircle } from "lucide-react";
import "./App.css";

function App() {
  return (
    <>
      <section className="hero-section">
        <Header />

        <div className="cards-container">

          <PostCard
            image="/images/first.jpeg"
            title="Exploring Beautiful Historical Places"
          />

          <PostCard
            image="/images/second.jpeg"
            title="Enjoy The Beautiful Blue Ocean"
          />

          <PostCard
            image="/images/third.jpeg"
            title="Discover Amazing Beach Destinations"
          />

        </div>
      </section>

      <section className="main-container">

        {/* LEFT SIDE */}
        <div className="left-column">

          <div className="left-content">
            <PostCard image="/images/fourth.jpeg" />
          </div>

          <div className="cards-section">

            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="two-cards">
              <PostCard image="/images/fifth.jpeg" />
              <PostCard image="/images/sixth.jpeg" />
            </div>

          </div>

          
<div className="bottom-posts">

  {[
    {
      image: "taj.jpeg",
      title: "Discover the magnificent beauty of the Taj Mahal"
    },
    {
      image: "first.jpeg",
      title: "Beautiful architectural building"
    },
    {
      image: "tower.jpeg",
      title: "A beautiful view of the iconic Eiffel Tower"
    },
    {
      image: "tiger.jpeg",
      title: "Exploring wildlife and the beauty of nature"
    },
    {
      image: "desert.jpeg",
      title: "Experience the beauty of golden desert landscapes"
    },
    {
      image: "citylite.jpeg",
      title: "Enjoy the spectacular city lights and skyline views"
    }
  ].map((post, index) => (

    <div className="bottom-post" key={index}>

      <img src={`/images/${post.image}`} alt={post.title} />

      <div>
        <h4>{post.title}</h4>

        <small>
          <MessageCircle size={12} />
          2 Comments | July 11, 2016
        </small>
      </div>

    </div>

  ))}

</div>


        </div>

        {/* RIGHT SIDE */}
        <div className="right-content">

          <div className="banner-image">
            <img src="/images/desresort.jpeg" alt="Banner" />
            <div className="banner-text">Banner</div>
          </div>

          <Sidebar />

        </div>

        <div className="advertisement">
          980x120 ( ADV )
        </div>

      </section>

      
        <Cities/>
        <Gallery/>
        <Footer/>
      
    </>
  );
}

export default App;