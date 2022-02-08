import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../api/tmdbApi";

function VideoList(props) {
  const { id } = props;

  const { category } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const response = await tmdbApi.getVideos(category, id);

      setVideos(response.results.slice(0, 5));
    };

    getVideos();
  }, [category, id]);

  return (
    <>
      {videos.map((video, i) => (
        <div key={i} className="video">
          <div className="video__title">
            <h2>{video.name}</h2>
          </div>
          <iframe
            title="video"
            src={`https://www.youtube.com/embed/${video.key}`}
            width="100%"
            height="600px"
          ></iframe>
        </div>
      ))}
    </>
  );
}

export default VideoList;
