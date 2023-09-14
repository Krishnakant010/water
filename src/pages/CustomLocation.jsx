import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { saveLat } from "../features/saver/saverSlice";

const CustomLocation = ({ setLat, setlong, lat, long }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const latitude = useSelector((state) => state);

  // const longitude = useSelector((state) => state.longi);

  const [form, setform] = useState({
    firstname: "",
    lastname: "",
  });

  function changeHandler(e) {
    const { name, value, checked, type } = e.target;
    setform((prev) => {
      return {
        ...prev,

        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function submitHandler(e) {
    e.preventDefault();

    setLat(form.firstname);
    setlong(form.lastname);
    navigate("/result");
    // dispatch(saveLong(lastname));
  }
  return (
    <div>
      <div className="flex flex-col items-center">
        <form onSubmit={submitHandler}>
          <label htmlFor="firstname">LatiTude</label>
          <br />
          <input
            className="outline rounded-sm"
            type="text"
            name="firstname"
            onChange={changeHandler}
            value={form.firstname}
          />
          <br />
          <label onChange={changeHandler} htmlFor="lastname">
            Longitude
          </label>
          <br />
          <input
            className="outline rounded-sm"
            onChange={changeHandler}
            type="text"
            name="lastname"
            value={form.lastname}
          />
          <br />
          <input
            type="submit"
            className=" bg-sky-700 rounded-md px-4  text-yellow-50 "
          ></input>
        </form>
      </div>
    </div>
  );
};

export default CustomLocation;
