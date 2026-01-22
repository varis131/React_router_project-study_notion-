import React from "react";
import Signup from "../pages/Signup";
import frame from "../assets/frame.png";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";
import { FcGoogle } from "react-icons/fc";

const Template = ({
  title,
  desc1,
  desc2,
  formtype,
  setIsLoggedIn,
  image,
}) => {
  return (
    <div className=" bg-gray-950 flex items-center justify-center px-6 min-h-screen ">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT: FORM SECTION */}
        <div className="bg-gray-900 rounded-2xl p-8 shadow-xl">
          <h1 className="text-3xl font-semibold text-white mb-2">
            {title}
          </h1>

          <p className="text-gray-400 mb-6">
            <span>{desc1}</span>
            <br />
            <span>{desc2}</span>
          </p>

          {formtype === "login" ? (
            <LogInForm setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <SignUpForm setIsLoggedIn={setIsLoggedIn} />
          )}

          {/* OR Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="h-px flex-1 bg-gray-700" />
            <p className="text-gray-400 text-sm">OR</p>
            <div className="h-px flex-1 bg-gray-700" />
          </div>

          {/* Google Button */}
          <button className=" flex items-center justify-center gap-2 w-full border
           border-gray-700
            text-gray-200
             py-2 rounded-lg
             hover:bg-gray-800 transition cursor-pointer">
               <FcGoogle className="text-xl" />
             Sign in with Google 
          </button>
        </div>

        {/* RIGHT: IMAGE SECTION */}
        <div className="relative hidden lg:flex justify-center items-center">

          {/* Grid Pattern */}
          <img
            src={frame}
            alt="pattern"
            className="absolute top-6 left-6 w-[420px] opacity-30"
          />

          {/* Main Image */}
          <img
            src={image}
            alt="students"
            className="relative w-[420px] rounded-xl shadow-2xl translate-x-6 -translate-y-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Template;
