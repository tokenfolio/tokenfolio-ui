import React, { useEffect } from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { PATH_DASHBOARD } from 'shared/constants';

const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(PATH_DASHBOARD);
  }, [navigate]);

  return null;
};

export default withAuthenticationRequired(Home);
