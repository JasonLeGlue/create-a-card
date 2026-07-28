import { Route, Routes, Outlet } from "react-router-dom";
import { NavBar } from "../components/navbar/Navbar.jsx";
import { FilterBar } from "../components/filter bar/FilterBar.jsx";
import { Explore } from "../components/explore/Explore.jsx";
import { Favorites } from "../components/favorites/Favorites.jsx";
import { Collection } from "../components/collection/Collection.jsx";
import { CardForm } from "../components/forms/CardForm.jsx";
import { BrowserRouter } from "react-router-dom";
import { CardDetails } from "../components/card/CardDetails.jsx";

export const ApplicationViews = () => {
  return (
    <>
      {/* <BrowserRouter>
        <Collection />
      </BrowserRouter> */}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Outlet />
              {/* Add welcome component w/ index route as child */}
            </>
          }
        >
          <Route path="/explore" element={<Explore />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/create" element={<CardForm />} />
          <Route path="card">
            <Route path=":cardId" element={<CardDetails />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
