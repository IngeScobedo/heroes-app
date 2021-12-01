import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Loginscreen } from "../components/login/Loginscreen";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Loginscreen />} />
        <Route path="/*" element={<DashboardRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};
