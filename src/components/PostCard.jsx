import React from "react";
import { MessageCircle, CalendarDays } from "lucide-react";

function PostCard({ image, title }) {

  return (

    <div
      className="post-card"
      style={{ backgroundImage: `url(${image})` }}
    >

      <div className="post-content">

        <span className="category">
          LIFESTYLE
        </span>

        <h2>{title}</h2>

        <div className="post-details">

          <span>
            <MessageCircle size={13} />
            2 Comments
          </span>

          <span>
            <CalendarDays size={13} />
            July 11, 2016
          </span>

        </div>

      </div>

    </div>

  );
}

export default PostCard;