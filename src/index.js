import React from "react";
import ReactDOM from "react-dom/client"; // To‘g‘ri import qilish
import { BrowserRouter } from "react-router-dom";
import AppRouter from "../src/Companients/Ui/Routes/Router"; // Sizning asosiy Router faylingiz
import "./index.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root')); // Root yaratish
root.render(
  <BrowserRouter>
    <App /> 
    <AppRouter />
  </BrowserRouter>
);
