export const PATH_DASHBOARD = '/dashboard';
export const PATH_WALLET = '/wallet';
export const PATH_ACTIVE_DEALS = '/deals';
export const PATH_TOKEN_SALES = '/sales';
export const PATH_ALLOCATION_STAKING = '/staking';
export const PATH_ACCOUNT = '/account';
export const PATH_SUPPORT = '/support';
export const PATH_LOGOUT = '/logout';

export const PAGES: { [path: string]: { title: string } } = {
  [PATH_DASHBOARD]: {
    title: 'Dashboard',
  },
  [PATH_WALLET]: {
    title: 'Wallet',
  },
  [PATH_ACTIVE_DEALS]: {
    title: 'Active deals',
  },
  [PATH_TOKEN_SALES]: {
    title: 'Token sales',
  },
  [PATH_ALLOCATION_STAKING]: {
    title: 'Allocation staking',
  },
  [PATH_ACCOUNT]: {
    title: 'Account settings',
  },
  [PATH_SUPPORT]: {
    title: 'Support',
  },
  [PATH_LOGOUT]: {
    title: 'Logout',
  },
};

export const BASE_FONT_SIZE = parseInt(window.getComputedStyle(document.documentElement).fontSize, 10);

export const AUTH0_CONFIG = {
  domain: 'tokenfolio.eu.auth0.com',
  clientId: 'NAkEPHFTKDhHKBNY6x1ARb4DErFYQIt3',
};
