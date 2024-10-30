// AppRouter.js
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Settings from "../pages/Settingss/Settings";
import Brends from "../pages/Brends/Brends";
import Modules from "../pages/Moduless/Modules";
import Cities from "../pages/Cities/Cities";
import Cars from "../pages/Cars/Cars";
import Locations from "../pages/Locations/Locations";
import Login from "../../Login/Login";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/brends" element={<Brends />} />
      <Route path="/modules" element={<Modules />} />
      <Route path="/location" element={<Locations />} />
      <Route path="/cities" element={<Cities />} />
      <Route path="/cars" element={<Cars />} />
    </Routes>
  );
};

export default AppRouter;
