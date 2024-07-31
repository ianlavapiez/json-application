import React, { Suspense } from "react";

import { PopulationPage } from "pages";
import { Loading } from "shared";

import "./App.css";

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <div className="app-container">
      <Suspense fallback={<Loading />}>
        <PopulationPage />
      </Suspense>
    </div>
  );
};

export default App;
