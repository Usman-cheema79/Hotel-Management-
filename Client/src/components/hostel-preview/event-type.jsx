import React, { useContext } from 'react';
import { HotelContext } from '../../context/HotelContext';

const defaultEventTypes = [
    "Company Retreats", "Training Programs", "Family Reunions", "Group Getaways",
    "Educational Camps or Workshops", "Corporate Off-sites", "Executive Meetings",
    "Destination Weddings", "Wellness Retreats", "Special Events or Celebrations"
];

const EventType = () => {
    const { formData } = useContext(HotelContext);
    const eventTypes = formData?.hotelProfile?.overview?.basicDetails?.additionalDetails?.selectedTags?.types || defaultEventTypes;

    return (
        <div className="py-5 lg:w-3/4 w-full flex flex-wrap gap-5 px-5 border-t mx-auto">
            <h2 className="text-3xl font-bold mb-4 w-full lg:w-1/5">Event Type</h2>
            <div className="flex flex-wrap gap-4 w-full lg:w-4/5">
                {eventTypes.map((type, index) => (
                    <span 
                        key={index} 
                        className="px-4 py-2 border rounded-full bg-lightGray cursor-pointer hover:bg-gray-200"
                    >
                        {type}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default EventType;
