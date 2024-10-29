// src/components/CustomCheckbox.js
import React from 'react';

const CustomCheckbox = ({ checked, onChange, label }) => {
    return (
        <label className="inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="hidden"
            />
            <span
                className={`w-6 h-6 border-2 flex items-center justify-center ${checked ? 'border-green1' : 'border-secondary'}`}
            >
                {checked && (
                    <svg
                        className="w-4 h-4 text-green1"
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
                        />
                    </svg>
                )}
            </span>
            {label && <span className="ml-2 text-gray-700">{label}</span>}
        </label>
    );
};

export default CustomCheckbox;
