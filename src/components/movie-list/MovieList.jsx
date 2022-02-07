import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./movie-list.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import Button from "../button/Button";

import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

function MovieList(props) {
  const { category, type, id } = props;

  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const params = {};
      let response = null;

      if (type !== "similar") {
        switch (category) {
          case "movie":
            response = await tmdbApi.getMovieList(type, { params });
            break;
          default:
            response = await tmdbApi.getTvList(type, { params });
        }
      } else {
        response = await tmdbApi.similar(category, id);
      }

      setItems(response.results);
    };

    getList();
  }, []);

  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <img src={apiConfig.w500Image(item.poster_path)} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MovieList;
