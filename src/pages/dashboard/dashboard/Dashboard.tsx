import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import DashboardWrapper from 'pages/dashboard/DashboardWrapper';
import DashboardSectionWrapper from 'pages/dashboard/DashboardSectionWrapper';
import ProfileCompleteCheck from 'pages/dashboard/dashboard/ProfileCompleteCheck';
import KycVerifiedCheck from 'pages/dashboard/dashboard/KycVerifiedCheck';

const Dashboard: React.FC = () => (
  <DashboardWrapper>
    <DashboardSectionWrapper maxWidth={740}>
      <ProfileCompleteCheck />
    </DashboardSectionWrapper>
    <DashboardSectionWrapper maxWidth={740}>
      <KycVerifiedCheck />
    </DashboardSectionWrapper>
  </DashboardWrapper>
);

export default withAuthenticationRequired(Dashboard);
