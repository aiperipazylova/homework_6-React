import React from 'react';
import data from '../data.json';

export default function SoundtrackRoom() {
  const soundtrackData = data.soundtrack;

  return (
    <div>
    <h1>Soundtrack Room</h1>
    <p>{soundtrackData.description}</p>
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${soundtrackData.video}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);
}
