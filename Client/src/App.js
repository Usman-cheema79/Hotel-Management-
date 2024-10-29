import './App.css';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; import './App.css';
import HostelListingForm from './pages/hotel-listing';
import Navbar from './components/Navbar';
import DashboardVenueProfile from './components/dashboard-components/dashboard-venue-profile/Dashboard-Venue-Profile';
import HotelPreview from './pages/hotel-preview';
import LoginPage from './pages/Login';
import VenuListingForm from './pages/venu-listing';

function App() {
  return (
    <>

      <BrowserRouter>
      {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/hostel-Listing-Form' element={<HostelListingForm />} />
          <Route path='/venu-Listing-Form' element={<VenuListingForm />} />
          <Route path='/user-Profile' element={<DashboardVenueProfile />} />
          <Route path='/hotel-preview' element={<HotelPreview />} />
          <Route path='/Login-Page' element={<LoginPage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
