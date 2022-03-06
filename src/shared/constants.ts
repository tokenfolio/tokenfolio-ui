import { Coins, Gavel, HelpCircle, Layers, LayoutDashboard, Settings, Wallet } from 'lucide-react';

export const PATH_DASHBOARD = '/';
export const PATH_WALLET = '/wallet';
export const PATH_ACTIVE_DEALS = '/deals';
export const PATH_TOKEN_SALES = '/token-sales';
export const PATH_ALLOCATION_STAKING = '/staking';
export const PATH_SETTINGS = '/settings';
export const PATH_SETTINGS_BASIC = '/settings/basic';
export const PATH_SETTINGS_IDENTITY = '/settings/identity';
export const PATH_SUPPORT = '/support';
export const PATH_LOGOUT = '/logout';

export const PAGES: { [path: string]: { title: string; icon?: React.ElementType } } = {
  [PATH_DASHBOARD]: {
    title: 'Dashboard',
    icon: LayoutDashboard,
  },
  [PATH_WALLET]: {
    title: 'Wallet',
    icon: Wallet,
  },
  [PATH_ACTIVE_DEALS]: {
    title: 'Active deals',
    icon: Gavel,
  },
  [PATH_TOKEN_SALES]: {
    title: 'Token sales',
    icon: Coins,
  },
  [PATH_ALLOCATION_STAKING]: {
    title: 'Allocation staking',
    icon: Layers,
  },
  [PATH_SETTINGS]: {
    title: 'Account settings',
    icon: Settings,
  },
  [PATH_SUPPORT]: {
    title: 'Support',
    icon: HelpCircle,
  },
  [PATH_LOGOUT]: {
    title: 'Logout',
  },
};

export const AUTH0_CONFIG = {
  domain: 'tokenfolio.eu.auth0.com',
  clientId: 'NAkEPHFTKDhHKBNY6x1ARb4DErFYQIt3',
};
