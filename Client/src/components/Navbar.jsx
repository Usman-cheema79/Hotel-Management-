// Navbar.js
import React, { useState, useContext, useEffect } from "react";
import bell from "../assets/pics/notifications.svg";
import profile from "../assets/pics/profile.svg";
import chevron_down from "../assets/pics/chevron_down.svg";
import icons from "../assets/pics/icons.svg";
import { HotelContext } from "../context/HotelContext";
import { Cookies } from "react-cookie";
import { useAuth } from "../hooks/auth";
import { useNavigate } from "react-router-dom";
import logo from '../assets/pics/logoMain.svg';
import { Link } from 'react-router-dom'; // Ensure you have the correct path to Link if using React Router

const Navbar = ({toggleSidebar}) => {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(HotelContext);
  const user = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (user && user.userId) {
      setFormData((prevFormData) => ({
        ...prevFormData,
          userId: user.userId,
      }));
    }
  }, [setFormData]);

  const handleLogin = () => {
    navigate("/Login-Page");
  };

  const handleLogout = () => {
    const cookies = new Cookies();
    cookies.remove("token", { path: "/" }); // Remove the token from cookies
    navigate("/");
  };



  return (
    <div className="flex items-center justify-between bg-white p-6 shadow-md">
      {/* Sidebar Toggle Button (Visible only on mobile) */}
      <div className="lg:hidden flex gap-2 items-center ">
        <button
          onClick={toggleSidebar}
          className=" text-primary"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <Link to="/" className="flex items-center p-2  hover:rounded-lg">
          <img src={logo} alt="Dashboard" className="w-16" />
        </Link>
      </div>


      {/* Search Bar */}
      <div className="relative lg:block hidden w-full max-w-md">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-4 pr-10 py-2 border rounded-full focus:outline-none"
        />
        <div className="absolute inset-y-0 right-2 flex items-center pr-3 pointer-events-none">
          <img src={icons} alt="Search Icon" className="h-5 w-5" />
        </div>
      </div>

      {/* Right-side Icons */}
      <div className="flex items-center space-x-4 pr-4">
        <div className="relative">
          <span className="absolute right-0 bottom-0 h-2 w-2 bg-red-600 rounded-full"></span>
          {/* <Link to={"/user-Profile"}> */}
          <img src={bell} alt="Notifications" className="h-6 w-6" />
          {/* </Link> */}
        </div>
        <Link to={"/user-Profile"}>
        <div className="flex items-center space-x-2">
          <img src={profile} alt="User" className="h-8 w-8 rounded-full" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Jane Aly</span>
            <span className="text-xs text-gray-500">Admin</span>
          
          </div>
        </div>
        </Link>

        <div>
          <img
            src={chevron_down}
            alt="Dropdown"
            className="h-5 w-5 cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-white border rounded shadow-lg">
              {user ? (
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                  onClick={handleLogin}
                >
                  Login
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
