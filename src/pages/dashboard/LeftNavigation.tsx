import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  PAGES,
  PATH_ACCOUNT,
  PATH_ACTIVE_DEALS,
  PATH_ALLOCATION_STAKING,
  PATH_DASHBOARD,
  PATH_SUPPORT,
  PATH_TOKEN_SALES,
  PATH_WALLET,
} from 'shared/constants';
import tokenfolioLogo from 'shared/assets/tokenfolio-black.svg';
import Icon from 'shared/components/Icon';

const menuOptions = [
  PATH_DASHBOARD,
  PATH_WALLET,
  PATH_ACTIVE_DEALS,
  PATH_TOKEN_SALES,
  PATH_ALLOCATION_STAKING,
  PATH_ACCOUNT,
];

const LeftNavigation: React.FC = () => (
  <nav className="h-screen w-72 fixed">
    <figure className="mx-8 my-12">
      <Link to="/">
        <img className="w-32 h-32" src={tokenfolioLogo} alt="Tokenfolio" />
      </Link>
    </figure>
    <div className="left-navigation__menu">
      {menuOptions.map((path) => (
        <NavLink
          className={({ isActive }) => `${isActive ? 'active' : ''} flex items-center gap-2`}
          key={path}
          to={path}
        >
          {PAGES[path].icon && <Icon icon={PAGES[path].icon as React.ElementType} className="mr-0.5" size={22} />}
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

export default LeftNavigation;
