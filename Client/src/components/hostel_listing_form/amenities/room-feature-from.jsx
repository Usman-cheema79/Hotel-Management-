import React, { useContext, useState } from 'react';
import ToggleSwitch from '../../shared/common/custom-toggle';
import AddFeatureModal from './add-feature-form';
import {
  FaPhoneAlt,
  FaConciergeBell,
  FaTshirt,
  FaSuitcaseRolling,
  FaGlobe,
  FaUtensils,
  FaBed,
  FaSnowflake,
} from 'react-icons/fa';
import { HotelContext } from '../../../context/HotelContext';
import Modal from '../../shared/custom-modal/custom-modal';

// Initial set of room features with their respective icons
const defaultFeatures = [
  { name: 'Calls (Local)', icon: <FaPhoneAlt /> },
  { name: 'Calls (Toll-free)', icon: <FaPhoneAlt /> },
  { name: 'Concierge Services', icon: <FaConciergeBell /> },
  { name: 'Laundry Service', icon: <FaTshirt /> },
  { name: 'Luggage Storage', icon: <FaSuitcaseRolling /> },
  { name: 'Internet Access', icon: <FaGlobe /> },
  { name: 'Room Service', icon: <FaBed /> },
  { name: 'Air conditioning', icon: <FaSnowflake /> },
  { name: 'Kitchen', icon: <FaUtensils /> },
];

const RoomFeatures = () => {
  const { formData, setFormData } = useContext(HotelContext);
  const [features, setFeatures] = useState(defaultFeatures); // Track custom features
  const [isModalOpen, setIsModalOpen] = useState(false);

  const roomFeatures = formData.amenities?.roomFeatures || {}; // Ensure roomFeatures is defined

  const handleToggle = (featureName) => {
    const updatedFeatures = {
      ...roomFeatures,
      [featureName]: !roomFeatures[featureName],
    };

    setFormData((prevData) => ({
      ...prevData,
      amenities: {
        ...prevData.amenities,
        roomFeatures: updatedFeatures,
      },
    }));
  };

  const handleAddFeature = (newFeature) => {
    setFeatures((prevFeatures) => [...prevFeatures, newFeature]);

    setFormData((prevData) => ({
      ...prevData,
      amenities: {
        ...prevData.amenities,
        roomFeatures: {
          ...prevData.amenities.roomFeatures,
          [newFeature.name]: true, // Enable the new feature by default
        },
      },
    }));
  };

  return (
    <div className="flex">
      <div className="w-full">
        <div className="flex justify-between items-center w-full pb-5">
          <h2 className="text-3xl font-bold mb-4">Room Features</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-primary font-medium "
          >
            Add Custom Feature
          </button>
        </div>
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center py-1 justify-between lg:w-1/4 w-full mb-4"
          >
            <div className="flex items-center">
              <span className="text-2xl mr-2">{feature.icon}</span>
              <span className="text-base font-medium text-black">
                {feature.name}
              </span>
            </div>
            <ToggleSwitch
              isOn={roomFeatures[feature.name] || false}
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

export default RoomFeatures;
