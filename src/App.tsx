import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import DashboardLayout from 'pages/dashboard/DashboardLayout';
import Dashboard from 'pages/dashboard/dashboard/Dashboard';
import Wallet from 'pages/dashboard/wallet/Wallet';
import ActiveDeals from 'pages/dashboard/deals/ActiveDeals';
import TokenSales from 'pages/dashboard/tokenSales/TokenSales';
import AllocationStaking from 'pages/dashboard/staking/AllocationStaking';
import AccountSettingsLayout from 'pages/dashboard/account/AccountSettingsLayout';
import Logout from 'pages/Logout';
import NotFound from 'pages/error/NotFound';
import {
  AUTH0_CONFIG,
  PATH_ACCOUNT,
  PATH_ACTIVE_DEALS,
  PATH_ALLOCATION_STAKING,
  PATH_DASHBOARD,
  PATH_LOGOUT,
  PATH_TOKEN_SALES,
  PATH_WALLET,
} from 'shared/constants';
import store from 'shared/store/store';
import AccountBasicInfoSettings from "./pages/dashboard/account/basic/AccountBasicInfoSettings";

const App = () => (
  <Auth0Provider domain={AUTH0_CONFIG.domain} clientId={AUTH0_CONFIG.clientId} redirectUri={window.location.origin}>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={PATH_DASHBOARD} element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path={PATH_WALLET} element={<Wallet />} />
            <Route path={PATH_ACTIVE_DEALS} element={<ActiveDeals />} />
            <Route path={PATH_TOKEN_SALES} element={<TokenSales />} />
            <Route path={PATH_ALLOCATION_STAKING} element={<AllocationStaking />} />
            <Route path={PATH_ACCOUNT} element={<AccountSettingsLayout />}>
              <Route index element={<AccountBasicInfoSettings />} />
            </Route>
          </Route>
          <Route path={PATH_LOGOUT} element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </Auth0Provider>
);

export default App;
