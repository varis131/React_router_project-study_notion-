import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const LogInForm = ({ setIsLoggedIn}) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [FormData, setFormData] = useState({
    email: "",
    password: "",
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
    setIsLoggedIn(true);
    toast.success("Logged in successfully");
    navigate("/dashboard");
  }

  return (
    <form onSubmit={submitHandler}>
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
        <Link to={"#"}>
          <p>forgot password</p>
        </Link>
      </label>
      <button>Sign In</button>
    </form>
  );
};

export default LogInForm;
