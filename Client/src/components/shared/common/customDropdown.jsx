// src/components/Dropdown.js
import React from 'react';

const Dropdown = ({ label, options, value, onChange }) => {
    return (
        <div className="mb-4">
            <label className="block text-secondary text-sm font-medium mb-2">
                {label}
            </label>
            <select
                value={value}
                onChange={onChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
