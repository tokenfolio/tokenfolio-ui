import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { PAGES, PATH_SUPPORT } from 'shared/constants';
import tokenfolioLogo from 'shared/assets/tokenfolio-black.svg';
import Icon from 'shared/components/Icon';
import { leftNavigationOptions } from 'pages/dashboard/constants';

const LeftNavigation: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <nav className="h-screen w-72 fixed">
      <figure className="mx-8 my-12">
        <Link to="/">
          <img className="w-32 h-32" src={tokenfolioLogo} alt="Tokenfolio" />
        </Link>
      </figure>
      <div className="left-navigation__menu">
        {Object.keys(leftNavigationOptions).map((path) => (
          <NavLink className={path === ` /${pathname.split('/')[1]}` ? 'active' : ''} key={path} to={path}>
            <Icon icon={PAGES[path].icon as React.ComponentType} className="mr-0.5" size={22} />
            {PAGES[path].title}
          </NavLink>
        ))}
      </div>
      <div className="absolute w-72 bottom-8 text-center">
        <Link to={PATH_SUPPORT} className="left-navigation__support-button text-left">
          {PAGES[PATH_SUPPORT].title}
          <span className="border-2 text-sm float-right font-bold border-cultured rounded-full w-6 h-6 text-center inline-block">
            ?
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default LeftNavigation;
