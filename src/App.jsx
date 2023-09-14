import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import CustomLocation from "./pages/CustomLocation";
import Result from "./pages/Result";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);
  const [lat, setLat] = useState("");
  const [long, setlong] = useState("");
  console.log(long);
  console.log(lat);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>HOME</div>} />
        <Route path="/location" element={<div>Grant location</div>} />
        <Route
          path="/custom"
          element={
            <CustomLocation
              setLat={setLat}
              setlong={setlong}
              lat={lat}
              long={long}
            />
          }
        />
        <Route path="/result" element={<Result lat={lat} long={long} />} />
      </Routes>
    </>
  );
}

export default App;
