import React, { useContext, useState } from 'react';
import OfferModal from './offerModal';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { HotelContext } from '../../../context/HotelContext';
import Modal from '../../shared/custom-modal/custom-modal';

const OfferForm = () => {
    const { formData, setFormData } = useContext(HotelContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [offers, setOffers] = useState(formData.offerPackage || []);

    const addOffer = (newOffer) => {
        const updatedOffers = [...offers, newOffer];
        setOffers(updatedOffers);
        setFormData({
            ...formData,
            offerPackage: updatedOffers
        });
        setIsModalOpen(false);
    };

    const handleDelete = (index) => {
        const updatedOffers = offers.filter((_, i) => i !== index);
        setOffers(updatedOffers);
        setFormData({
            ...formData,
            offerPackage: updatedOffers
        });
    };

    return (
        <div className="bg-white p-6 rounded-lg">
            <h2 className="text-lg text-secondary font-medium mb-4">Offers & Packages</h2>
            <div className="flex justify-between items-center mb-4 w-full border-dashed border-lightGray py-2 px-4 bg-[#F7F7F7] rounded-lg">
                <p className="text-secondary">{offers.length === 0 ? 'No Offer added' : 'Offers added'}</p>
                <button
                    className="text-primary px-4 py-2 rounded-md font-medium hover:bg-red-500 hover:text-white transition"
                    onClick={() => setIsModalOpen(true)}
                >
                    Add Offer
                </button>
            </div>
            <div>
                {offers.length > 0 ? (
                    <ul className="divide-y divide-gray-200">
                        {offers.map((offer, index) => (
                            <li key={index} className="py-4 px-4 bg-blue-50 rounded-lg border border-blue-200 mb-4">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-lg font-medium">{offer.title}</h3>
                                    <div className="grid grid-cols-2 gap-4 mb-2">
                                        <div>
                                            <p className="text-gray-500">From</p>
                                            <p className="text-blue-500">{offer.startDate}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500">To</p>
                                            <p className="text-blue-500">{offer.endDate}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between gap-2 items-center">
                                    <p className="text-gray-700">{offer.description}</p>
                                    <div className="flex space-x-2">
                                        <button className="text-blue-500 hover:text-blue-600">
                                            <FaEdit />
                                        </button>
                                        <button className="text-red-500 hover:text-red-600" onClick={() => handleDelete(index)}>
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No offers added yet.</p>
                )}
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <OfferModal onClose={() => setIsModalOpen(false)} onSave={addOffer} />
            </Modal>
            {/* {isModalOpen && } */}
        </div>
    );
};

export default OfferForm;
