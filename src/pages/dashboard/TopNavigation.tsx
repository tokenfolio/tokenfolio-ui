import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, useLocation } from 'react-router-dom';
import { PAGES, PATH_DASHBOARD } from 'shared/constants';
import { topNavigationOptions } from 'pages/dashboard/constants';

const TopNavigation: React.FC = () => {
  const { pathname } = useLocation();
  const { user } = useAuth0();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="h-20 flex items-center justify-between">
      <h1 className="h4">{PAGES[`/${pathname.split('/')[1]}`].title}</h1>
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
            {Object.keys(topNavigationOptions).map((path) => (
              <Link key={path} to={path}>
                {PAGES[path].title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopNavigation;
