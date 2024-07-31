import React from "react";

import usePopulation from "hooks/usePopulation";

import { Card } from "./components";
import "./Population.css";

type PopulationProps = {};

const Population: React.FC<PopulationProps> = () => {
  const population = usePopulation();

  return (
    <div className="population-container">
      {population.map((data) => (
        <Card key={data.id} population={data} />
      ))}
    </div>
  );
};

export default Population;
