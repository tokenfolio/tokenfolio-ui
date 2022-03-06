import React from 'react';
import { NavLink } from 'react-router-dom';
import { PATH_SETTINGS_BASIC, PATH_SETTINGS_IDENTITY } from 'shared/constants';

export const navigationOptions: { [path: string]: { title: string } } = {
  [PATH_SETTINGS_BASIC]: {
    title: 'Basic info',
  },
  [PATH_SETTINGS_IDENTITY]: {
    title: 'Identity',
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
