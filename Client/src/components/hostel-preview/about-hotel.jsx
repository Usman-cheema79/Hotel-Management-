import React, { useContext, useState } from 'react';
import { FaTrophy } from 'react-icons/fa';
import { HotelContext } from '../../context/HotelContext';

const defaultAwards = [
    { year: '2016', title: 'Best Hotel Awards Winner' },
    { year: '2017', title: 'Best Hotel Awards Winner' },
    { year: '2018', title: 'Best Hotel Awards Winner' },
    { year: '2019', title: 'Best Hotel Awards Winner' },
];

const AboutThisHotel = () => {
    const { formData } = useContext(HotelContext);
    const awards = formData?.overview?.additionalDetails?.awards || defaultAwards;
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="py-5 lg:w-3/4 w-full border-t px-5 mx-auto">

            <div className="bg-white p-6 rounded-lg mb-8">
                <h2 className="text-3xl font-bold mb-4">About This Hotel</h2>
                <p className={`text-gray-700 mb-4 ${showMore ? '' : 'line-clamp-3'}`}>
                    Come and stay in this superb duplex T2, in the heart of the historic center of Bordeaux. Spacious and bright, in a real Bordeaux building in exposed stone, you will enjoy all the charms of the city thanks to its ideal location. Close to many shops, bars and restaurants, you can access the apartment by tram A and C and bus routes 27 and 44.
                </p>
                <button 
                    onClick={() => setShowMore(!showMore)} 
                    className="text-primary font-medium"
                >
                    {showMore ? 'Show Less' : 'Show More'}
                </button>
            </div>

            <div className="bg-white p-6 rounded-lg border-t flex flex-wrap gap-5 items-start mb-8">
                <h2 className="text-3xl font-bold mb-4 lg:w-1/5 w-full">Awards</h2>
                <ul className="space-y-2 lg:w-4/5 w-full">
                    {awards.map((award, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                            <FaTrophy className="text-2xl mr-2" />
                            <span>
                                <strong>{award.year}</strong> {award.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AboutThisHotel;
