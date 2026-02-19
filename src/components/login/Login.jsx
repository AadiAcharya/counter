import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ForgetPassword from "./ForgetPassword";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate()

  function handelLogin() {
    console.log(name);
    console.log(user);
    console.log(password);
  }

  return (
    <div className="flex bg-blue-200 flex-col justify-center items-center max-h-full h-screen">
      {/* header part */}
      <h2 className="font-bold text-5xl">Welcome to Login Page</h2>
      {/* login credentioal section */}
      <div className="flex mt-3 flex-col justify-center items-center ">
        <input
          className="text-center bg-gray-500 text-white border-none rounded-l mt-1 text-2xl"
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Enter Full Name"
        />
        <input
          className="text-center bg-gray-500 text-white border-none rounded-l mt-1 text-2xl"
          type="text"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          placeholder="enter username"
        />
        <input
          className="text-center bg-gray-500 text-white border-none rounded-l mt-1 text-2xl"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Enter Password"
        />
        <button
          className="my-3 bg-violet-400 px-3 py-1 rounded-xl "
          onClick={handelLogin}
        >
          Login
        </button>
      </div>
      {/* forget section  */}
      <div className="flex  flex-col justify-center gap-2 items-center ">
        <button onClick={() => navigate("/forget-password")}>Forget Password ?</button>
        <button>Sign up</button>
      </div>
    </div>
  );
};

export default Login;
