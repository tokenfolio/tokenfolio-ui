import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import DashboardLayout from 'pages/dashboard/DashboardLayout';
import Dashboard from 'pages/dashboard/dashboard/Dashboard';
import Wallet from 'pages/dashboard/wallet/Wallet';
import Logout from 'pages/Logout';
import NotFound from 'pages/error/NotFound';
import { AUTH0_CONFIG, PATH_DASHBOARD, PATH_LOGOUT, PATH_WALLET } from 'shared/constants';
import store from 'shared/store/store';

const App = () => (
  <Auth0Provider domain={AUTH0_CONFIG.domain} clientId={AUTH0_CONFIG.clientId} redirectUri={window.location.origin}>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={PATH_DASHBOARD} element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path={PATH_WALLET} element={<Wallet />} />
          </Route>
          <Route path={PATH_LOGOUT} element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </Auth0Provider>
);

export default App;
