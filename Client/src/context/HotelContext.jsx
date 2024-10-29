import React, { createContext, useState } from "react";

export const HotelContext = createContext();

export const HotelProvider = ({ children }) => {
  const [formData, setFormData] = useState({
      userId:"",
      overview: {
        basicDetails: {
          hotelName: "",
          hotelDescription: "",
          hotelWebsite: "",
          hotelRating: "",
          hotelChain: "",
          hotelBrand: "",
          selectedTags: {
            types: [],
            views: [],
            styles: {
              traditional: [],
              modern: [],
              eclectic: [],
              cultural: [],
            },
          },
        } ,
        additionalDetails: {
          isSustainable: false,
          hotelBuiltYear: "",
          lastRenovatedYear: "",
          selectedEventTypes: [],
          awards: [],
          tradeLicenseFile: null,
        },
        locationDetails: {
          addressLine1: "",
          addressLine2: "",
          city: "",
          area: "",
          poBox: "",
          country: "United Arab Emirates",
          mapLink: "",
          parkingAvailable: false,
          valetParking: false,
          accessibilityFeatures: {
            airportShuttle: false,
            metro: false,
            taxi: false,
            bus: false,
          },
        },
      },
   
    accommodation: {
        accommodations: 0,
     
    },
    pricing: {
        basePrice: "",
        mentionSeasons: false,
        highDemandMonths: [],
        midDemandMonths: [],
        lowDemandMonths: [],
      },
    offerPackage: [], 
    Amenities:{
      RoomFeatures:{},
      BusinessFeatures:{},
      RecreationalFeatures:{}  
    },
    photoVideo: {
      images: [],
      videos: [],
      videoLinks: [],
    }
    });
console.log(formData);
  return (
    <HotelContext.Provider value={{ formData, setFormData }}>
      {children}
    </HotelContext.Provider>
  );
};
