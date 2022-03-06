import React from 'react';
import DashboardSectionWrapper from 'pages/dashboard/DashboardSectionWrapper';
import KycVerifiedCheck from 'pages/dashboard/components/KycVerifiedCheck';

const TokenSales: React.FC = () => (
  <>
    <DashboardSectionWrapper maxWidth={740}>
      <KycVerifiedCheck />
    </DashboardSectionWrapper>
    <div />
  </>
);

export default TokenSales;
