import React, { useEffect } from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { PATH_DASHBOARD } from '../../shared/constants';

const Dashboard: React.FC = () => {
  const { logout, user } = useAuth0();
  const navigate = useNavigate();

  // prefer /dashboard route
  useEffect(() => {
    navigate(PATH_DASHBOARD);
  }, [navigate]);

  return (
    <main>
      <h1>Welcome to Dashboard!</h1>
      <div>
        Logged in as {user?.name}&lt;{user?.email}&gt;
      </div>
      <button type="button" onClick={() => logout({ returnTo: window.location.origin })}>
        Logout!
      </button>
    </main>
  );
};

export default withAuthenticationRequired(Dashboard);
