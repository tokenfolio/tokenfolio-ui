import React from 'react';
import { NavLink } from 'react-router-dom';
import { PATH_SETTINGS, PATH_LOGOUT } from 'shared/constants';

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
    {Object.keys(navigationOptions).map((path) => (
      <NavLink key={path} to={path}>
        {navigationOptions[path].title}
      </NavLink>
    ))}
  </nav>
);

export default LeftNavigation;
