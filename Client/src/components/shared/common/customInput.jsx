// src/components/Input.js
import React from 'react';

const Input = ({ label, type, placeholder, value, onChange }) => {
    return (
        <div className="mb-3">
            <label className="block text-secondary text-sm font-medium mb-2">
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className=" appearance-none border border-lightGray rounded-lg w-full py-3 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
    );
};

export default Input;
