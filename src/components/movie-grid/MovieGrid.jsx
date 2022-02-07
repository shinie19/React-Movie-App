import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi, { movieType, tvType } from "../../api/tmdbApi";
import { OutlineButton } from "../button/Button";
import MovieCard from "../movie-card/MovieCard";
import MovieSearch from "../movie-search/MovieSearch";
import "./movie-grid.scss";

function MovieGrid(props) {
  const { category } = props;

  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const { keyword } = useParams();

  useEffect(() => {
    const getList = async () => {
      let response = null;

      // console.log(keyword);

      if (keyword === undefined) {
        const params = {};
        switch (category) {
          case "movie":
            response = await tmdbApi.getMovieList(movieType.upcoming, {
              params,
            });
            break;
          default:
            response = await tmdbApi.getTvList(tvType.popular, {
              params,
            });
        }
      } else {
        const params = {
          query: keyword,
        };
        response = await tmdbApi.search(category, { params });
      }

      setItems(response.results);
      setTotalPage(response.total_pages);
    };

    getList();
  }, [category, keyword]);

  const handleLoadmore = async () => {
    let response = null;

    if (keyword === undefined) {
      const params = {
        page: page + 1,
      };
      switch (category) {
        case "movies":
          response = await tmdbApi.getMovieList(movieType.upcoming, {
            params,
          });
          break;
        default:
          response = await tmdbApi.getTvList(tvType.popular, {
            params,
          });
      }
    } else {
      const params = {
        query: keyword,
        page: page + 1,
      };
      response = await tmdbApi.search(category, { params });
    }

    setItems([...items, ...response.results]);
    setPage(page + 1);
  };

  return (
    <>
      <div className="section mb-3">
        <MovieSearch category={category} keyword={keyword} />
      </div>
      <div className="movie-grid">
        {items.map((item, i) => (
          <MovieCard key={i} category={category} item={item} />
        ))}
      </div>
      {page < totalPage ? (
        <div className="movie-grid__loadmore">
          <OutlineButton className="small" onClick={handleLoadmore}>
            Load more
          </OutlineButton>
        </div>
      ) : null}
    </>
  );
}

export default MovieGrid;
