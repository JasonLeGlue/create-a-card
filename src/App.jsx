import { useState } from "react";
import { CardForm } from "./components/forms/CardForm.jsx";
import { CardDisplay } from "./components/card display/CardDisplay.jsx";
import "./App.css";

function App() {
  return (
    <>
      <link
        href="//cdn.jsdelivr.net/npm/mana-font@latest/css/mana.css"
        rel="stylesheet"
        type="text/css"
      />
      <CardDisplay></CardDisplay>
    </>
  );
}

export default App;
