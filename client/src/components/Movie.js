import React from "react";

const Movie = ({ id, Title, Genre, Year, setSelectedMovie }) => (
  <div className="list-content movie">
    <p>{Title}</p>
    <p>
      {Year}: {Genre}
    </p>
    <button onClick={() => setSelectedMovie(id)}>Details</button>
  </div>
);

export default Movie;
