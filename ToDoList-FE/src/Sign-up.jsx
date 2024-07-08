import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";

const SignUp = ({ updateLogin }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const signup = async () => {
    const { data } = await axios.post(
      "http://localhost:3000/createUser",
      {
        userName,
        password,
        confirmPassword,
        role,
      },
      {
        withCredentials: true,
      }
    );
    console.log(data);
  };
  return (
    <>
      <div className="h-screen w-screen bg-blue-200 flex items-center justify-end pr-16">
        <div className="h-5/6 w-2/6 bg-gray-50 rounded-md">
          <div className="h-1/6">
            <p className="text-2xl font-semibold w-full h-full flex justify-center items-center">
              {"Signup Form"}
            </p>
          </div>
          <div className="h-4/5 flex flex-col justify-center p-2">
            <label className="text-lg font-semibold py-2 text-gray-600">
              Username
            </label>
            <input
              className="bg-gray-200 border-2 p-2 outline-none border-gray-300 rounded-md "
              placeholder="username"
              required
              type="text"
              onChange={(e) => {
                setUserName(e.target.value);
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
            <label className="text-lg font-semibold py-2 text-gray-600">
              {"Confirm password"}
            </label>
            <input
              className="bg-gray-200 border-2 p-2 outline-none border-gray-300 rounded-md "
              placeholder="confirm password"
              required
              type="password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <label className="text-lg font-semibold py-2 text-gray-600">
              {"Role"}
            </label>
            <select
              className="bg-gray-200 border-2 p-2 outline-none border-gray-300 rounded-md"
              required
              onChange={(e) => {
                setRole(e.target.value);
              }}
            >
              <option value="">Select a role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <p>
              {"Already have an account?"}{" "}
              <span
                className="hover:underline hover:text-blue-700 cursor-pointer "
                onClick={() => {
                  updateLogin(true);
                }}
              >
                {"Login"}
              </span>
            </p>
            <div className="h-1/5 w-full flex justify-center items-center p-2">
              <button
                disabled={!userName || !password || !confirmPassword || !role}
                onClick={signup}
                className="bg-blue-600 w-full text-white py-2  rounded-md text-xl font-semibold disabled:bg-gray-400"
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SignUp.propTypes = {
  updateLogin: PropTypes.func,
};
export default SignUp;
