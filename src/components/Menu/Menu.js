import React from 'react';
import './menu.css';
import { NavLink } from "react-router-dom";
import { routes } from "../../routes/routes";

export const Menu = () => {
  const getMenuItem = (menuItem, path) => {
    return (
      <li key={ menuItem } className='routing-link'>
        <NavLink to={ path }>
          { menuItem }
        </NavLink>
      </li>
    )
  }

  return (
    <ul>
      { routes.map(({ menuItem, path }) => menuItem && getMenuItem(menuItem, path)) }
    </ul>
  )
};
