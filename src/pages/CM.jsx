import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { saveLat } from "../features/saver/saverSlice";
import Navbar from "../components/Navbar";

export function CM({ setLat, setlong, lat, long }) {
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
    <section>
      <Navbar />
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="black"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-navigation"
            >
              <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Enter longitude and latitude
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 ">
            Don&apos;t have an info?{" "}
            <a
              href="#"
              title=""
              className="font-semibold text-black transition-all duration-200 hover:underline"
            >
              Grab location access
            </a>
          </p>
          <form action="#" method="POST" className="mt-8">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Latitude{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    name="firstname"
                    onChange={changeHandler}
                    value={form.firstname}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Longitude{" "}
                  </label>
                  <a
                    href="#"
                    title=""
                    className="text-sm font-semibold text-black hover:underline"
                  >
                    {" "}
                  </a>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    onChange={changeHandler}
                    type="text"
                    name="lastname"
                    value={form.lastname}
                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  onClick={submitHandler}
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  See the results <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
          <div className="mt-3 space-y-3"></div>
        </div>
      </div>
    </section>
  );
}
