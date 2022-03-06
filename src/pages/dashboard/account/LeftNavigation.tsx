import React from 'react';
import { NavLink } from 'react-router-dom';
import { PATH_SETTINGS, PATH_DASHBOARD, PATH_LOGOUT } from 'shared/constants';

export const navigationOptions: { [path: string]: { title: string } } = {
  [PATH_SETTINGS]: {
    title: 'Basic info',
  },
  [PATH_LOGOUT]: {
    title: 'Others',
  },
};

const LeftNavigation: React.FC = () => (
  <nav className="dashboard__account__left-navigation">
    <NavLink to={PATH_SETTINGS}>Basic settings</NavLink>
    <NavLink to={PATH_DASHBOARD}>Basic settings</NavLink>
    <NavLink to={PATH_DASHBOARD}>Basic settings</NavLink>
    <NavLink to={PATH_DASHBOARD}>Basic settings</NavLink>
    <NavLink to={PATH_DASHBOARD}>Basic settings</NavLink>
  </nav>
);

export default LeftNavigation;
