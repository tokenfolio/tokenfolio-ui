import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from 'pages/dashboard/Dashboard';
import SignUp from 'pages/signup/SignUp';
import SignIn from 'pages/signin/SignIn';
import NotFound from 'pages/404/NotFound';

export const PATH_DASHBOARD = '/dashboard';
export const PATH_SIGNIN = '/signin';
export const PATH_SIGNUP = '/signup';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Navigate to={PATH_DASHBOARD} replace />} />
      <Route path={PATH_DASHBOARD} element={<Dashboard />} />
      <Route path={PATH_SIGNIN} element={<SignIn />} />
      <Route path="/login" element={<Navigate to={PATH_SIGNIN} replace />} />
      <Route path={PATH_SIGNUP} element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
