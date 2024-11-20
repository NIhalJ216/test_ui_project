import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loadable from "../Components/Loadable/Loadable";
import { PATHS } from "./Paths";

// Lazy-loaded components
const AppDrawer = Loadable(
  lazy(() => import("../Components/MyDrawer/AppDrawer"))
);
const Login = Loadable(lazy(() => import("../Pages/Login")));
const Register = Loadable(lazy(() => import("../Pages/Register")));
const Home = Loadable(lazy(() => import("../Pages/Home")));
const About = Loadable(lazy(() => import("../Pages/About")));

// Mock authentication check (replace with actual logic)
const isAuthenticated = () => !!localStorage.getItem("authToken");

// Private Route Wrapper
const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};

const RouterConfig = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public Routes */}
        <Route path={PATHS.LOGIN} element={<Login />} />
        <Route path={PATHS.REGISTER} element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <AppDrawer />
            </PrivateRoute>
          }
        >
          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={PATHS.ABOUT} element={<About />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default RouterConfig;
