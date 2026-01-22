import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LogInForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [FormData, setFormData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged in successfully");
    navigate("/dashboard");
  }

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-5">
      {/* EMAIL */}
      <label className="flex flex-col gap-2">
        <p className="text-sm text-gray-300">
          Email Address<sup className="text-red-400">*</sup>
        </p>
        <input
          required
          type="email"
          name="email"
          value={FormData.email}
          placeholder="Enter your email"
          onChange={changeHandler}
          className="w-full rounded-lg bg-gray-800 border
           border-gray-700 px-4 py-2.5
            text-gray-100
             placeholder-gray-500 focus:outline-none focus:ring-2
              focus:ring-indigo-500"
        />
      </label>

      {/* PASSWORD */}
      <label className="flex flex-col gap-2 relative">
        <p className="text-sm text-gray-300">
          Password<sup className="text-red-400">*</sup>
        </p>

        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={FormData.password}
          placeholder="Enter password"
          onChange={changeHandler}
          className="w-full rounded-lg bg-gray-800 border
           border-gray-700 px-4 py-2.5 pr-12 text-gray-100
            placeholder-gray-500 focus:outline-none focus:ring-2
             focus:ring-indigo-500"
        />

        {/* Eye Icon */}
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-4 top-9 cursor-pointer
           text-gray-400
            hover:text-gray-200
            mt-2"
        >
          {showPassword ? <AiOutlineEye /> :<AiOutlineEyeInvisible /> }
        </span>

        <Link
          to="#"
          className="text-xs text-indigo-400
           hover:text-indigo-300 self-end"
        >
          Forgot password?
        </Link>
      </label>

      {/* SUBMIT */}
      <button
        type="submit"
        className="mt-2 rounded-lg bg-indigo-600 py-2.5
         text-white font-medium
          hover:bg-indigo-700 transition"
      >
        Sign In
      </button>
    </form>
  );
};

export default LogInForm;
