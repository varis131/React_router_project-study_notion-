import React from "react";
import Signup from "../pages/Signup";
import frame from "../assets/frame.png";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";

const Template = ({ title, desc1, desc2, formtype, setIsLoggedIn, image }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>
        {formtype === "login" ? <LogInForm setIsLoggedIn={setIsLoggedIn} /> 
        : <SignUpForm setIsLoggedIn={setIsLoggedIn} />}

        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>

        <button>
          <p>Sign in with Google</p>
        </button>

        <div>
          <img
            src={frame}
            alt="pattern"
            width={558}
            height={504}
            loading="lazy"
          />

          <img
            src={image}
            alt="Students"
            width={558}
            height={490}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
export default Template;
