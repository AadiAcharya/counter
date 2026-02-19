import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handelLogin() {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser.user === user && savedUser.password === password) {
      navigate("/logged");
    } else {
      console.log("Wrong Credentials");
    }

    console.log(user);
    console.log(password);
  }

  return (
    <div className="flex bg-linear-to-br from-blue-100 to-violet-200 flex-col justify-center items-center h-screen px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md flex flex-col gap-5">
        <div className="text-center mb-2">
          <h2 className="font-bold text-4xl text-gray-800">Welcome Back!</h2>
          <p className="text-gray-400 text-sm mt-1">Login to your account</p>
        </div>

        <div className="flex flex-col gap-1"></div>

        <div className="flex flex-col gap-1">
          <label className="text-gray-500 text-sm font-medium">Username</label>
          <input
            className="bg-gray-100 text-gray-800 border-none outline-none rounded-xl p-3 text-base w-full"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            type="text"
            placeholder="Enter Username"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-gray-500 text-sm font-medium">Password</label>
          <input
            className="bg-gray-100 text-gray-800 border-none outline-none rounded-xl p-3 text-base w-full"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Enter Password"
          />
        </div>

        <button
          className="bg-violet-500 hover:bg-violet-600 transition-colors text-white text-lg font-semibold rounded-2xl py-3 w-full mt-2"
          onClick={handelLogin}
        >
          Login
        </button>

        <div className="flex justify-between text-sm text-violet-500 mt-1">
          <button
            onClick={() => navigate("/forget-password")}
            className="hover:underline"
          >
            Forgot Password?
          </button>
          <button
            className="hover:underline"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
