type Country = {
  australia: string;
  ghana: string;
  indonesia: string;
  kenya: string;
};

type Population = {
  id: number;
  type: PopulationType;
  population: string;
  country: Country;
};

type PopulationType = "men" | "women" | "youth";
