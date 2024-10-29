/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
// import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';
import Input from '../../shared/common/customInput';
import IconGrid from './icon-picker';

// Modal.setAppElement('#__next'); // Make sure to add this line for accessibility

const AddFeatureModal = ({ isOpen, onRequestClose, onSave }) => {
    const [featureName, setFeatureName] = useState('');
    const [selectedIcon, setSelectedIcon] = useState('');

    const handleSave = () => {
        onSave({ name: featureName, icon: selectedIcon });
        onRequestClose();
    };

    return (
        // <Modal
        //     isOpen={isOpen}
        //     onRequestClose={onRequestClose}
        //     className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        //     shouldCloseOnOverlayClick={true} // This will close the modal on outside click
        // >
        <div className="bg-white p-6 rounded-lg  ">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Add Feature</h2>
                <FaTimes className="cursor-pointer" onClick={onRequestClose} />
            </div>
            <div className="flex  gap-5 justify-between items-start">
                <div className="mb-4 w-1/5">
                    <label className="block text-gray-700 font-medium mb-2">Icon</label>
                    <IconGrid />
                </div>
                <div className="mb-4 w-3/4">
                    <Input
                        label="Name of the feature"
                        type="text"
                        placeholder="Enter feature name"
                        value={featureName}
                        onChange={(e) => setFeatureName(e.target.value)}
                    />
                </div>
            </div>
            <button className="bg-primary w-full text-white px-4 py-2 rounded-md" onClick={handleSave}>
                Continue
            </button>
        </div>
        // </Modal>
    );
};

export default AddFeatureModal;
