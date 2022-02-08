import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import tmdbApi from "../../api/tmdbApi";

function CastList(props) {
  const { id } = props;

  const { category } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCredits = async () => {
      const response = await tmdbApi.credits(category, id);

      setCasts(response.cast.slice(0, 6));
    };

    getCredits();
  }, [category, id]);

  return (
    <div className="casts">
      {casts.map((cast, i) => (
        <div key={i} className="casts__item">
          <div
            className="casts__item__img"
            style={{
              backgroundImage: `url(${apiConfig.w500Image(cast.profile_path)})`,
            }}
          ></div>
          <p className="casts__item__name">{cast.name}</p>
        </div>
      ))}
    </div>
  );
}

export default CastList;
