import React, { useState, useEffect, useRef } from "react";
import "./VideoComponent.css";
import MediaCard from "../MediaCard/MediaCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { FaSpinner } from "react-icons/fa";
import axios from "../../Service/api";

export const VideoComponent = () => {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const videoContainer = useRef();

  const fetcVideos = () => {
    let newP = page + 1;
    setPage(newP);
    axios
      .get(`/get-videos/${newP}`)
      .then((data) => {
        data.data.result === undefined || null
          ? setHasMore(false)
          : setVideos(videos.concat(data.data.result));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetcVideos();
  }, []);

  return (
    <div className="dashboardContainer" ref={videoContainer}>
      <InfiniteScroll
        dataLength={videos?.length}
        next={fetcVideos}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<h4>End of list...</h4>}
      >
        <div>
          {videos ? (
            videos.map((data, index) => (
              <MediaCard key={index} data={data}></MediaCard>
            ))
          ) : (
            <FaSpinner></FaSpinner>
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
};
