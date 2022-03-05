import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { PATH_DASHBOARD } from 'shared/constants';
import 'pages/dashboard/Dashboard.scss';
import tokenfolioLogo from 'shared/assets/tokenfolio-black.svg';
import { ReactComponent as DashboardIcon } from 'shared/assets/dashboard-icon.svg';
import { ReactComponent as WalletIcon } from 'shared/assets/wallet-icon.svg';
import { ReactComponent as ActiveDealsIcon } from 'shared/assets/active-deals-icon.svg';
import { ReactComponent as TokenSalesIcon } from 'shared/assets/token-sales-icon.svg';
import { ReactComponent as AllocationStakingIcon } from 'shared/assets/allocation-staking-icon.svg';

const menuOptions: {
  path: string;
  label: string;
  icon: React.ElementType;
}[] = [
  {
    path: PATH_DASHBOARD,
    label: 'Dashboard',
    icon: DashboardIcon,
  },
  {
    path: '/wallet',
    label: 'Wallet',
    icon: WalletIcon,
  },
  {
    path: '/deals',
    label: 'Active deals',
    icon: ActiveDealsIcon,
  },
  {
    path: '/sales',
    label: 'Token sales',
    icon: TokenSalesIcon,
  },
  {
    path: '/staking',
    label: 'Allocation staking',
    icon: AllocationStakingIcon,
  },
];

const LeftNavigation: React.FC = () => (
  <nav>
    <figure className="mx-8 my-12">
      <Link to="/">
        <img className="w-32 h-32" src={tokenfolioLogo} alt="Tokenfolio" />
      </Link>
    </figure>
    <ul className="left-navigation__menu">
      {menuOptions.map(({ path, label, icon: Icon }) => (
        <NavLink
          className={({ isActive }) => `${isActive ? 'active' : ''} flex items-center gap-2`}
          key={path}
          to={path}
        >
          <Icon className="left-navigation__menu__icon mb-1" />
          {label}
        </NavLink>
      ))}
    </ul>
  </nav>
);

export default LeftNavigation;
