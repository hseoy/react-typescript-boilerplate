import React, { FC } from "react";
import "./App.css";

const App: FC = () => {
  return <h1>Hello World {process.env.NODE_ENV}</h1>;
};

export default App;
