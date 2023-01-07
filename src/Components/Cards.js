import React from "react";
import "../index.css";

const Cards = (characters) => {
  return (
    <div className='cards-container'>
      {characters.characters.results.map((item) => (
        <div key={item.id} className='card'>
          <p className={item.status}>{item.status}</p>
          <img src={item.image} alt='' />
          <p className='characterName'>{item.name}</p>
          <div className='characterInfo'>
            <p className='lastSeen'>Last seen location</p>
            <small>{item.location.name}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
