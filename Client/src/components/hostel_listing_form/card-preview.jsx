import React from 'react';
import { FaHeart, FaEye, FaBed, FaHotel, FaInfoCircle } from 'react-icons/fa';
import preview from '../../assets/pics/previe.svg'
import { Link } from 'react-router-dom';

const CardPreview = () => {
    return (
        <div className="bg-white  rounded-lg  w-full max-w-md ">
            <h2 className="text-3xl font-bold mb-6">Card Preview</h2>
            <div className="rounded-lg overflow-hidden shadow-lg mb-4">
                <div className="relative">
                    <img
                        src={preview}
                        alt="The Palm"
                        className="w-full h-60 object-cover"
                    />
                    <button className="absolute top-2 right-2 text-red-500 bg-white rounded-full p-1 shadow">
                        <FaHeart size={20} />
                    </button>
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-semibold">The Palm</h3>
                    <p className="text-gray-600">Downtown, Dubai</p>
                    <div className="flex items-center text-gray-600 my-2">
                        <FaBed className="mr-1" />
                        <span className="mr-3">350 Rooms</span>
                        <FaHotel className="mr-1" />
                        <span>5 venues</span>
                    </div>
                    <p className="text-red-500 font-semibold">AED 105</p>
                    <p className="text-sm text-gray-500">Starting price per room per night</p>
                </div>
            </div>
            <div className="text-sm text-gray-500 flex items-center mb-4">
                <FaInfoCircle className="mr-2" />
                Your venues currently show as zero. Once you add venues, this will be updated.
            </div>
            <Link to='/hotel-preview' className="bg-black  text-white px-4 py-2 rounded-lg flex items-center">
                <FaEye className="mr-2" />
                Preview detail page
            </Link>
        </div>
    );
};

export default CardPreview;
