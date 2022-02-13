import React from "react";
import "./mediaCard.css";
import ReactPlayer from "react-player";
import { FaThumbsUp, FaComment } from "react-icons/fa";

const MediaCard = ({ data }) => {
  return (
    <div className="mediaCardContainer">
      <div>
        <ReactPlayer
          url={data?.link}
          className=""
          width="100%"
          height="100%"
          controls={true}
        />
      </div>

      <div className="mediaBottom">
        <span className="iconCounter">
          <FaThumbsUp className="icon" />
          {data?.likesCount}
        </span>
        <span className="iconCounter">
          <FaComment className="icon" />
          {data?.commentsCount}
        </span>
      </div>
    </div>
  );
};

export default MediaCard;
