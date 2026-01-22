import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { toast } from "react-toastify";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-gray-950 z-50">
      <div className="mx-auto flex justify-between items-center w-11/12 max-w-[1160px] h-full">
        
        {/* LOGO */}
        <Link to="/">
          <img src={Logo} alt="logo" width={160} height={32} loading="lazy" />
        </Link>

        {/* NAV LINKS */}
        <ul className="flex gap-x-7 text-gray-200">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Contacts</Link></li>
        </ul>

        {/* AUTH BUTTONS */}
        <div className="flex gap-x-4 items-center">
          {!isLoggedIn && (
            <Link to="/login">
              <button className="bg-gray-800 hover:bg-gray-700 transition text-white py-1 px-3 rounded-lg border border-gray-700 cursor-pointer">
                Log in
              </button>
            </Link>
          )}

          {!isLoggedIn && (
            <Link to="/signup">
              <button className="bg-gray-800 hover:bg-gray-700 transition text-white py-1 px-3 rounded-lg border border-gray-700 cursor-pointer">
                Sign up
              </button>
            </Link>
          )}

          {isLoggedIn && (
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged out successfully");
              }}
              className="bg-gray-800 hover:bg-gray-700 transition text-white py-1 px-3 rounded-lg border border-gray-700 cursor-pointer"
            >
              Log out
            </button>
          )}

          {isLoggedIn && (
            <Link to="/dashboard">
              <button className="bg-gray-800 hover:bg-gray-700 transition text-white py-1 px-3 rounded-lg border border-gray-700 cursor-pointer">
                Dashboard
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
