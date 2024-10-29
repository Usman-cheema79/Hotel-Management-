import React, { useContext } from 'react';
import Input from '../../shared/common/customInput';
import Dropdown from '../../shared/common/customDropdown';
import SelectableTags from '../../shared/common/selectableTags';
import RatingDropdown from './rating-dropdown';
import { hotelStyles, hotelTypes, hotelViews } from '../data';
import { HotelContext } from '../../../context/HotelContext';

const BasicForm = () => {
    const { formData, setFormData } = useContext(HotelContext);

    const handleInputChange = (field, value) => {
        setFormData(prevData => ({
            ...prevData,
            overview: {
                ...prevData.overview,
                basicDetails: {
                    ...prevData.overview.basicDetails,
                    [field]: value
                }
            }
        }));
    };

    const handleTagClick = (category, tag) => {
        setFormData(prevData => ({
            ...prevData,
            overview: {
                ...prevData.overview,
                basicDetails: {
                    ...prevData.overview.basicDetails,
                    selectedTags: {
                        ...prevData.overview.basicDetails.selectedTags,
                        [category]: prevData.overview.basicDetails.selectedTags[category]?.includes(tag)
                            ? prevData.overview.basicDetails.selectedTags[category].filter(t => t !== tag)
                            : [...(prevData.overview.basicDetails.selectedTags[category] || []), tag]
                    }
                }
            }
        }));
    };

    const handleStyleTagClick = (styleCategory, tag) => {
        setFormData(prevData => ({
            ...prevData,
            overview: {
                ...prevData.overview,
                basicDetails: {
                    ...prevData.overview.basicDetails,
                    selectedTags: {
                        ...prevData.overview.basicDetails.selectedTags,
                        styles: {
                            ...prevData.overview.basicDetails.selectedTags.styles,
                            [styleCategory]: prevData.overview.basicDetails.selectedTags.styles[styleCategory]?.includes(tag)
                                ? prevData.overview.basicDetails.selectedTags.styles[styleCategory].filter(t => t !== tag)
                                : [...(prevData.overview.basicDetails.selectedTags.styles[styleCategory] || []), tag]
                        }
                    }
                }
            }
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData.overview?.basicDetails); // Log the current form data on submit
    };

    const basicDetails = formData.overview?.basicDetails || {};
    const selectedTags = basicDetails.selectedTags || {};
    const styles = selectedTags.styles || {};

    return (
        <div>
            <h2 className="text-2xl lg:text-3xl font-semibold pb-2">Basic Details</h2>
            <form className="w-full flex flex-wrap gap-4 justify-between mx-auto p-4 bg-white rounded-lg" onSubmit={handleSubmit}>
                {/* Input fields */}
                <div className="lg:w-[47%] w-full">
                    <Input
                        label="Hotel Name"
                        type="text"
                        placeholder="Enter hotel name"
                        value={basicDetails.hotelName || ''}
                        onChange={(e) => handleInputChange('hotelName', e.target.value)}
                    />
                </div>
                <div className="mb-3 w-full">
                    <label className="block text-secondary text-sm font-medium mb-2">Hotel Description</label>
                    <textarea
                        rows={10}
                        placeholder="Write description of your hotel"
                        value={basicDetails.hotelDescription || ''}
                        onChange={(e) => handleInputChange('hotelDescription', e.target.value)}
                        className="appearance-none border border-lightGray rounded-lg w-full py-3 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="lg:w-[47%] w-full">
                    <Input
                        label="Hotel Website"
                        type="text"
                        placeholder="Link"
                        value={basicDetails.hotelWebsite || ''}
                        onChange={(e) => handleInputChange('hotelWebsite', e.target.value)}
                    />
                </div>
                <div className="lg:w-[47%] w-full">
                    <RatingDropdown
                        label="Hotel Rating"
                        value={basicDetails.hotelRating || ''}
                        onChange={(value) => handleInputChange('hotelRating', value)}
                    />
                </div>
                <div className="lg:w-[47%] w-full">
                    <Dropdown
                        label="Hotel Chain"
                        options={[]} // Add options for hotel chains
                        value={basicDetails.hotelChain || ''}
                        onChange={(e) => handleInputChange('hotelChain', e.target.value)}
                    />
                </div>
                <div className="lg:w-[47%] w-full">
                    <Dropdown
                        label="Brand"
                        options={[]} // Add options for brands
                        value={basicDetails.hotelBrand || ''}
                        onChange={(e) => handleInputChange('hotelBrand', e.target.value)}
                    />
                </div>
                <div className="w-full">
                    <SelectableTags
                        label="Hotel Type"
                        tags={hotelTypes}
                        selectedTags={selectedTags.types || []}
                        onTagClick={(tag) => handleTagClick('types', tag)}
                    />
                </div>
                <div className="w-full">
                    <SelectableTags
                        label="Hotel View"
                        tags={hotelViews}
                        selectedTags={selectedTags.views || []}
                        onTagClick={(tag) => handleTagClick('views', tag)}
                    />
                </div>
                <div className="mb-4 w-full">
                    <label className="block text-secondary text-sm font-bold mb-2">Hotel Style (select top 5)</label>
                    <p className="text-gray-400">Mentioning the hotel’s style is important to give potential guests a clear idea of what to expect and to effectively target the right clientele</p>
                    {Object.keys(hotelStyles).map((styleCategory) => (
                        <div key={styleCategory}>
                            <h3 className="mt-4 mb-2 text-gray-700 font-semibold capitalize">{styleCategory} style</h3>
                            <SelectableTags
                                tags={hotelStyles[styleCategory]}
                                selectedTags={styles[styleCategory] || []}
                                onTagClick={(tag) => handleStyleTagClick(styleCategory, tag)}
                            />
                        </div>
                    ))}
                </div>
            </form>
        </div>
    );
};

export default BasicForm;
