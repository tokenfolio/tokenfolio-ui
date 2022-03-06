import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
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

export default withAuthenticationRequired(Dashboard);
