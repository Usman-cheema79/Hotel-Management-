// src/components/SelectableTags.js
import React from 'react';
import { GoPlus } from 'react-icons/go';
import { IoMdCheckmark } from 'react-icons/io';

const SelectableTags = ({ label, tags, selectedTags, onTagClick }) => {
    return (
        <div className="mb-4">
            {label && (
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    {label}
                </label>
            )}
            <div className="flex flex-wrap">
                {tags?.map((tag, index) => (
                    <button
                        key={index}
                        onClick={() => onTagClick(tag)}
                        className={`m-1 px-4 py-2 rounded-full border flex items-center justify-between ${selectedTags.includes(tag)
                            ? 'border-green1 text-green1'
                            : 'bg-white text-secondary border-secondary'
                            }`}
                    >
                        <span>{tag}</span>
                        {selectedTags.includes(tag) ? (
                            <IoMdCheckmark className="ml-2 text-green1" />
                        ) : (
                            <GoPlus className="ml-2 text-secondary" />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SelectableTags;
