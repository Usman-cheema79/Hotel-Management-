// src/redux/store.js
import { createStore, combineReducers } from 'redux';

const initialFormState = {
  hotelName: '',
  hotelDescription: '',
  hotelWebsite: '',
  hotelRating: '',
  hotelChain: '',
  hotelBrand: '',
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
  additionalDetails: {
    isSustainable: false,
    hotelBuiltYear: '',
    lastRenovatedYear: '',
    selectedEventTypes: [],
    awards: [],
  },
  location: {
    addressLine1: '',
    addressLine2: '',
    city: '',
    area: '',
    poBox: '',
    country: '',
    mapLink: '',
    accessibilityFeatures: {
      airportShuttle: false,
      metro: false,
      taxi: false,
      bus: false,
    },
    parkingAvailable: false,
    valetParking: false,
  },
};

const formReducer = (state = initialFormState, action) => {
  switch (action.type) {
    case 'UPDATE_FORM':
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case 'UPDATE_TAGS':
      return {
        ...state,
        selectedTags: {
          ...state.selectedTags,
          [action.payload.category]: action.payload.tags,
        },
      };
    case 'UPDATE_STYLE_TAGS':
      return {
        ...state,
        selectedTags: {
          ...state.selectedTags,
          styles: {
            ...state.selectedTags.styles,
            [action.payload.styleCategory]: action.payload.tags,
          },
        },
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer);

export default store;
