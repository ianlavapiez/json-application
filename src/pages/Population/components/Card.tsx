import React from "react";

import "./Card.css";

type CardProps = {
  population: Population;
};

const Card: React.FC<CardProps> = ({ population }) => {
  return (
    <div className="card-container">
      <div className="card-population">
        <h2>{population.population}</h2>
        <h4>{population.type.toUpperCase()}</h4>
      </div>
      <div className="card-countries">
        <h2>By country</h2>
        <div className="card-country-container">
          {Object.entries(population.country).map(([country, count]) => (
            <div
              key={country}
              className={`card-country-item-${population.type}`}
            >
              <h4 className={`card-country-item-count-${population.type}`}>
                {count}
              </h4>
              <p>{country.charAt(0).toUpperCase() + country.slice(1)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
