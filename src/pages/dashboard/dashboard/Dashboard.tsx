import React from 'react';
import DashboardSectionWrapper from 'pages/dashboard/DashboardSectionWrapper';
import ProfileCompleteCheck from 'pages/dashboard/components/ProfileCompleteCheck';
import KycVerifiedCheck from 'pages/dashboard/components/KycVerifiedCheck';

const Dashboard: React.FC = () => (
  <>
    <DashboardSectionWrapper maxWidth={740}>
      <ProfileCompleteCheck />
    </DashboardSectionWrapper>
    <DashboardSectionWrapper maxWidth={740}>
      <KycVerifiedCheck />
    </DashboardSectionWrapper>
  </>
);

export default Dashboard;
