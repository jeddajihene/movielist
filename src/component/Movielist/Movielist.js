import React from "react";
import { moviesData } from "../../constant/data";
import Moviecard from "../Moviecard/Moviecard";
const Movielist = () => {
  return (
    <div>
      <h2>Movielist</h2>
      <div>
        {moviesData.map((movieCard) => (
          <Moviecard movieCard={movieCard} key={movieCard.id} />
        ))}
      </div>
      <hr />

      <h2>list of filtred movies:</h2>
      {moviesData
        .filter((movieCard) => movieCard.rating === 3)
        .map((movieCard) => (
          <Moviecard movieCard={movieCard} key={movieCard.id} />
        ))}
    </div>
  );
};

export default Movielist;
