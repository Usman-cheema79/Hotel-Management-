import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";

const IconGrid = () => {
    const [selectedIcon, setSelectedIcon] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const renderIcon = (iconName) => {
        const IconComponent = FaIcons[iconName];
        return IconComponent ? <IconComponent /> : null;
    };

    const handleIconClick = (iconName) => {
        setSelectedIcon(iconName);
        setIsModalOpen(false); // Close modal after selecting an icon
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredIcons = Object.keys(FaIcons).filter(iconName =>
        iconName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-full relative">
            <button
                onClick={() => setIsModalOpen(!isModalOpen)}
                className=" py-2 px-4 border border-lightGray rounded-lg cursor-pointer bg-white text-black flex items-center"
            >
                Icon <FaIcons.FaChevronDown className="ml-2" />
            </button>
            {selectedIcon && (
                <div className="mt-4">
                    <p className="text-sm">Selected Icon:</p>
                    <div className="text-2xl">{renderIcon(selectedIcon)}</div>
                </div>
            )}

            {isModalOpen && (
                <div className="absolute left-0 top-12  bg-opacity-50 flex items-center w-[400px] justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                        <div className="flex justify-between items-center mb-4">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                Close
                            </button>
                        </div>
                        <input
                            type="text"
                            placeholder="Search icons..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="w-full p-1 mb-4 border  rounded-full "
                        />
                        <div className="grid grid-cols-4 gap-4 p-4 max-h-[300px] overflow-y-auto">
                            {filteredIcons.map((iconName, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleIconClick(iconName)}
                                    className={`p-2 border rounded cursor-pointer flex justify-center items-center ${selectedIcon === iconName ? 'border-blue-500' : 'border-gray-300'}`}
                                >
                                    {renderIcon(iconName)}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default IconGrid;
