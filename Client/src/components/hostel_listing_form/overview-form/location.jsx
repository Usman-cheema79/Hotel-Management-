import React, { useContext, useEffect, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import CustomCheckbox from '../../shared/common/checkBox';
import { HotelContext } from '../../../context/HotelContext';
import { Link } from 'react-router-dom';

const LocationForm = () => {
    const { formData, setFormData } = useContext(HotelContext);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        // Fetch countries from the restcountries API using fetch
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                const countryNames = data.map(country => ({
                    value: country.name.common,
                    label: country.name.common,
                })).sort((a, b) => a.label.localeCompare(b.label)); // Sort alphabetically
                setCountries(countryNames);
            })
            .catch(error => {
                console.error('Error fetching countries:', error);
            });
    }, []);

    // Destructure and provide default values if formData or locationDetails is undefined
    const locationDetails = formData?.overview?.locationDetails || {
        addressLine1: '',
        addressLine2: '',
        city: '',
        area: '',
        poBox: '',
        country: 'United Arab Emirates',
        mapLink: '',
        parkingAvailable: false,
        valetParking: false,
        accessibilityFeatures: {
            airportShuttle: false,
            metro: false,
            taxi: false,
            bus: false
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            overview: {
                ...prevFormData.overview,
                locationDetails: {
                    ...prevFormData.overview.locationDetails,
                    [name]: value
                }
            }
        }));
    };

    const handleFeatureChange = (feature) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            overview: {
                ...prevFormData.overview,
                locationDetails: {
                    ...prevFormData.overview.locationDetails,
                    accessibilityFeatures: {
                        ...prevFormData.overview.locationDetails.accessibilityFeatures,
                        [feature]: !prevFormData.overview.locationDetails.accessibilityFeatures[feature]
                    }
                }
            }
        }));
    };

    const handleCheckboxChange = (field) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            overview: {
                ...prevFormData.overview,
                locationDetails: {
                    ...prevFormData.overview.locationDetails,
                    [field]: !prevFormData.overview.locationDetails[field]
                }
            }
        }));
    };

    return (
        <div className="p-6 bg-white rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Location</h2>
            <form className="w-full flex flex-wrap gap-4 justify-between mx-auto">
                <div className="lg:w-[47%] w-full mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Address Line 1</label>
                    <input
                        type="text"
                        name="addressLine1"
                        value={locationDetails.addressLine1 || ''}
                        onChange={handleInputChange}
                        placeholder="House number and street name"
                        className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                </div>
                <div className="lg:w-[47%] w-full mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Address Line 2</label>
                    <input
                        type="text"
                        name="addressLine2"
                        value={locationDetails.addressLine2 || ''}
                        onChange={handleInputChange}
                        placeholder="Apartment number, suite number"
                        className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                </div>
                <div className="lg:w-[47%] w-full mb-4">
                    <label className="block text-gray-700 font-medium mb-2">City</label>
                    <select
                        name="city"
                        value={locationDetails.city || ''}
                        onChange={handleInputChange}
                        className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                        <option>Select city name</option>
                        {/* Add city options here */}
                    </select>
                </div>
                <div className="lg:w-[47%] w-full mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Area</label>
                    <select
                        name="area"
                        value={locationDetails.area || ''}
                        onChange={handleInputChange}
                        className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                        <option>Select area</option>
                        {/* Add area options here */}
                    </select>
                </div>
                <div className="lg:w-[47%] w-full mb-4">
                    <label className="block text-gray-700 font-medium mb-2">PO Box</label>
                    <input
                        type="text"
                        name="poBox"
                        value={locationDetails.poBox || ''}
                        onChange={handleInputChange}
                        placeholder="Enter PO Box"
                        className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                </div>
                <div className="lg:w-[47%] w-full mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Country</label>
                    <select
                        name="country"
                        value={locationDetails.country || 'United Arab Emirates'}
                        onChange={handleInputChange}
                        className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                        {countries.map((country, index) => (
                            <option key={index} value={country.value}>{country.label}</option>
                        ))}
                    </select>
                </div>

                <div className="w-full mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Map Location</label>
                    <div className="relative w-full h-60 bg-gray-200 rounded-md">
                        <FaMapMarkerAlt className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500" size={24} />
                        {/* Add your map integration here */}
                    </div>
                    <Link to="#" className="text-red-500">Pin Location</Link>
                </div>
                <div className="w-full mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Map Link</label>
                    <input
                        type="text"
                        name="mapLink"
                        value={locationDetails.mapLink || ''}
                        onChange={handleInputChange}
                        placeholder="Paste google map link"
                        className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                </div>

                <div className="w-full mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Accessibility features available</label>
                    <div className="flex flex-wrap gap-4">
                        <CustomCheckbox
                            checked={locationDetails.accessibilityFeatures.airportShuttle || false}
                            onChange={() => handleFeatureChange('airportShuttle')}
                            label="Airport Shuttle"
                        />
                        <CustomCheckbox
                            checked={locationDetails.accessibilityFeatures.metro || false}
                            onChange={() => handleFeatureChange('metro')}
                            label="Metro"
                        />
                        <CustomCheckbox
                            checked={locationDetails.accessibilityFeatures.taxi || false}
                            onChange={() => handleFeatureChange('taxi')}
                            label="Taxi"
                        />
                        <CustomCheckbox
                            checked={locationDetails.accessibilityFeatures.bus || false}
                            onChange={() => handleFeatureChange('bus')}
                            label="Bus"
                        />
                    </div>
                </div>

                <div className="w-full mb-4 flex flex-wrap items-center">
                    <div className="flex items-center mr-4">
                        <CustomCheckbox
                            checked={locationDetails.parkingAvailable || false}
                            onChange={() => handleCheckboxChange('parkingAvailable')}
                            label="Parking available"
                        />
                    </div>
                    <div className="flex items-center">
                        <CustomCheckbox
                            checked={locationDetails.valetParking || false}
                            onChange={() => handleCheckboxChange('valetParking')}
                            label="Valet Parking"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LocationForm;
