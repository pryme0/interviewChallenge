import React from "react";
import "./mediaCard.css";
import ReactPlayer from "react-player";
import {} from 'react-icons/fa'

const MediaCard = ({data}) => {
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
        <h3>{data?.likesCount}</h3>  <h3>{data?.commentsCount}</h3>  
      </div>
    </div>
  );
};

export default MediaCard;
