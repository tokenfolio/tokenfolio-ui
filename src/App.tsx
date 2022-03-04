import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from 'pages/dashboard/Dashboard';
import NotFound from 'pages/404/NotFound';
import { AUTH0_CONFIG, PATH_DASHBOARD } from 'shared/constants';

const App = () => (
  <Auth0Provider domain={AUTH0_CONFIG.domain} clientId={AUTH0_CONFIG.clientId} redirectUri={window.location.origin}>
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path={PATH_DASHBOARD} element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Auth0Provider>
);

export default App;
