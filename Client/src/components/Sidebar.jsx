import React from 'react';
import logo from '../assets/pics/logoMain.svg';
import DashboardIcon from "../assets/pics/DashboardIcon.svg";
import CrownIcon from "../assets/pics/CrownIcon.svg";
import TeamIcon from "../assets/pics/TeamIcon.svg";
import descriptionIcon from "../assets/pics/descriptionIcon.svg";
import { Link } from 'react-router-dom';

const Sidebar = (props) => {

  return (
    <div className={`min-h-screen  top-0 left-0 pl-8 h-full w-full bg-gray-50 border-r shadow-md`}>
      <div style={{ marginLeft: "-85px" }} className="p-4 hidden lg:flex items-center justify-center">
        <img src={logo} alt="Logo" className="h-15" />
      </div>
      <nav className="mt-10 lg:mt-4">
        <ul className="space-y-2">
          <li>
            <Link to="/" style={{ backgroundColor: props.colour.backgroundcolour, marginRight: "7px", borderRadius: "9px" }} className="flex items-center p-2 text-gray-700 hover:bg-primary8 hover:text-primary hover:rounded-lg">
              <img src={DashboardIcon} alt="Dashboard" className="h-6 w-6" />
              <span className="ml-3" style={{ color: props.colour.colour }}>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="" className="flex items-center p-2 text-gray-700 hover:bg-primary8 hover:text-primary hover:rounded-lg mr-2">
              <img src={CrownIcon} alt="Enquiry" className="h-6 w-6" />
              <span className="ml-3" style={{ color: "#B0B0B0" }}>Enquiry</span>
            </Link>
          </li>
          <li>
            <Link to="" className="flex items-center p-2 text-gray-700 hover:bg-primary8 hover:text-primary hover:rounded-lg mr-2">
              <img src={TeamIcon} alt="My Team" className="h-6 w-6" />
              <span className="ml-3" style={{ color: "#B0B0B0" }}>My Team</span>
            </Link>
          </li>
          <li>
            <Link to="" className="flex items-center p-2 text-gray-700 hover:bg-primary8 hover:text-primary hover:rounded-lg mr-2">
              <img src={descriptionIcon} alt="My Venues" className="h-6 w-6" />
              <span className="ml-3" style={{ color: "#B0B0B0" }}>My Venues</span>
            </Link>
          </li>
          <li>
            <Link to="" className="flex items-center p-2 text-gray-700 hover:bg-primary8 hover:text-primary hover:rounded-lg mr-2">
              <img src={CrownIcon} alt="My Subscription" className="h-6 w-6" />
              <span className="ml-3" style={{ color: "#B0B0B0" }}>My Subscription</span>
            </Link>
          </li>
          <li>
            <Link to="" className="flex items-center p-2 text-gray-700 hover:bg-primary8 hover:text-primary hover:rounded-lg mr-2">
              <img src={descriptionIcon} alt="Reports" className="h-6 w-6" />
              <span className="ml-3" style={{ color: "#B0B0B0" }}>Reports</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
