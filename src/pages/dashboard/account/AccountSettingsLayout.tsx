import React from 'react';
import { Outlet } from 'react-router-dom';

const AccountSettingsLayout: React.FC = () => (
  <div>
    <aside className="">Account settings</aside>
    <section><Outlet /></section>
  </div>
);

export default AccountSettingsLayout;
