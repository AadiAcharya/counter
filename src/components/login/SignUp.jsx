import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  function registerUser(){
    const newUser = {id: crypto.randomUUID(), name: name, user:user , password:password }
    localStorage.setItem("user", JSON.stringify(newUser))
    alert('account created successfully')
    navigate("/login")
  }


  const navigate = useNavigate();


  return (
    <div className="flex bg-linear-to-br from-blue-100 to-violet-200 flex-col justify-center items-center h-screen px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md flex flex-col gap-5">
        <div className="text-center mb-2">
          <h2 className="font-bold text-4xl text-gray-800">Create Account</h2>
          <p className="text-gray-400 text-sm mt-1">
            Fill in the details to get started
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-gray-500 text-sm font-medium">Full Name</label>
          <input
            className="bg-gray-100 text-gray-800 border-none outline-none rounded-xl p-3 text-base w-full"
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Enter Full Name"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-gray-500 text-sm font-medium">Username</label>
          <input
            className="bg-gray-100 text-gray-800 border-none outline-none rounded-xl p-3 text-base w-full"
            type="text"
            onChange={(e)=> setUser(e.target.value)}
            value={user}
            placeholder="Choose a Username"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-gray-500 text-sm font-medium">Password</label>
          <input
            className="bg-gray-100 text-gray-800 border-none outline-none rounded-xl p-3 text-base w-full"
            type="password"
            placeholder="Enter Password"
            onChange={(e)=> setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-gray-500 text-sm font-medium">
            Confirm Password
          </label>
          <input
            className="bg-gray-100 text-gray-800 border-none outline-none rounded-xl p-3 text-base w-full"
            type="password"
            placeholder="Confirm Password"
            onChange={(e)=> setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </div>

        <button className="bg-violet-500 hover:bg-violet-600 transition-colors text-white text-lg font-semibold rounded-2xl py-3 w-full mt-2" onClick={registerUser}>
          Create Account
        </button>

        <div className="text-center text-sm text-gray-400">
          Already have an account?{" "}
          <button
            className="text-violet-500 hover:underline font-medium"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
