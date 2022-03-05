import React from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import DashboardWrapper from './DashboardWrapper';

const Dashboard: React.FC = () => {
  const { logout, user } = useAuth0();

  return (
    <DashboardWrapper>
      <div>
        <h1>Welcome {user?.given_name}!</h1>
        <div>
          Logged in as {user?.name}&lt;{user?.email}&gt;
        </div>
        <button type="button" onClick={() => logout({ returnTo: window.location.origin })}>
          Logout!
        </button>
      </div>
    </DashboardWrapper>
  );
};

export default withAuthenticationRequired(Dashboard);
