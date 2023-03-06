import "./styles.css";
import { useState } from "react";
import AccordionBar from "./Components/AccordionBar";

export default function App() {
  let [show, setShow] = useState(false);

  return (
    <div className="App">
      <AccordionBar />
    </div>
  );
}
