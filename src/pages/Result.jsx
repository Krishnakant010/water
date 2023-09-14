import React from "react";
import { useParams } from "react-router";
import { Format } from "../components/Format";
import Navbar from "../components/Navbar";

const Result = ({ lat, long }) => {
  return (
    <>
      <Navbar />
      <div>
        The results for the following latitude and longitude are :<p>{lat}</p>
        <p>{long}</p>
        <div className="">
          {" "}
          <Format />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Result;
