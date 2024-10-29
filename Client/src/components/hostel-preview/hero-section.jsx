/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import h1 from '../../assets/pics/h1.svg'
import h2 from '../../assets/pics/h2.svg'
import h3 from '../../assets/pics/h3.svg'
import { FaArrowLeft } from 'react-icons/fa';
const HeroSection = () => {
    return (
        <div className="p-6">
            <div className="flex flex-wrap justify-between gap-5 items-center w-full">
                <div className="mb-6 flex items-center text-gray-600 cursor-pointer">
                    <FaArrowLeft className="mr-2" />
                    <span>Back</span>
                </div>

                <div className='flex gap-3 items-center pb-5'>
                    <button className="bg-black text-white px-4 py-2 rounded-lg mr-2">Submit for review</button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center"><AiOutlineEdit className="mr-2" /> Edit</button>
                </div>
            </div>
            <div className="flex justify-between flex-wrap gap-5 lg:gap-0 mb-4">
                <div className="relative lg:w-1/2 w-full">
                    <img src={h1} alt="Main Image" className="rounded-lg w-full h-[500px] object-cover" />
                </div>
                <div className="flex flex-col justify-between lg:w-[47%] w-full ">
                    <img src={h2} alt="Image 2" className="rounded-lg mb-4 h-[250px] object-cover" />
                    <div className="flex  justify-between gap-5 flex-wrap ">
                        <img src={h3} alt="Image 3" className="rounded-lg  mb-4 h-[250px] w-[45%]  object-cover" />
                        <div className=" inset-0 h-[250px] w-[47%]  bg-black bg-opacity-50 flex items-center justify-center rounded-lg text-white">
                            <span>Show all photos</span>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default HeroSection;
