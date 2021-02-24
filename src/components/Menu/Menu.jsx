import React from 'react';
import { NavLink } from 'react-router-dom';

import { routes } from 'routes';

import './menu.css';

export const Menu = () => {
  const getMenuItem = (menuItem, path) => (
    <li key={menuItem} className="routing-link">
      <NavLink to={path} activeClassName="active" exact>
        {menuItem}
      </NavLink>
    </li>
  );

  return (
    <ul>
      {routes.map(({ menuItem, path }) => menuItem && getMenuItem(menuItem, path))}
    </ul>
  );
};
