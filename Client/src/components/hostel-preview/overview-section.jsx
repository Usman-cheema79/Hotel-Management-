/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { FaStar, FaMapMarkerAlt, FaHome, FaBed, FaHotel, FaLeaf } from 'react-icons/fa';

const OverviewSection = () => {
    const overviewDetails = [
        {
            icon: <FaHome className="text-3xl  mb-2" />,
            label: "Starts From",
            value: "700 AED per Night",
        },
        {
            icon: <FaBed className="text-3xl mb-2" />,
            label: "Rooms",
            value: "50",
        },
        {
            icon: <FaHotel className="text-3xl  mb-2" />,
            label: "Venues",
            value: "15",
        },
        {
            icon: <FaLeaf className="text-3xl mb-2" />,
            label: "Sustainable",
            value: "Hotel",
        },
    ]
    return (
        <>
            <div className="lg:w-3/4 w-full px-5 mx-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-3xl font-bold flex gap-4 items-center ">The Palm <span className="flex gap-2 items-center text-sm text-[#F2C200]"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span></h2>

                </div>
                <div className="text-gray-600 mb-4">
                    <FaMapMarkerAlt className="inline mr-2" /> Downtown, Dubai | Resort Hotel | Luxury Suit | <a href="#" className="text-blue-500">Show on map</a>
                </div>
                <h3 className="text-2xl font-bold py-4">Overview</h3>

                <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mb-4">
                    {overviewDetails.map((detail, index) => (
                        <div key={index} className="flex flex-col w-full text-black items-center bg-[#F7F7F7] p-4 rounded-lg shadow-md ">
                            {detail.icon}
                            <p>{detail.label}</p>
                            <p className="text-lg font-semibold">{detail.value}</p>
                        </div>
                    ))}
                </div>


                <h3 className="text-2xl font-bold mb-4">Highlights</h3>
                <div className="flex justify-between p-2 rounded-lg bg-[#FFEBEB]">
                    <div className=" p-4 rounded-lg  w-1/2 mr-2">
                        <h4 className="font-semibold mb-2">View</h4>
                        <p>Creek, Forest, Vineyard, Cityscape, Countryside</p>
                    </div>
                    <div className=" p-4 border-l pl-5  w-1/2 ml-2">
                        <h4 className="font-semibold mb-2">Style</h4>
                        <p>Spanish, Bohemian, Vietnamese Colonial, Malaysian Malay, Indonesian Javanese</p>
                    </div>
                </div>

                <div className="flex justify-between mt-5 p-2 rounded-lg bg-[#FFEBEB]">
                    <div className=" p-4 rounded-lg  w-1/3 mr-2">
                        <h4 className="font-semibold mb-2">View</h4>
                        <p>Creek, Forest, Vineyard, Cityscape, Countryside</p>
                    </div>
                    <div className=" p-4 border-l pl-5  w-1/3 ml-2">
                        <h4 className="font-semibold mb-2">Style</h4>
                        <p>Spanish, Bohemian, Vietnamese Colonial, Malaysian Malay, Indonesian Javanese</p>
                    </div>
                    <div className=" p-4 border-l pl-5 w-1/3 ml-2">
                        <h4 className="font-semibold mb-2">Style</h4>
                        <p>Spanish, Bohemian, Vietnamese Colonial, Malaysian Malay, Indonesian Javanese</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OverviewSection