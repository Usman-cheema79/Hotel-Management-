import React, { useContext } from 'react';
import { HotelContext } from '../../context/HotelContext';
import ToggleSwitch from '../shared/common/custom-toggle';
import SelectableTags from '../shared/common/selectableTags';

const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const PricingForm = () => {
    const { formData, setFormData } = useContext(HotelContext);

    // Provide default values if formData or formData.pricing is undefined
    const basePrice = formData?.pricing?.basePrice || '';
    const mentionSeasons = formData?.pricing?.mentionSeasons || false;
    const highDemandMonths = formData?.pricing?.highDemandMonths || [];
    const midDemandMonths = formData?.pricing?.midDemandMonths || [];
    const lowDemandMonths = formData?.pricing?.lowDemandMonths || [];

    const handleBasePriceChange = (e) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            pricing: {
                ...prevFormData.pricing,
                basePrice: e.target.value
            }
        }));
    };

    const handleMentionSeasonsToggle = () => {
        setFormData(prevFormData => ({
            ...prevFormData,
            pricing: {
                ...prevFormData.pricing,
                mentionSeasons: !prevFormData.pricing?.mentionSeasons
            }
        }));
    };

    const handleMonthToggle = (month, demandType) => {
        const updateMonths = (monthsList) =>
            monthsList.includes(month)
                ? monthsList.filter(m => m !== month)
                : [...monthsList, month];

        setFormData(prevFormData => {
            const updatedPricing = { ...prevFormData.pricing };
            switch (demandType) {
                case 'high':
                    updatedPricing.highDemandMonths = updateMonths(highDemandMonths);
                    break;
                case 'mid':
                    updatedPricing.midDemandMonths = updateMonths(midDemandMonths);
                    break;
                case 'low':
                    updatedPricing.lowDemandMonths = updateMonths(lowDemandMonths);
                    break;
                default:
                    break;
            }
            return {
                ...prevFormData,
                pricing: updatedPricing
            };
        });
    };

    return (
        <div className="bg-white rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
            <div className="mb-4">
                <label className="block text-secondary font-medium mb-2">
                    Starting base price per room per night
                </label>
                <div className="flex items-center lg:w-1/2 w-full border-2 rounded-lg border-lightGray">
                    <select className="p-2 rounded-md border-0">
                        <option>AED</option>
                        <option>USD</option>
                        <option>EUR</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Enter base pricing"
                        value={basePrice}
                        onChange={handleBasePriceChange}
                        className="ml-2 p-2 border-0 focus:outline-none rounded-md w-full"
                    />
                </div>
                <p className="text-sm text-gray-500 mt-1">
                    This pricing will be displayed on the search results
                </p>
            </div>

            <div className="mb-4">
                <label className="flex items-center">
                    <span className="text-gray-700 font-medium mr-2">
                        Would you like to mention the High & Low Season availability?
                    </span>
                    <ToggleSwitch isOn={mentionSeasons} handleToggle={handleMentionSeasonsToggle} />
                </label>
            </div>

            {mentionSeasons && (
                <>
                    <DemandSection
                        title="High Demand"
                        color="red"
                        selectedMonths={highDemandMonths}
                        toggleMonth={(month) => handleMonthToggle(month, 'high')}
                    />
                    <DemandSection
                        title="Mid Demand"
                        color="yellow"
                        selectedMonths={midDemandMonths}
                        toggleMonth={(month) => handleMonthToggle(month, 'mid')}
                    />
                    <DemandSection
                        title="Low Demand"
                        color="green"
                        selectedMonths={lowDemandMonths}
                        toggleMonth={(month) => handleMonthToggle(month, 'low')}
                    />
                </>
            )}
        </div>
    );
};

const DemandSection = ({ title, color, selectedMonths, toggleMonth }) => (
    <div className="mb-4">
        <div className="flex gap-5 items-center">
            <div className={`h-4 w-4 rounded-full bg-${color}-500`}></div>
            <h3 className={`text-lg font-medium text-${color}-600 mb-2`}>{title}</h3>
        </div>
        <p className="text-sm text-secondary">{`Select months with ${title.toLowerCase()} season demand`}</p>
        <div className="flex flex-wrap gap-2 pt-5">
            <SelectableTags
                tags={months}
                selectedTags={selectedMonths}
                onTagClick={(month) => toggleMonth(month)}
            />
        </div>
    </div>
);

export default PricingForm;
