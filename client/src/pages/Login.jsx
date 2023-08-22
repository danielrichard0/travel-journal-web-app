import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";
import Navbar from "../components/Navbar";
import NavComponent from "../components/NavComponent";

const LoginForm = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "top-right",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-center",
      autoClose: 1000,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5050/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message, userId } = data;
      if (success) {
        console.log(userId);
        handleSuccess(message);
        setTimeout(() => {
          navigate("/", { state: { userId: userId } });
        }, 2000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <>
      <NavComponent />
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12 ">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex justify-center">
            <div
              className="max-w-md w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1686007578248-afda71fbeda9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2709&q=80')",
              }}
            ></div>

            <div className="max-w-md w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Login</h3>
              <form
                onSubmit={handleSubmit}
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
              >
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0"></div>
                  <div className="md:ml-2"></div>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={inputValue.email}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="******************"
                    value={inputValue.password}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="max-w-xl px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                    onClick={() => navigate("/signup")}
                  >
                    Doesn't have an account yet? Signup now!
                  </a>
                  <br />
                  <br />
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );

  // const Logout = () => {
  //   // console.log(cookies);
  //   toast.success("msg", {
  //     position: "top-right",
  //   });
  //   removeCookie("token");
  //   window.location.reload();
  // };

  const loginForm = <div></div>;

  // LATEST LOGIC BELOW HERE \/ \/ \/ \/ //

  // const signupButton = (
  //   <button
  //     onClick={() => navigate("/signup")}
  //     classNameNameNameName="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
  //   >
  //     Signup
  //   </button>
  // );

  // const logoutButton = (
  //   <button
  //     onClick={Logout}
  //     classNameNameNameName="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
  //   >
  //     Logout
  //   </button>
  // );
  // console.log(cookies.token === "undefined");

  // return (
  //   <>
  //     {cookies.token === undefined ||
  //     cookies.token === null ||
  //     cookies.token === "undefined" ? (
  //       <>{loginModal}</>
  //     ) : (
  //       <>
  //         {logoutButton} {signupButton}
  //       </>
  //     )}
  //   </>
  // );
};

export default LoginForm;
