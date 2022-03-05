import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Dashboard from 'pages/dashboard/Dashboard';
import Logout from 'pages/Logout';
import NotFound from 'pages/404/NotFound';
import { AUTH0_CONFIG, PATH_DASHBOARD, PATH_LOGOUT } from 'shared/constants';
import { Provider } from 'react-redux';
import store from 'shared/store/store';

const App = () => (
  <Auth0Provider domain={AUTH0_CONFIG.domain} clientId={AUTH0_CONFIG.clientId} redirectUri={window.location.origin}>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path={PATH_DASHBOARD} element={<Dashboard />} />
          <Route path={PATH_LOGOUT} element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </Auth0Provider>
);

export default App;
