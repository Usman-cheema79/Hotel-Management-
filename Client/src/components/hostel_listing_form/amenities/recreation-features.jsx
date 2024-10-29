import React, { useContext, useState } from 'react';
import { FaSwimmingPool, FaSpa, FaTableTennis, FaHotTub } from 'react-icons/fa';
import { MdHealthAndSafety } from 'react-icons/md';
import ToggleSwitch from '../../shared/common/custom-toggle';
import AddFeatureModal from './add-feature-form';
import { FiScissors } from 'react-icons/fi';
import { HotelContext } from '../../../context/HotelContext';
import Modal from '../../shared/custom-modal/custom-modal';


const defaultFeatures = [
  { name: 'Health Club', icon: <MdHealthAndSafety /> },
  { name: 'Indoor Pool', icon: <FaSwimmingPool /> },
  { name: 'Outdoor Pool', icon: <FaSwimmingPool /> },
  { name: 'Spa', icon: <FaSpa /> },
  { name: 'Salon', icon: <FiScissors /> },
  { name: 'Tennis Courts', icon: <FaTableTennis /> },
  { name: 'Whirlpool', icon: <FaHotTub /> },
];

const RecreationalFeatures = () => {
  const { formData, setFormData } = useContext(HotelContext);
  const [features, setFeatures] = useState(defaultFeatures); // Track custom features
  const [isModalOpen, setIsModalOpen] = useState(false);

  const recreationalFeatures = formData.amenities?.recreationalFeatures || {}; // Ensure recreationalFeatures is defined

  const handleToggle = (featureName) => {
    const updatedFeatures = {
      ...recreationalFeatures,
      [featureName]: !recreationalFeatures[featureName],
    };

    setFormData((prevData) => ({
      ...prevData,
      amenities: {
        ...prevData.amenities,
        recreationalFeatures: updatedFeatures,
      },
    }));
  };

  const handleAddFeature = (newFeature) => {
    setFeatures((prevFeatures) => [...prevFeatures, newFeature]);

    setFormData((prevData) => ({
      ...prevData,
      amenities: {
        ...prevData.amenities,
        recreationalFeatures: {
          ...prevData.amenities.recreationalFeatures,
          [newFeature.name]: true, // Enable the new feature by default
        },
      },
    }));
  };

  return (
    <div className="flex w-full">
      <div className="w-full">
        <div className="flex justify-between items-center w-full pb-5">
          <h2 className="text-3xl font-bold mb-4">Recreational Features</h2>
          <button onClick={() => setIsModalOpen(true)} className="text-primary font-medium">
            Add Custom Feature
          </button>
        </div>
        {features.map((feature, index) => (
          <div key={index} className="flex py-1 items-center justify-between lg:w-1/4 w-full mb-4">
            <div className="flex items-center">
              <span className="text-2xl mr-2">{feature.icon}</span>
              <span className="text-base font-medium text-black">{feature.name}</span>
            </div>
            <ToggleSwitch
              isOn={recreationalFeatures[feature.name] || false}
              handleToggle={() => handleToggle(feature.name)}
            />
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddFeatureModal onSave={handleAddFeature} onRequestClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default RecreationalFeatures;
