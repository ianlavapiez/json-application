import { useEffect, useState } from "react";

const usePopulation = () => {
  const [population, setPopulation] = useState<Population[]>([]);

  useEffect(() => {
    fetch("/src/data/population.json")
      .then((response) => response.json())
      .then((data: Population[]) => setPopulation(data))
      .catch(() => setPopulation([]));
  }, []);

  return population;
};

export default usePopulation;
