import React from 'react'
import HeroSection from '../components/hostel-preview/hero-section'
import OverviewSection from '../components/hostel-preview/overview-section'
import OffersAndPackages from '../components/hostel-preview/offer-package'
import VenuesAvailable from '../components/hostel-preview/venu-avaliable'
import AboutThisHotel from '../components/hostel-preview/about-hotel'
import Pricing from '../components/hostel-preview/pricing'
import FeaturesSection from '../components/hostel-preview/place-offers'
import EventType from '../components/hostel-preview/event-type'
import MapComponent from '../components/hostel-preview/location'
import Navbar from '../components/Navbar';


const HotelPreview = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <OverviewSection />
            <OffersAndPackages />
            <VenuesAvailable />
            <AboutThisHotel />
            <Pricing />
            <FeaturesSection />
            <EventType />
            <MapComponent />
        </div>
    )
}

export default HotelPreview