import React, { useContext, useState } from 'react';
import { FaBriefcase, FaVideo, FaCrown, FaMicrophone, FaUserTie, FaWifi } from 'react-icons/fa';
import ToggleSwitch from '../../shared/common/custom-toggle';
import AddFeatureModal from './add-feature-form';
import { HotelContext } from '../../../context/HotelContext';
import Modal from '../../shared/custom-modal/custom-modal';

const defaultFeatures = [
  { name: 'Business Centre', icon: <FaBriefcase /> },
  { name: 'Video Conference', icon: <FaVideo /> },
  { name: 'VIP Services', icon: <FaCrown /> },
  { name: 'AV Equipment', icon: <FaMicrophone /> },
  { name: 'Onsite AV Staff', icon: <FaUserTie /> },
  { name: 'High Speed Internet (100 Mbps)', icon: <FaWifi /> },
];

const BusinessFeatures = () => {
  const { formData, setFormData } = useContext(HotelContext);
  const [features, setFeatures] = useState(defaultFeatures); // Track custom features
  const [isModalOpen, setIsModalOpen] = useState(false);

  const businessFeatures = formData.amenities?.businessFeatures || {}; // Ensure businessFeatures is defined

  const handleToggle = (featureName) => {
    const updatedFeatures = {
      ...businessFeatures,
      [featureName]: !businessFeatures[featureName],
    };

    setFormData((prevData) => ({
      ...prevData,
      amenities: {
        ...prevData.amenities,
        businessFeatures: updatedFeatures,
      },
    }));
  };

  const handleAddFeature = (newFeature) => {
    setFeatures((prevFeatures) => [...prevFeatures, newFeature]);

    setFormData((prevData) => ({
      ...prevData,
      amenities: {
        ...prevData.amenities,
        businessFeatures: {
          ...prevData.amenities.businessFeatures,
          [newFeature.name]: true, // Enable the new feature by default
        },
      },
    }));
    setIsModalOpen(false); // Close the modal after adding the feature
  };

  return (
    <div className="">
      <div className="flex">
        <div className="w-full">
          <div className="flex justify-between items-center w-full pb-5">
            <h2 className="text-3xl font-bold mb-4">Business Features</h2>
            <button onClick={() => setIsModalOpen(true)} className="text-primary font-medium">
              Add Custom Feature
            </button>
          </div>
          {features.map((feature, index) => (
            <div key={index} className="flex items-center py-1 justify-between lg:w-1/4 w-full mb-4">
              <div className="flex items-center">
                <span className="text-2xl mr-2">{feature.icon}</span>
                <span className="text-base font-medium text-black">{feature.name}</span>
              </div>
              <ToggleSwitch
                isOn={businessFeatures[feature.name] || false}
                handleToggle={() => handleToggle(feature.name)}
              />
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddFeatureModal onSave={handleAddFeature} onRequestClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default BusinessFeatures;
