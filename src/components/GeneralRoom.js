import React from 'react';
import data from '../data.json';

export default function GeneralRoom() {
  const generalData = data.general;

  return (
    <div>
      <h1>ТИТАНИК</h1>
      <p>{generalData.description}</p>
     <img src={generalData.image} alt="изображение" />
   </div>
);
}
