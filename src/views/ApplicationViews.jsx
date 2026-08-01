import { Route, Routes, Outlet } from "react-router-dom";
import { NavBar } from "../components/navbar/Navbar.jsx";
import { FilterBar } from "../components/filter bar/FilterBar.jsx";
import { Explore } from "../components/explore/Explore.jsx";
import { Favorites } from "../components/favorites/Favorites.jsx";
import { Collection } from "../components/collection/Collection.jsx";
import { CardForm } from "../components/forms/CardForm.jsx";
import { BrowserRouter } from "react-router-dom";
import { Welcome } from "../components/welcome/Welcome.jsx";
import { CardDetails } from "../components/card/CardDetails.jsx";
import { Register } from "../components/auth/Register.jsx";
import { UserProfile } from "../components/UserProfile/UserProfile.jsx";
import { EditForm } from "../components/forms/EditForm.jsx";

export const ApplicationViews = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Outlet />
            </>
          }
        >
          <Route index element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/create" element={<CardForm />} />
          <Route path="/edit">
            <Route path=":cardId" element={<EditForm />} />
          </Route>
          <Route path="card">
            <Route path=":cardId" element={<CardDetails />} />
          </Route>
          <Route path="profile">
            <Route path=":userId" element={<UserProfile />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
