import React from "react";
const Moviecard = ({ movieCard }) => {
  return (
    <div>
      <img src={movieCard.image} alt={movieCard.name} width={200} />
      <h2>name:{movieCard.name}</h2>
      <h2>date:{movieCard.date}</h2>
      <h2>rating:{movieCard.rating}</h2>
      <h2>description:{movieCard.description}</h2>
      <h2>type:{movieCard.type}</h2>
    </div>
  );
};

export default Moviecard;
Moviecard.defaultProps = {
  movieCard: {
    image:
      "https://i.pinimg.com/originals/3e/f1/ba/3ef1baaaceb5a95c4f57a7cb2393b39d.jpg",
    rating: 0,
    name: "no title",
    date: "0",
    type: "0",
    description: "no description",
  },
};
