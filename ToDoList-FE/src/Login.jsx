import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";

const Login = ({ updateLogin }) => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const { data } = await axios.post(
      "http://localhost:3000/login",
      {
        userName,
        password,
      },
      {
        withCredentials: true,
      }
    );
    if (data.error) {
      return alert(data.error.message);
    }
    return alert(data.response.message);
  };
  return (
    <>
      <div className="h-screen w-screen  bg-blue-200 flex items-center justify-end pr-16">
        <div className="h-5/6 w-2/6 bg-gray-50 rounded-md">
          <div className="h-1/4">
            <p className="text-2xl font-semibold w-full h-full flex justify-center items-center">
              {"Login Form"}
            </p>
          </div>
          <div className="h-2/4 flex flex-col justify-center p-2">
            <label className="text-lg font-semibold py-2 text-gray-600">
              Username
            </label>
            <input
              className="bg-gray-200 border-2 p-2 outline-none border-gray-300 rounded-md "
              placeholder="username"
              required
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <label className="text-lg font-semibold py-2 text-gray-600">
              Password
            </label>
            <input
              className="bg-gray-200 border-2 p-2 outline-none border-gray-300 rounded-md "
              placeholder="password"
              required
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p>
              {"Don't have an account?"}{" "}
              <span
                className="hover:underline hover:text-blue-700 cursor-pointer "
                onClick={() => {
                  updateLogin(false);
                }}
              >
                {"Signup"}
              </span>
            </p>
            <div className="h-1/4 w-full flex justify-center items-center p-2">
              <button
                onClick={login}
                disabled={!userName || !password}
                className="bg-blue-600 w-full text-white py-2 rounded-md text-xl font-semibold disabled:bg-gray-400"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
Login.propTypes = {
  updatSignup: PropTypes.func,
};
export default Login;
