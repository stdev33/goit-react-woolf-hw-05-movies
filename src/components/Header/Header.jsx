import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <nav>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <NavLink
              to="/"
              exact="true"
              className={({ isActive }) =>
                isActive ? css.activeLink : css.link
              }
            >
              Home
            </NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                isActive ? css.activeLink : css.link
              }
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
