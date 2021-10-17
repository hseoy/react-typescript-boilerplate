import React, { FC } from "react";
import "./App.css";
import testImage from "./assets/images/test.jpg";

const App: FC = () => {
  return (
    <>
      <h1>Hello World {process.env.APP_ENV}</h1>
      <img src={testImage} width="500px" />
    </>
  );
};

export default App;
