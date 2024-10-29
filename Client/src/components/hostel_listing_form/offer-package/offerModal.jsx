import React, { useState } from 'react';
import Input from '../../shared/common/customInput';
import { FaRegCalendarAlt } from 'react-icons/fa';

const OfferModal = ({ onClose, onSave }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSave = () => {
        onSave({ title, description, startDate, endDate });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 flex flex-wrap justify-between">
                <h2 className="text-2xl font-semibold mb-4">Offer & Packages</h2>
                <div className="mb-4 w-full">
                    <Input
                        label="Offer Title"
                        type="text"
                        placeholder="Enter Offer Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="lg:w-[47%] w-full mb-4">
                    <label className="block text-gray-700 font-medium mb-2">From</label>
                    <div className="relative">
                        <FaRegCalendarAlt className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="w-full py-2 pl-10 pr-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>
                </div>

                <div className="lg:w-[47%] w-full mb-4">
                    <label className="block text-gray-700 font-medium mb-2">To</label>
                    <div className="relative">
                        <FaRegCalendarAlt className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="w-full py-2 pl-10 pr-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>
                </div>

                <div className="mb-4 w-full">
                    <label className="block text-gray-700 font-medium mb-2">Offer Description</label>
                    <textarea
                        rows={5}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>


                <button
                    className="bg-primary w-full text-white px-4 py-2 rounded-md"
                    onClick={handleSave}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default OfferModal;
