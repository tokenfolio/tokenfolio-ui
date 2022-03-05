import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, useLocation } from 'react-router-dom';
import { PAGES, PATH_ACCOUNT, PATH_DASHBOARD, PATH_LOGOUT } from 'shared/constants';

const TopNavigation: React.FC = () => {
  const { pathname } = useLocation();
  const { user } = useAuth0();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="h-20 flex items-center justify-between">
      <h1 className="h4">{PAGES[pathname === '/' ? PATH_DASHBOARD : pathname].title}</h1>
      <div
        className="group relative"
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <figure>
          <img
            className="top-navigation__profile__picture"
            src={user?.picture}
            alt={user?.given_name}
            referrerPolicy="no-referrer"
          />
        </figure>
        {showDropdown && (
          <div className="top-navigation__profile__dropdown">
            <div className="arrow-up border-b-white mr-2 ml-auto" />
            <Link to={PATH_ACCOUNT}>{PAGES[PATH_ACCOUNT].title}</Link>
            <Link to={PATH_LOGOUT}>{PAGES[PATH_LOGOUT].title}</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopNavigation;
