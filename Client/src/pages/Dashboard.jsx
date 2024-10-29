/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import DashboardBody from '../components/dashboard-components/DashboardBody';
import DashboardLayout from '../layout/dashboard-layout';

export default function Dashboard() {
  // Sample account type - this could come from props, context, or state
  const [accountType, setAccountType] = useState('dashboard'); // options: 'dashboard', 'kids&Single-venues', 'resturent', 'multivenues'

  const renderDashboard = () => {
    if (accountType === 'dashboard') {
      return <DashboardBody handleVenues="dashboard" />;
    } else if (accountType === 'kids&Single-venues') {
      return <DashboardBody handleVenues="kids&Single-venues" />;
    } else if (accountType === 'resturent') {
      return <DashboardBody handleVenues="resturent" />;
    } else if (accountType === 'multivenues') {
      return <DashboardBody handleVenues="multivenues" />;
    } else {
      return <DashboardBody handleVenues="dashboard" />;
    }
  };

  return (
    <DashboardLayout>
      <div className="flex">
        <div className="flex-1">
          {renderDashboard()}
          {/* <DashboardVenueProfile/> */}
        </div>
      </div>
    </DashboardLayout>
  );
}
