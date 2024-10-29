import React, { useState, useContext, useEffect } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import CustomCheckbox from '../../shared/common/checkBox';
import FileUpload from './fileUpload';
import { HotelContext } from '../../../context/HotelContext';

const eventTypes = [
    { id: 1, name: 'Company Retreats', description: 'Events where employees gather for team-building activities, workshops, and meetings. Seek venues that offer lodging, meeting rooms, dining facilities, and recreational amenities.' },
    { id: 2, name: 'Corporate Off-sites', description: 'Meetings or strategic planning sessions held off-site for focused discussions and activities. Prefer venues with conference rooms, accommodations, and catering services.' },
    { id: 3, name: 'Training Programs', description: 'Multi-day training sessions requiring accommodations for participants. Look for venues with classrooms, training facilities, and lodging options.' },
    { id: 4, name: 'Executive Meetings', description: 'High-level meetings or board retreats requiring privacy and exclusive amenities. Seek venues with executive suites, private dining areas, and advanced AV technology.' },
    { id: 5, name: 'Family Reunions', description: 'Gatherings where families stay together and host events such as dinners, parties, or ceremonies. Prefer venues with vacation rentals, communal spaces, and outdoor activities.' },
    { id: 6, name: 'Destination Weddings', description: 'Weddings held at venues that offer both ceremony and reception spaces along with guest accommodations. Look for venues with event spaces, wedding packages, and guest amenities.' },
    { id: 7, name: 'Group Getaways', description: 'Trips organized for groups of friends or colleagues looking for a combination of lodging and event spaces. Seek venues with shared accommodations, group dining options, and recreational activities.' },
    { id: 8, name: 'Wellness Retreats', description: 'Retreats focused on health and wellness activities such as yoga, meditation, and spa treatments. Prefer venues with wellness facilities, healthy dining options, and tranquil surroundings.' },
    { id: 9, name: 'Educational Camps or Workshops', description: 'Residential programs for educational purposes such as arts camps or academic workshops. Look for venues with dormitory-style accommodations and classroom facilities.' },
    { id: 10, name: 'Special Events or Celebrations', description: 'Milestone events like anniversaries, birthdays, or reunions that require overnight stays and event spaces. Seek venues with event management services, customizable packages, and entertainment options.' }
];

const AdditionalDetailsForm = () => {
    const { formData, setFormData } = useContext(HotelContext);
    const [selectedEventTypes, setSelectedEventTypes] = useState([]);
    const [isSustainable, setIsSustainable] = useState(false);
    const [hotelBuiltYear, setHotelBuiltYear] = useState('');
    const [lastRenovatedYear, setLastRenovatedYear] = useState('');
    const [awards, setAwards] = useState([{ name: '', year: '' }]);

    useEffect(() => {
        if (formData.overview?.additionalDetails) {
            setSelectedEventTypes(formData.overview.additionalDetails.selectedEventTypes || []);
            setIsSustainable(formData.overview.additionalDetails.isSustainable || false);
            setHotelBuiltYear(formData.overview.additionalDetails.hotelBuiltYear || '');
            setLastRenovatedYear(formData.overview.additionalDetails.lastRenovatedYear || '');
            setAwards(formData.overview.additionalDetails.awards || [{ name: '', year: '' }]);
        }
    }, [formData]);

    const handleEventTypeClick = (id) => {
        setSelectedEventTypes((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter((eventId) => eventId !== id)
                : [...prevSelected, id]
        );
    };

    const handleAwardChange = (index, field, value) => {
        const newAwards = [...awards];
        newAwards[index][field] = value;
        setAwards(newAwards);
    };

    const handleAddAward = () => {
        setAwards([...awards, { name: '', year: '' }]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Update the additionalDetails section in formData
        setFormData({
            ...formData,
            overview: {
                ...formData.overview,
                additionalDetails: {
                    isSustainable,
                    hotelBuiltYear,
                    lastRenovatedYear,
                    selectedEventTypes,
                    awards
                }
            }
        });

        console.log('Additional Details Updated:', {
            isSustainable,
            hotelBuiltYear,
            lastRenovatedYear,
            selectedEventTypes,
            awards
        });
    };

    return (
        <div className="p-6 bg-white rounded-lg ">
            <h2 className="text-2xl font-semibold mb-4">Additional Details</h2>
            <form className="w-full flex flex-wrap gap-4 justify-between mx-auto" onSubmit={handleSubmit}>
                {/* Sustainability Checkbox */}
                <div className="w-full mb-4">
                    <label className="text-gray-700 font-medium mr-4">Is the hotel sustainable?</label>
                    <input
                        type="checkbox"
                        checked={isSustainable}
                        onChange={() => setIsSustainable(!isSustainable)}
                        className="toggle-checkbox"
                    />
                </div>

                {/* Hotel Built Year */}
                <div className="lg:w-[47%] w-full mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Hotel Built Year</label>
                    <div className="relative">
                        <FaRegCalendarAlt className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="date"
                            value={hotelBuiltYear}
                            onChange={(e) => setHotelBuiltYear(e.target.value)}
                            className="w-full py-2 pl-10 pr-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Last Renovated Year */}
                <div className="lg:w-[47%] w-full mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Hotel Last Renovated Year (if applicable)</label>
                    <div className="relative">
                        <FaRegCalendarAlt className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="date"
                            value={lastRenovatedYear}
                            onChange={(e) => setLastRenovatedYear(e.target.value)}
                            className="w-full py-2 pl-10 pr-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Event Types */}
                <div className="w-full mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Event Type</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {eventTypes.map((event) => (
                            <div
                                key={event.id}
                                className={`p-4 flex gap-3 items-start border rounded-lg cursor-pointer ${selectedEventTypes.includes(event.id) ? 'border-green1' : 'border-gray-300'}`}
                                onClick={() => handleEventTypeClick(event.id)}
                            >
                                <div className="mt-2">
                                    <CustomCheckbox
                                        checked={selectedEventTypes.includes(event.id)}
                                        onChange={() => handleEventTypeClick(event.id)}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">{event.name}</h3>
                                    <p className="text-gray-600">{event.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hotel Awards */}
                <div className="w-full mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Hotel Awards (Optional)</label>
                    {awards.map((award, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <input
                                type="text"
                                placeholder="Award name"
                                value={award.name}
                                onChange={(e) => handleAwardChange(index, 'name', e.target.value)}
                                className="mr-2 flex-grow py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                            <input
                                type="text"
                                placeholder="Award year"
                                value={award.year}
                                onChange={(e) => handleAwardChange(index, 'year', e.target.value)}
                                className="mr-2 flex-grow py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={handleAddAward}
                        className="text-primary hover:underline"
                    >
                        Add More Awards
                    </button>
                </div>

                {/* File Upload */}
                <div className="flex w-full">
                    <FileUpload />
                </div>
            </form>
        </div>
    );
};

export default AdditionalDetailsForm;
