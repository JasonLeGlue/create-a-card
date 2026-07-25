import { Route, Outlet } from "react-router-dom";
import { NavBar } from "../components/navbar/Navbar.jsx";
import { Explore } from "../components/explore/Explore.jsx";
import { Favorites } from "../components/favorites/Favorites.jsx";
import { Collection } from "../components/collection/Collection.jsx";

export const ApplicationViews = () => {
  return (
    <>
      <Favorites />
    </>
  );
};
