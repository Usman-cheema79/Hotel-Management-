/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Graph from './Graph';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import subscribebtn from "../../../assets/pics/Label.svg";
import calander from "../../../assets/pics/calander.svg";
import DashboardLayout from "../../../layout/dashboard-layout"
const DashboardVenueProfile = () => {

  const venues = [
    { id: 1, name: 'Venue 1' },
    { id: 2, name: 'Venue 2' },
    { id: 3, name: 'Venue 3' },
    // Add more dummy venues as needed
  ];

  const [startDate, setStartDate] = useState('1st May 2024');
  const [endDate, setEndDate] = useState('30th May 2024');


  return (
    <DashboardLayout>
      <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-xl md:text-3xl font-bold flex items-center">
              Hello Kushal,
              <span style={{ cursor: "pointer", marginLeft: "7px" }} ><img src={subscribebtn} alt="" /></span>
            </h1>
            <p className="text-gray-500 text-l mt-2">Check out how your venue is doing</p>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-4">
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center bg-white h-10 border border-black w-48 rounded-lg py-2 px-4">
                All venues
                <ChevronDownIcon className="w-5 h-5 ml-16" />
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                {venues.map((venue) => (
                  <Menu.Item key={venue.id}>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 ${active ? 'bg-gray-100' : ''}`}
                      >
                        {venue.name}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Menu>
            <div className="relative">
              <div className="flex text-sm items-center border border-black h-10 rounded-lg px-2">
                {startDate} - {endDate}
                <span className="ml-2 text-lg cursor-pointer"><img src={calander} alt="" /></span>
              </div>
            </div>

          </div>
        </header>
        <div className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-10">
          <div className="bg-white shadow-md rounded p-4 md:col-span-6">
            <h2 className="text-xl font-semibold">800 Total Enquiries</h2>
            <p className="mb-7 text-gray-500">No. of enquiries received on a venue</p>
            <Graph />
          </div>
          <div className="bg-white  shadow-md rounded p-4 md:col-span-4">
            <h2 className="text-xl font-semibold">Enquire status</h2>
            <div className="flex flex-col justify-around mt-4">
              <div className='flex flex-row'>
                <div className="text-center m-10">
                  <div className="bg-[#7b79ff] text-white rounded-full h-24 w-24 flex flex-col items-center justify-center"> <p>250</p>  <h1 className='font-bold'>Successful</h1></div>
                </div>
                <div style={{ marginLeft: "-45px" }} className="text-center">
                  <div className="bg-[#f6ba49] text-white rounded-full h-40 w-40 flex flex-col items-center justify-center"><p>400</p> <h1 className='font-bold'>Active</h1></div>
                </div>
              </div>
              <div className='flex flex-row ml-10'>
                <div style={{ marginTop: "-45px" }} className="text-center">
                  <div className="bg-[#27c2b0] text-white rounded-full h-24 w-24 flex flex-col items-center justify-center"> <p>200 </p><h1 className='font-bold'>New</h1> </div>
                </div>
                <div className="text-center">
                  <div className="bg-[#7b79ff] text-white rounded-full h-16 w-16 flex flex-col items-center justify-center"> <p>20</p> <h1 className='font-bold'>Lost</h1></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded p-4 mt-8">
          <h2 className="text-xl font-semibold">Performance funnel</h2>
          <p className="text-gray-500">Response time from your team</p>
          {/* Add the Performance funnel graph or content here */}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardVenueProfile;

