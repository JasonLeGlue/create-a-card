import { useState } from "react";
import { CardForm } from "./components/forms/CardForm.jsx";
import { Route, Routes, Outlet } from "react-router-dom";
import { Login } from "./components/auth/Login.jsx";
import { Register } from "./components/auth/Register.jsx";
import "./App.css";
import { ApplicationViews } from "./views/ApplicationViews.jsx";
import { Authorized } from "./views/Authorized.jsx";

function App() {
  return (
    <>
      <link
        href="//cdn.jsdelivr.net/npm/mana-font@latest/css/mana.css"
        rel="stylesheet"
        type="text/css"
      />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="*"
          element={
            <Authorized>
              <ApplicationViews />
            </Authorized>
          }
        />
      </Routes>
    </>
  );
}

export default App;
