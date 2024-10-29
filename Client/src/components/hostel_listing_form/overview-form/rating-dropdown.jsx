import React, { useState, useContext } from 'react';
import { BiSolidDownArrow } from 'react-icons/bi';
import { HotelContext } from '../../../context/HotelContext';

const ratings = [
    { value: '', label: 'Not applicable' },
    { value: '1', label: '1 star', stars: 1 },
    { value: '2', label: '2 stars', stars: 2 },
    { value: '3', label: '3 stars', stars: 3 },
    { value: '4', label: '4 stars', stars: 4 },
    { value: '5', label: '5 stars', stars: 5 },
];

const RatingDropdown = ({ label }) => {
    const { formData, setFormData } = useContext(HotelContext);
    const [isOpen, setIsOpen] = useState(false);

    const currentRating = formData.overview.basicDetails.hotelRating || '';

    const handleSelect = (value) => {
        setFormData((prevData) => ({
            ...prevData,
            overview: {
                ...prevData.overview,
                basicDetails: {
                    ...prevData.overview.basicDetails,
                    hotelRating: value,
                },
            },
        }));
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block w-full">
            <label className="block text-secondary text-sm font-medium mb-2">
                {label}
            </label>
            <button
                type="button"
                className="w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="block truncate">
                    {ratings.find((rating) => rating.value === currentRating)?.label || 'Select an option'}
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <BiSolidDownArrow />
                </span>
            </button>

            {isOpen && (
                <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    {ratings.map((rating) => (
                        <li
                            key={rating.value}
                            className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-100"
                            onClick={() => handleSelect(rating.value)}
                        >
                            <div className="flex items-center">
                                <span className="ml-3 block truncate">{rating.label}</span>
                                {rating.stars && (
                                    <span className="ml-3 flex items-center">
                                        {[...Array(rating.stars)].map((_, index) => (
                                            <svg
                                                key={index}
                                                className="h-4 w-4 text-yellow-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.371 2.452a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.37 2.452c-.786.57-1.842-.197-1.541-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.64 8.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                                            </svg>
                                        ))}
                                    </span>
                                )}
                            </div>
                            {rating.value === currentRating && (
                                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RatingDropdown;
