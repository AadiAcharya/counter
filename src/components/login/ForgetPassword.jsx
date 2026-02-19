import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [verificationCode, setVerificationCode] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [user, setUser] = useState("");
  const [userInput, setUserInput] = useState("");
  const navigate = useNavigate();

  function obtainCode() {
    const code = Math.floor(Math.random() * 9000 + 1000);
    setVerificationCode(code);
    console.log(code);
  }

  function verify() {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser.user === user) {
      setIsVerified(true);
    }
  }

  function changePassword(){
    console.log('changed')
    const savedUser = JSON.parse(localStorage.getItem("user"))
    savedUser.password = newPassword
    localStorage.setItem("user", JSON.stringify(savedUser))
    console.log(savedUser.password)
    alert("password Changed Successfully")
    navigate("/login")
  }

  function verifyCode() {
    if (verificationCode == userInput) {
      setShowPassword(true);
    }
  }

  return (
    <div className="flex bg-linear-to-br from-blue-100 to-indigo-200 flex-col justify-center items-center h-screen px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md flex flex-col gap-5">
        <div className="text-center mb-2">
          <h2 className="text-4xl font-bold text-gray-800">Forgot Password?</h2>
          <p className="text-gray-400 text-sm mt-1">
            Enter your details to reset your password
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-gray-500 text-sm font-medium">Username</label>
          <input
            className="bg-gray-100 text-gray-800 border-none outline-none rounded-xl p-3 text-base w-full"
            type="text"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            placeholder="Enter Username"
          />
        </div>

        {!isVerified &&  (
          <button
            onClick={verify}
            className="bg-indigo-500 hover:bg-indigo-600 transition-colors text-white text-lg font-semibold rounded-2xl py-3 w-full mt-2"
          >
            Verify
          </button>
        )}

        {isVerified && (
          <div className="flex flex-col gap-1">
            <label className="text-gray-500 text-sm font-medium">
              Verification Code
            </label>
            <div className="flex gap-2">
              <input
                className="bg-gray-100 text-gray-800 outline-none rounded-xl p-3 text-base flex-1"
                onChange={(e) => setUserInput(e.target.value)}
                type="text"
                placeholder="Enter code"
              />
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl px-4 text-sm font-semibold transition-colors"
                onClick={obtainCode}
              >
                Obtain
              </button>
            </div>
          </div>
        )}
        {!showPassword && isVerified && (
          <button
            onClick={verifyCode}
            className="bg-indigo-500 hover:bg-indigo-600 transition-colors text-white text-lg font-semibold rounded-2xl py-3 w-full mt-2"
          >
            Verify
          </button>
        )}
        {showPassword && (
          <div className="flex flex-col gap-1">
            <label className="text-gray-500 text-sm font-medium">
              Password
            </label>
            <input
              className="bg-gray-100 text-gray-800 border-none outline-none rounded-xl p-3 text-base w-full"
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
            />
          </div>
        )}
        {showPassword && (
            <button
            onClick={changePassword}
            className="bg-indigo-500 hover:bg-indigo-600 transition-colors text-white text-lg font-semibold rounded-2xl py-3 w-full mt-2"
          >
            Change Password
          </button>
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;
