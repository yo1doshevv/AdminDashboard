import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "../src/Companients/Ui/Routes/Router"; // Sizning asosiy Router faylingiz
import "./index.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <App/> 
    <AppRouter />
  </BrowserRouter>
);
