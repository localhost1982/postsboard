import React from 'react';
import './menu.css';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes/routes';

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
