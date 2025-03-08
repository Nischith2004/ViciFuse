import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import PersistentDrawerRight from "../components/nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PersistentDrawerRight />
      <div className="pages">
        <Routes>
          <Route path="/home" element={<div>home</div>} />
        </Routes>
      </div>
      <div>hello</div>
    </>
  );
}

export default App;
