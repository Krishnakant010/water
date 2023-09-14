import React from "react";
import { useParams } from "react-router";
import { Format } from "../components/Format";

const Result = ({ lat, long }) => {
  return (
    <div>
      The results for the following latitude and longitude are :<p>{lat}</p>
      <p>{long}</p>
      <div className="">
        {" "}
        <Format />
      </div>
    </div>
  );
};

export default Result;
