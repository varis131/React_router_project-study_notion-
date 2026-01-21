import React from "react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [FormData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  function changeHandler(event) {
    const { name, value, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function submitHandler(event) {
      event.preventDefault();
      if(FormData.password !== FormData.confirmPassword){
          toast.error("Passwords do not match");
          return;
      }
      setIsLoggedIn(true);
      toast.success("Signed up successfully");
      navigate("/dashboard");
    }



  return (
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        {/* thid div contains firstname and lastname*/}
        <div>
          <label>
            <p>
              First Name<sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="firstname"
              placeholder="enter first name"
              value={FormData.firstname}
              onChange={changeHandler}
            />
          </label>
          <label>
            <p>
              Last Name<sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="lastname"
              placeholder="enter last name"
              value={FormData.lastname}
              onChange={changeHandler}
            />
          </label>
        </div>
        
         {/* Email*/}
        <label>
          <p>
            Email Address<sup>*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            value={FormData.email}
            placeholder="enter your email id"
            onChange={changeHandler}
          />
        </label>

        {/* thid div contains password and confirm password*/}
        <div>
          <label>
            <p>
              Password<sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={FormData.password}
              placeholder="enter password"
              onChange={changeHandler}
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
          <label>
            <p>
              Confirm Password<sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={FormData.confirmPassword}
              placeholder="confirm password"
              onChange={changeHandler}
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>

        <button>Create Account</button>
      </form>
    </div>
  );
};

export default SignUpForm;
