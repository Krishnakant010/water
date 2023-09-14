import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router";

const Home = ({ setLat, setlong, lat, long }) => {
  const navigate = useNavigate();

  const [location, setLocation] = useState(null);
  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLat(latitude);
    setlong(longitude);
  }
  function clickHandler(e) {
    e.preventDefault();
    navigate("/result");
  }
  function error() {
    console.log("Unable to retrieve your location");
  }

  return (
    <>
      {!location ? (
        <button onClick={handleLocationClick}>Get Location</button>
      ) : null}
      <button onClick={clickHandler}>Get your locations data</button>
    </>
  );
};

export default Home;
