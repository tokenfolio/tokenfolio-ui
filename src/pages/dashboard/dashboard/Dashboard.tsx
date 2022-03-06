import React from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import DashboardWrapper from 'pages/dashboard/DashboardWrapper';
import DashboardSectionWrapper from 'pages/dashboard/DashboardSectionWrapper';
import ProfileCompleteCheck from 'pages/dashboard/dashboard/ProfileCompleteCheck';

const Dashboard: React.FC = () => {
  const { logout, user } = useAuth0();

  return (
    <DashboardWrapper>
      <DashboardSectionWrapper maxWidth={740}>
        <ProfileCompleteCheck />
      </DashboardSectionWrapper>
    </DashboardWrapper>
  );
};

export default withAuthenticationRequired(Dashboard);
