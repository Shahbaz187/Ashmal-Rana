import React from 'react'
import { useState } from "react";

const LoginAdmin = ({ setAdmin }) => {
  const [data, setData] = useState({ email: "", password: "" });

  const handleInp = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      data.email === "ashmalrana99@gmail.com" &&
      data.password === "20102003"
    ) {
      localStorage.setItem("admin", true);
      setAdmin(true);
    } else {
      alert("Wrong User");
      location.href = "/";
    }
  };
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto flex flex-wrap items-center px-5 py-24">
        <form
          className="mx-auto mt-10 flex w-full flex-col rounded-lg bg-gray-100 p-8 md:mt-0 md:w-[80%]"
          onSubmit={handleSubmit}
        >
          <h2 className="title-font mb-5 text-lg font-medium text-gray-900">
            Login
          </h2>
          <div className="relative mb-4">
            <label htmlFor="full-name" className="text-sm leading-7 text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              onChange={handleInp}
              placeholder="Enter Your Email"
              name="email"
              className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor
            ="email" className="text-sm leading-7 text-gray-600">
              Password
            </label>
            <input
              type="text"
              id="password"
              onChange={handleInp}
              placeholder="Enter Your Password"
              name="password"
              className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <button className="rounded border-0 bg-indigo-500 px-8 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginAdmin