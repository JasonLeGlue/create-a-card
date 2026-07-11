import { useState } from "react";
import { CardForm } from "./components/forms/CardForm.jsx";
import "./App.css";

function App() {
  return (
    <>
      <head>
        <link
          href="//cdn.jsdelivr.net/npm/mana-font@latest/css/mana.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <CardForm></CardForm>
    </>
  );
}

export default App;
