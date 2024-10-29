import React from 'react';

const Pricing = () => {
    const seasons = [
        { month: 'Jan', season: 'high', color: 'text-red-500 border-red-500' },
        { month: 'Feb', season: 'high', color: 'text-red-500 border-red-500' },
        { month: 'Mar', season: 'high', color: 'text-red-500 border-red-500' },
        { month: 'Apr', season: 'shoulder', color: 'text-yellow-500 border-yellow-500' },
        { month: 'May', season: 'shoulder', color: 'text-yellow-500 border-yellow-500' },
        { month: 'Jun', season: 'low', color: 'text-green-500 border-green-500' },
        { month: 'Jul', season: 'low', color: 'text-green-500 border-green-500' },
        { month: 'Aug', season: 'low', color: 'text-green-500 border-green-500' },
        { month: 'Sep', season: 'shoulder', color: 'text-yellow-500 border-yellow-500' },
        { month: 'Oct', season: 'high', color: 'text-red-500 border-red-500' },
        { month: 'Nov', season: 'high', color: 'text-red-500 border-red-500' },
        { month: 'Dec', season: 'high', color: 'text-red-500 border-red-500' },
    ];

    return (
        <div className="py-5 lg:w-3/4 w-full px-5 border-t mx-auto">

            <div className="bg-white p-6 rounded-lg  mb-8">
                <div className="flex justify-between flex-wrap items-center lg:w-1/2  mb-4">
                    <h2 className="text-3xl font-bold">Pricing</h2>
                    <span className="text-xl">Starting From <span className="font-semibold">700 AED/ Room</span></span>
                </div>

                <h3 className="text-xl font-semibold mb-4">Seasonality</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                    {seasons.map((season, index) => (
                        <div key={index} className={`flex items-center justify-center w-16 h-10 border rounded-full mx-1 ${season.color}`}>
                            <span>{season.month}</span>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between">
                    <div className="flex items-start">
                        <span className="w-4 h-4 bg-red-500 mt-2 rounded-full inline-block mr-2"></span>
                        <div>
                            <p className="font-semibold">High Season</p>
                            <p className="text-gray-500">January - March</p>
                            <p className="text-gray-500">October - December</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <span className="w-4 h-4 mt-2 bg-yellow-500 rounded-full inline-block mr-2"></span>
                        <div>
                            <p className="font-semibold">Shoulder Season</p>
                            <p className="text-gray-500">April - May</p>
                            <p className="text-gray-500">September</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <span className="w-4 h-4 mt-2 bg-green-500 rounded-full inline-block mr-2"></span>
                        <div>
                            <p className="font-semibold">Low Season</p>
                            <p className="text-gray-500">June - August</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
