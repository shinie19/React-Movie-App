import React from "react";
import { useParams } from "react-router-dom";
import MovieGrid from "../components/movie-grid/MovieGrid";
import PageHeader from "../components/page-header/PageHeader";

function Catalog(props) {
  const { category } = useParams();

  // console.log(category);

  return (
    <div>
      <PageHeader>{category === "movie" ? "Movies" : "TV Series"}</PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </div>
  );
}

export default Catalog;
