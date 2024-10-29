import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { HotelContext } from '../../context/HotelContext';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 44.837789,
    lng: -0.57918
};

const MapComponent = () => {
    // const { formData } = useContext(HotelContext);

    return (
        <div className="py-5 lg:w-3/4 w-full px-5 border-t mx-auto">

            <h2 className="text-3xl font-bold mb-4">Where We Are Located</h2>
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default MapComponent;
