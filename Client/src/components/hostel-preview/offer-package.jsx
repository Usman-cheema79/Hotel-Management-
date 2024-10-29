import React, { useContext, useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { HotelContext } from '../../context/HotelContext';

const OffersAndPackages = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const { formData } = useContext(HotelContext);
    const offers = formData?.hotelProfile.offerPackage || []; // Safe check for offers array

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="bg-white rounded-lg mb-8 lg:w-3/4 w-full px-5 mx-auto py-10">
            <h2 className="text-3xl font-bold mb-4">Offers & Packages</h2>
            {offers.length === 0 ? (
                <p>No offers available at the moment.</p>
            ) : (
                offers.map((offer, index) => (
                    <div key={index} className="mb-4">
                        <div
                            className="cursor-pointer bg-gray-100 p-4 rounded-lg flex justify-between items-center"
                            onClick={() => toggleExpand(index)}
                        >
                            <h3 className="text-xl font-semibold">{offer.title || 'No Title'}</h3>
                            <span>
                                {expandedIndex === index ? (
                                    <MdKeyboardArrowUp className="text-3xl" />
                                ) : (
                                    <MdKeyboardArrowDown className="text-3xl" />
                                )}
                            </span>
                        </div>
                        {expandedIndex === index && (
                            <div className="mt-4 p-4 border rounded-lg bg-gray-50">
                                {offer.startDate && (
                                    <div className="mb-2">
                                        <strong>From:</strong> {offer.startDate}
                                    </div>
                                )}
                                {offer.endDate && (
                                    <div className="mb-2">
                                        <strong>To:</strong> {offer.endDate}
                                    </div>
                                )}
                                <p>{offer.description}</p>
                            </div>
                        )}
                    </div>
                ))
            )}
        </div>
    );
};

export default OffersAndPackages;
