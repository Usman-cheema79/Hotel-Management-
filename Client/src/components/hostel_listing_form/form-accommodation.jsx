import React, { useContext } from 'react';
import { HotelContext } from '../../context/HotelContext';

const AccommodationForm = () => {
    const { formData, setFormData } = useContext(HotelContext);

    // Destructure and provide default values if formData or accommodation is undefined
    const accommodations = formData?.accommodation?.accommodations || 0;

    const handleInputChange = (e) => {
        const { value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            accommodation: {
                ...prevFormData.accommodation,
                accommodations: Number(value) // Convert value to a number
            }
        }));
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Accommodation</h2>
            <form className="w-full flex flex-wrap gap-4 justify-between mx-auto">
                <div className="w-full mb-4 border border-secondary rounded-2xl flex justify-between py-5 px-5">
                    <label className="block text-gray-700 font-medium mb-2">
                        How many Guest Rooms, Suites, Villas, Apartments, Penthouses can your Hotel accommodate?
                    </label>
                    <input
                        type="number"
                        name="accommodations" // Only one field
                        value={accommodations}
                        onChange={handleInputChange}
                        min="0"
                        placeholder="00"
                        className="w-1/5 py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                </div>
            </form>
        </div>
    );
};

export default AccommodationForm;
