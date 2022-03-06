import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import LeftNavigation from 'pages/dashboard/account/LeftNavigation';
import { PATH_SETTINGS, PATH_SETTINGS_BASIC } from 'shared/constants';
import 'pages/dashboard/account/AccountSettingsLayout.scss';

const AccountSettingsLayout: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === PATH_SETTINGS) navigate(PATH_SETTINGS_BASIC);
  }, [navigate, pathname]);

  return (
    <div className="grid grid-cols-6 gap-8" style={{ width: 800 }}>
      <section className="col-span-2">
        <LeftNavigation />
      </section>
      <section className="col-span-4">
        <Outlet />
      </section>
    </div>
  );
};

export default AccountSettingsLayout;
