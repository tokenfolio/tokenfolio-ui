import React from 'react';
import { Coins, Gavel, HelpCircle, Layers, LayoutDashboard, Settings, Wallet } from 'lucide-react';
import {
  PATH_ACTIVE_DEALS,
  PATH_ALLOCATION_STAKING,
  PATH_DASHBOARD,
  PATH_LOGOUT,
  PATH_SETTINGS,
  PATH_SUPPORT,
  PATH_TOKEN_SALES,
  PATH_WALLET,
} from 'shared/constants';

export const leftNavigationOptions: { [path: string]: { title: string; icon: React.ComponentType } } = {
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
};

export const topNavigationOptions: { [path: string]: { title: string } } = {
  [PATH_SETTINGS]: {
    title: 'Account settings',
  },
  [PATH_LOGOUT]: {
    title: 'Logout',
  },
};
