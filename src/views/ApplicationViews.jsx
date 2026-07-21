import { Route, Outlet } from "react-router-dom";
import { NavBar } from "../components/navbar/Navbar.jsx";
import { Explore } from "../components/explore/Explore.jsx";

export const ApplicationViews = () => {
  return (
    <>
      <Explore />
    </>
  );
};
