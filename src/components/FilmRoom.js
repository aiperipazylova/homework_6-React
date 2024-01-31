import React from 'react';
import data from '../data.json';

export default function FilmRoom() {
  const filmData = data.film;

  return (
    <div>
      <h1>Титаник (1997)</h1>
      <p>{filmData.description}</p>
     
      <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${filmData.video}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    </div>
  );
}
