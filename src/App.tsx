import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Rockets from "./components/Rockets";

function App() {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-[#EFEFEF] h-screen flex justify-center items-center">
      <Navbar active={active} setActive={setActive} />
      {active === 0 && <Dashboard />}
      {active === 1 && <Rockets />}
    </div>
  );
}

export default App;
