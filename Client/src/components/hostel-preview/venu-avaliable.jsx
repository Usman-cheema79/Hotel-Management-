import React from 'react';
import { FaMapMarkerAlt, FaUsers, FaChair } from 'react-icons/fa';
import p from '../../assets/pics/previe.svg'

const venues = [
    {
        name: 'Hotel Rooms',
        location: 'Dubai, Downtown',
        seating: '200 Sitting',
        standing: '200 Standing',
        type: 'Auditorium - Indoor & Outdoor',
        image: p,
    },
    {
        name: 'Ballroom',
        location: 'Dubai, Downtown',
        seating: '200 Sitting',
        standing: '200 Standing',
        type: 'Auditorium - Indoor & Outdoor',
        image: p,

    },
    {
        name: 'Conference',
        location: 'Dubai, Downtown',
        seating: '200 Sitting',
        standing: '200 Standing',
        type: 'Auditorium - Indoor & Outdoor',
        image: p,

    },
    {
        name: 'Auditorium',
        location: 'Dubai, Downtown',
        seating: '200 Sitting',
        standing: '200 Standing',
        type: 'Auditorium - Indoor & Outdoor',
        image: p,

    },
    {
        name: 'Restaurants',
        location: 'Dubai, Downtown',
        seating: '200 Sitting',
        standing: '200 Standing',
        type: 'Auditorium - Indoor & Outdoor',
        image: p,

    },
    {
        name: 'Club',
        location: 'Dubai, Downtown',
        seating: '200 Sitting',
        standing: '200 Standing',
        type: 'Auditorium - Indoor & Outdoor',
        image: p,

    },
];

const VenuesAvailable = () => {
    return (
        <div className=" lg:w-3/4 w-full px-5 mx-auto">

            <div className="bg-white p-4 rounded-lg">
                <h2 className="text-3xl font-bold mb-4">Venues Available</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {venues.map((venue, index) => (
                        <div key={index} className="bg-white border rounded-lg shadow-md overflow-hidden">
                            <img src={venue.image} alt={venue.name} className="w-full h-60 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{venue.name}</h3>
                                <p className="text-gray-500 mb-2"><FaMapMarkerAlt className="inline-block mr-1" /> {venue.location}</p>
                                <div className="flex justify-between text-gray-500 mb-2">
                                    <span><FaChair className="inline-block mr-1" /> {venue.seating}</span>
                                    <span><FaUsers className="inline-block mr-1" /> {venue.standing}</span>
                                </div>
                                <p className="text-gray-500">{venue.type}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 text-center">
                    <button className="text-primary font-medium">Show More</button>
                </div>
            </div>
        </div>
    );
};

export default VenuesAvailable;
