// GenreFilter.js
import React from 'react';

const GenreFilter = ({ genres, onGenreSelect }) => {
  return (
    <div className="genre-filter">
      <h2>FLTER BY GENRE</h2>
      <div className="buttons">
        {genres.map((genre, index) => (
          <button key={index} onClick={() => onGenreSelect(genre)}>
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreFilter;
