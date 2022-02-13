import React, { useState, useEffect, useRef } from "react";
import "./dashboard.css";
import MediaCard from "../MediaCard/MediaCard";
import Axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
// import InfiniteScroll from 'react-infinite-scroller';

// import { BsFillPersonFill } from "react-icons/bs";

export const Dashboard = () => {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(0);
  const [videoCount, setVideoCount] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const videoContainer = useRef();

  const handleScroll = (ele) => {
    const bottom =
      parseInt(ele.target.documentElement.scrollHeight) -
        parseInt(ele.target.documentElement.scrollTop) ===
      parseInt(ele.target.documentElement.clientHeight + 1);
    if (bottom) {
      fetcVideos()
    } else {
      console.log("not bottom");
    }
  };


  const fetcVideos = () => {
    console.log(page);
    let newP = page + 1;
    setPage(newP);
    console.log(newP)
    Axios.get(`http://localhost:9000/get-videos/${newP}`)
      .then((data) => {
        setVideoCount(data.data.totalCount);
        const newVideo = videos.concat(data.data.result)
        setVideos(videos.concat(data.data.result));
        setHasMore(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    // document.addEventListener("scroll", handleScroll);
    // videoContainer.current.addEventListener("scroll",handleScroll )
    fetcVideos();
    // setPage(page+1)
  }, []);

  return (
    <div className="dashboardContainer" ref={videoContainer}>
        <InfiniteScroll
          dataLength={videos?.length}
          next={fetcVideos}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
      <div>

        {videos
          ? videos.map((data, index) => (
              <MediaCard key={index} data={data}></MediaCard>
            ))
          : ""}
      </div>
      </InfiniteScroll>
    </div>
  );
};
