import React from 'react';
import { FaPhone, FaConciergeBell, FaLuggageCart, FaBed, FaBusinessTime, FaMicrophone, FaSwimmingPool, FaSpa, FaShuttleVan, FaTaxi, FaParking } from 'react-icons/fa';

const featuresData = [
    {
        category: 'Room features',
        items: [
            { name: 'Calls (Local)', icon: FaPhone },
            { name: 'Concierge Services', icon: FaConciergeBell },
            { name: 'Luggage Storage', icon: FaLuggageCart },
            { name: 'Room Service', icon: FaBed },
            { name: 'Calls (Toll-free)', icon: FaPhone },
            { name: 'Laundry Service', icon: FaConciergeBell },
            { name: 'Internet Access', icon: FaLuggageCart },
            { name: 'Kitchen', icon: FaBed },
        ],
    },
    {
        category: 'Business features',
        items: [
            { name: 'Business Centre', icon: FaBusinessTime },
            { name: 'VIP Services', icon: FaMicrophone },
            { name: 'AV Equipment', icon: FaMicrophone },
            { name: 'High Speed Internet (100 Mbps)', icon: FaMicrophone },
            { name: 'Onsite AV Staff', icon: FaMicrophone, available: false },
            { name: 'Video Conference', icon: FaMicrophone, available: false },
        ],
    },
    {
        category: 'Recreational features',
        items: [
            { name: 'Health Club', icon: FaSwimmingPool },
            { name: 'Indoor Pool', icon: FaSwimmingPool },
            { name: 'Outdoor Pool', icon: FaSwimmingPool },
            { name: 'Spa', icon: FaSpa },
            { name: 'Salon', icon: FaSpa },
            { name: 'Tennis Courts', icon: FaSpa },
            { name: 'Whirlpool', icon: FaSpa },
        ],
    },
    {
        category: 'Accessibility',
        items: [
            { name: 'Airport Shuttle', icon: FaShuttleVan },
            { name: 'Bus', icon: FaShuttleVan },
            { name: 'Taxi', icon: FaTaxi },
            { name: 'Metro', icon: FaTaxi },
        ],
    },
    {
        category: 'Parking',
        items: [
            { name: 'Parking available', icon: FaParking },
            { name: 'Valet Parking', icon: FaParking },
        ],
    },
];

const FeatureItem = ({ feature }) => {
    const IconComponent = feature.icon;
    return (
        <div className={`flex items-center mb-2 ${!feature.available ? 'text-black' : ''}`}>
            <IconComponent className="text-xl mr-2" />
            <span>{feature.name}</span>
        </div>
    );
};

const FeaturesSection = () => {
    return (
        <div className="py-5 lg:w-3/4 w-full px-5 border-t mx-auto">

            <div className="bg-white p-6 rounded-lg">
                <h2 className="text-3xl gap-5 font-bold mb-6">What this place offers</h2>
                {featuresData.map((category, index) => (
                    <div key={index} className="mb-6 flex gap-5 items-start flex-wrap">
                        <h3 className="text-xl font-bold mb-4 lg:w-1/5 w-full">{category.category}</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {category.items.map((feature, index) => (
                                <FeatureItem key={index} feature={feature} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturesSection;
