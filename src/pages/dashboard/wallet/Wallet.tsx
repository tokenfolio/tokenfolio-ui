import React from 'react';
import DashboardWrapper from 'pages/dashboard/DashboardWrapper';
import DashboardSectionWrapper from 'pages/dashboard/DashboardSectionWrapper';
import KycVerifiedCheck from 'pages/dashboard/components/KycVerifiedCheck';

const Wallet: React.FC = () => (
  <DashboardWrapper>
    <DashboardSectionWrapper maxWidth={740}>
      <KycVerifiedCheck />
    </DashboardSectionWrapper>
  </DashboardWrapper>
);

export default Wallet;
