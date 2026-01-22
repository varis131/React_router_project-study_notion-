import React from "react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");

  const [FormData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    if (FormData.password !== FormData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Signed up successfully 🎉");
    navigate("/dashboard");
  }

  return (
    <div className="flex flex-col gap-6 ">
      {/* ACCOUNT TYPE */}
      <div className="flex rounded-lg bg-gray-800 p-1">
        {["student", "instructor"].map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setAccountType(type)}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition cursor-pointer
              ${
                accountType === type
                  ? "bg-gray-900 text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
          >
            {type === "student" ? "Student" : "Instructor"}
          </button>
        ))}
      </div>

      <form onSubmit={submitHandler} className="flex flex-col gap-5">
        {/* FIRST + LAST NAME */}
        <div className="grid grid-cols-2 gap-4">
          <label className="flex flex-col gap-2">
            <p className="text-sm text-gray-300">
              First Name<sup className="text-red-400">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstname"
              placeholder="First name"
              value={FormData.firstname}
              onChange={changeHandler}
              className="rounded-lg bg-gray-800 border border-gray-700 px-4 py-2.5 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>

          <label className="flex flex-col gap-2">
            <p className="text-sm text-gray-300">
              Last Name<sup className="text-red-400">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastname"
              placeholder="Last name"
              value={FormData.lastname}
              onChange={changeHandler}
              className="rounded-lg bg-gray-800 border border-gray-700 px-4 py-2.5 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>
        </div>

        {/* EMAIL */}
        <label className="flex flex-col gap-2">
          <p className="text-sm text-gray-300">
            Email Address<sup className="text-red-400">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            placeholder="Enter your email"
            value={FormData.email}
            onChange={changeHandler}
            className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-2.5 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </label>

        {/* PASSWORD + CONFIRM PASSWORD */}
        <div className="grid grid-cols-2 gap-4">
          <label className="flex flex-col gap-2 relative">
            <p className="text-sm text-gray-300">
              Password<sup className="text-red-400">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={FormData.password}
              onChange={changeHandler}
              className="rounded-lg bg-gray-800 border border-gray-700 px-4 py-2.5 pr-12 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>

          <label className="flex flex-col gap-2 relative">
            <p className="text-sm text-gray-300">
              Confirm Password<sup className="text-red-400">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm password"
              value={FormData.confirmPassword}
              onChange={changeHandler}
              className="rounded-lg bg-gray-800 border border-gray-700 px-4 py-2.5 pr-12 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>

          {/* EYE ICON (shared) */}
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="col-span-2 text-right text-sm text-indigo-400 cursor-pointer hover:text-indigo-300"
          >
            {showPassword ? "Hide passwords" : "Show passwords"}
          </span>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="mt-2 rounded-lg bg-indigo-600 py-2.5 text-white font-medium hover:bg-indigo-700 transition cursor-pointer"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
