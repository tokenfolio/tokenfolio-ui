import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  PAGES,
  PATH_ACTIVE_DEALS,
  PATH_ALLOCATION_STAKING,
  PATH_DASHBOARD,
  PATH_SUPPORT,
  PATH_TOKEN_SALES,
  PATH_WALLET,
} from 'shared/constants';
import 'pages/dashboard/Dashboard.scss';
import tokenfolioLogo from 'shared/assets/tokenfolio-black.svg';
import { ReactComponent as DashboardIcon } from 'shared/assets/dashboard-icon.svg';
import { ReactComponent as WalletIcon } from 'shared/assets/wallet-icon.svg';
import { ReactComponent as ActiveDealsIcon } from 'shared/assets/active-deals-icon.svg';
import { ReactComponent as TokenSalesIcon } from 'shared/assets/token-sales-icon.svg';
import { ReactComponent as AllocationStakingIcon } from 'shared/assets/allocation-staking-icon.svg';

const menuOptions: {
  path: string;
  icon: React.ElementType;
}[] = [
  {
    path: PATH_DASHBOARD,
    icon: DashboardIcon,
  },
  {
    path: PATH_WALLET,
    icon: WalletIcon,
  },
  {
    path: PATH_ACTIVE_DEALS,
    icon: ActiveDealsIcon,
  },
  {
    path: PATH_TOKEN_SALES,
    icon: TokenSalesIcon,
  },
  {
    path: PATH_ALLOCATION_STAKING,
    icon: AllocationStakingIcon,
  },
];

const LeftNavigation: React.FC = () => (
  <nav className="h-screen w-72 fixed">
    <figure className="mx-8 my-12">
      <Link to="/">
        <img className="w-32 h-32" src={tokenfolioLogo} alt="Tokenfolio" />
      </Link>
    </figure>
    <div className="left-navigation__menu">
      {menuOptions.map(({ path, icon: Icon }) => (
        <NavLink
          className={({ isActive }) => `${isActive ? 'active' : ''} flex items-center gap-2`}
          key={path}
          to={path}
        >
          <Icon className="left-navigation__menu__icon mb-1" />
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
