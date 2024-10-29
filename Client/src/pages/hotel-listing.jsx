import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { HotelContext } from '../context/HotelContext'; // Adjust the import path as needed
import axios from 'axios'; // Import axios
import { toast } from 'react-toastify'; // Import toast from react-toastify
import BasicForm from '../components/hostel_listing_form/overview-form/basic-form';
import icon from '../assets/icon2.svg';
import { FaSave } from 'react-icons/fa';
import { MdSync } from 'react-icons/md';
import AdditionalDetailsForm from '../components/hostel_listing_form/overview-form/addition-detail-from';
import LocationForm from '../components/hostel_listing_form/overview-form/location';
import AccommodationForm from '../components/hostel_listing_form/form-accommodation';
import Stepper from '../components/hostel_listing_form/stepper';
import PricingForm from '../components/hostel_listing_form/pricing-form';
import OfferForm from '../components/hostel_listing_form/offer-package/form';
import RoomFeatures from '../components/hostel_listing_form/amenities/room-feature-from';
import BusinessFeatures from '../components/hostel_listing_form/amenities/business-feature-form';
import RecreationalFeatures from '../components/hostel_listing_form/amenities/recreation-features';
import UploadPhotosVideos from '../components/hostel_listing_form/photo-video-form';
import CardPreview from '../components/hostel_listing_form/card-preview';
import Navbar from '../components/Navbar';

const HostelListingForm = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);
    const [currentSubStep, setCurrentSubStep] = useState(0);
    const { formData , setformData} = useContext(HotelContext);

    const handleSubmit = async () => {
        try {
           
            const response = await axios.post('http://localhost:3002/Createhotel', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            // console.log("i am api f");
            if (response.data.success) { // Assuming `success` indicates a successful registration
                
                alert('Hotel created successfully!');
                setTimeout(() => {
                    navigate('/'); // Redirect to the dashboard
                }, 1000); // Delay to allow toast message to display
            } else {
                alert('User not found. Please log in first.');
            }
        } catch (error) {
            alert('An error occurred. Please try again.');
            console.error('Error:', error.message);
        }
    };

    const handleContinue = () => {
        const lastStep = 6; // Assuming the last step is step 6
        const currentSubStepCount = subSteps[currentStep].length;

        if (currentStep === lastStep) {
            handleSubmit(); // Submit data when on the last step
        } else {
            if (currentSubStep < currentSubStepCount - 1) {
                setCurrentSubStep(currentSubStep + 1);
            } else {
                setCurrentStep(currentStep + 1);
                setCurrentSubStep(0);
            }
        }
    };

    const subSteps = [
        ['BasicForm', 'AdditionalDetailsForm', 'LocationForm'], // Sub-steps for step 0
        [], // No sub-steps for step 1
        [], // No sub-steps for step 2
        [], // No sub-steps for step 3
        ['RoomFeatures', 'BusinessFeatures', 'RecreationalFeatures'], // Sub-steps for step 4
        [], // No sub-steps for step 5
        [], // No sub-steps for step 6
    ];

    const renderForm = () => {
        if (currentStep === 0) {
            switch (currentSubStep) {
                case 0:
                    return <BasicForm />;
                case 1:
                    return <AdditionalDetailsForm />;
                case 2:
                    return <LocationForm />;
                default:
                    return <BasicForm />;
            }
        }
        if (currentStep === 4) {
            switch (currentSubStep) {
                case 0:
                    return <RoomFeatures />;
                case 1:
                    return <BusinessFeatures />;
                case 2:
                    return <RecreationalFeatures />;
                default:
                    return <BasicForm />;
            }
        }
        switch (currentStep) {
            case 1:
                return <AccommodationForm />;
            case 2:
                return <PricingForm />;
            case 3:
                return <OfferForm />;
            case 5:
                return <UploadPhotosVideos />;
            case 6:
                return <CardPreview />;
            default:
                return <BasicForm />;
        }
    };

    return (
        <>
            <Navbar />

            <div className="flex px-5 lg:px-10 py-5 min-h-[90vh] bg-[#F3F3F3] w-full">
                <div className="flex justify-between flex-wrap gap-5 w-full">
                    <div className="flex justify-start flex-wrap rounded-2xl bg-white lg:w-[78%] w-full">
                        <div className="lg:w-1/4 w-full border-r border-lightGray">
                            <Stepper currentStep={currentStep} currentSubStep={currentSubStep} setCurrentStep={setCurrentStep} setCurrentSubStep={setCurrentSubStep} />
                        </div>
                        <div className="lg:w-3/4 w-full px-5 py-5">
                            {renderForm()}
                        </div>
                        <div className="w-full bg-[#F3F3F3] mt-5 p-2 flex justify-between items-center">
                            <button className="flex items-center text-gray-700 hover:text-gray-900">
                                <FaSave className="mr-2" />
                                Save for later
                            </button>
                            <div className="flex gap-5 items-center">
                                <span className="flex items-center text-gray-700">
                                    <MdSync className="mr-2" />
                                    Auto Save is on
                                </span>
                                <button
                                    className="bg-primary text-white px-10 py-2 lg:w-48 rounded-lg hover:bg-red-600"
                                    onClick={handleContinue}
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/5 px-2 bg-[#F3F3F3] w-full">
                        <div className="flex flex-col bg-[#F7F7F7] border border-[#EBEBEB] rounded-lg p-4 items-start shadow-md">
                            <img src={icon} alt="" />
                            <div>
                                <h3 className="text-lg font-semibold text-black">Tips</h3>
                                <p className="text-secondary">
                                    Highlight unique features, describe room types, mention location advantages, and be concise and clear to stand out for a perfect event.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HostelListingForm;
