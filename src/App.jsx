import { useState } from "react";
import { CardForm } from "./components/card/CardForm.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CardForm></CardForm>
    </>
  );
}

export default App;
