import React, { useState } from 'react';
import icon from '../assets/icon2.svg';
import { FaSave } from 'react-icons/fa';
import { MdSync } from 'react-icons/md';
import Navbar from '../components/Navbar';
import Stepper from '../components/venu-listing-form/stepper';


const VenuListingForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [currentSubStep, setCurrentSubStep] = useState(0);

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
                    return null;

                default:
                    return null;
            }
        }

    };

    const handleContinue = () => {
        const currentSubStepCount = subSteps[currentStep].length;
        if (currentSubStep < currentSubStepCount - 1) {
            setCurrentSubStep(currentSubStep + 1);
        } else {
            setCurrentStep(currentStep + 1);
            setCurrentSubStep(0);
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

export default VenuListingForm;
