import React from 'react';
import ProfileCompleteCheck from 'pages/dashboard/components/ProfileCompleteCheck';
import KycVerifiedCheck from 'pages/dashboard/components/KycVerifiedCheck';

const Dashboard: React.FC = () => (
  <>
    <ProfileCompleteCheck maxWidth={740} />
    <KycVerifiedCheck maxWidth={740} />
  </>
);

export default Dashboard;
