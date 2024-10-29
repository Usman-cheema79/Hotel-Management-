import React from 'react';
import { GrFormCheckmark } from 'react-icons/gr';

const ToggleSwitch = ({ isOn, handleToggle }) => {
    return (
        <label className='flex cursor-pointer select-none items-center'>
            <div className='relative'>
                <input
                    type='checkbox'
                    checked={isOn}
                    onChange={handleToggle}
                    className='sr-only'
                />
                <div className={` h-7 w-12 mr-1 flex justify-center items-center rounded-full ${isOn ? 'bg-green1' : 'bg-gray-300'}`}>
                </div>
                <div
                    className={`dot absolute left-1 top-1 h-5 w-5 flex justify-center items-center rounded-full bg-white transition transform ${isOn ? 'translate-x-full' : ''}`}
                    style={{ transition: 'transform 0.2s' }}
                >
                    {isOn && <GrFormCheckmark className='text-green1 z-50' />}
                </div>
            </div>
        </label>
    );
};

export default ToggleSwitch;
