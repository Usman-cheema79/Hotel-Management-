// src/components/Stepper.js
import React from 'react';

const steps = [
    { title: 'Overview', subSteps: ['Basic Details', 'Additional Details', 'Location'] },
    { title: 'Accommodation', subSteps: [] },
    { title: 'Pricing', subSteps: [] },
    { title: 'Offers & Packages', subSteps: [] },
    { title: 'Amenities', subSteps: ['Room Features', 'Business Features', 'Recreational Features'] },
    { title: 'Photos & Videos', subSteps: [] },
    { title: 'Preview', subSteps: [] },
];

const Stepper = ({ currentStep, currentSubStep, setCurrentStep, setCurrentSubStep }) => {

    return (
        <div className="w-full bg-white p-4">
            <ul className="relative space-y-3">
                {steps.map((step, index) => (
                    <div key={index}>
                        <li
                            className={`flex items-center cursor-pointer relative mb-10 ${currentStep === index || Math.floor(currentStep) === index
                                ? 'text-green1'
                                : 'text-lightGray'
                                }`}
                            onClick={() => setCurrentStep(index)}
                        >
                            <div className="flex items-center">
                                <span
                                    className={`w-7 h-7 flex items-center justify-center rounded-full border-2 ${currentStep === index || Math.floor(currentStep) === index
                                        ? 'border-green1'
                                        : 'border-lightGray'
                                        }
                                         ${currentStep > index
                                            ? 'bg-green1'
                                            : 'bg-transparent'
                                        }`}
                                >
                                    {currentStep > index ? (
                                        <svg
                                            className="w-4 h-4 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            ></path>
                                        </svg>
                                    ) : (
                                        <span
                                            className={`w-2 h-2  rounded-full ${currentStep === index || Math.floor(currentStep) === index
                                                ? 'bg-green1'
                                                : 'bg-lightGray'}
                                                }`}
                                        ></span>
                                    )}
                                </span>
                                {index !== steps.length - 1 && (
                                    <span
                                        className={`min-h-full absolute left-o top-8  min-w-[2px]  ${currentStep > index || Math.floor(currentStep) === index
                                            ? 'bg-green1'
                                            : 'bg-lightGray'
                                            } ml-3`}
                                    ></span>
                                )}
                            </div>
                            <span className={`${currentStep >= index ? 'text-black' : 'border-lightGray '} ml-3`}>{step.title}</span>

                        </li>
                        {step.subSteps.length > 0 && Math.floor(currentStep) === index && (
                            <ul className="ml-8">
                                {step.subSteps.map((subStep, subIndex) => (
                                    <li
                                        key={subIndex}
                                        className={`flex relative items-center cursor-pointer mb-2 ${currentSubStep === subIndex ? 'text-green1' : 'text-lightGray'}`}
                                        onClick={() => setCurrentSubStep(subIndex)}
                                    >
                                        {subIndex !== step.subSteps.length && (
                                            <span
                                                className={`min-h-6 rounded-md min-w-[2px]  ${currentStep > index + (subIndex) / 10
                                                    ? 'bg-green1'
                                                    : 'bg-lightGray'
                                                    } ml-3`}
                                            ></span>
                                        )}
                                        <span className={` ml-3 ${currentStep > index + (subIndex) / 10 ? 'text-black' : 'border-lightGray'}`}>{subStep}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Stepper;
