import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const DashboardLayout = ({ children }) => {
  const colour = { colour: "#FE4747", backgroundcolour: "#FF6B6B29" };
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  return (
    <div className="flex w-full">
      <div className={`min-h-full   border-r ${isSidebarOpen ? "block absolute left-0 top-20 md:top-0 md:relative w-full lg:w-[15%]" : "hidden absolute left-0 top-20 md:relative w-full lg:w-[15%]"}`}>
        <Sidebar colour={colour} />
      </div>
      <div className={`w-full md:w-[85%] h-screen overflow-y-auto bg-[#F3F3F3] ${isSidebarOpen ? '' : 'ml-0'}`}>
        <Navbar toggleSidebar={toggleSidebar} />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
