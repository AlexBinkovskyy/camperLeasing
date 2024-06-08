import { NavLink, useLocation } from "react-router-dom";
import style from "./NavBar.module.css";
import { nanoid } from "nanoid";

export const NavBar = () => {
  const location = useLocation();

  return (
    <nav className={style.wrapper}>
      <ul className={style.list}>
        <li key={nanoid()} className={style.listItem}>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              isActive ? `${style.active} ${style.span}` : style.span
            }
          >
            Catalog
          </NavLink>
        </li>
        <li key={nanoid()} className={style.listItem}>
          <NavLink
            to="/favorite"
            className={({ isActive }) =>
              isActive ? `${style.active} ${style.span}` : style.span
            }
          >
            Favorite
          </NavLink>
        </li>
        <li key={nanoid()} className={style.listItem}>
          <NavLink
            to="/reviews"
            className={({ isActive }) =>
              isActive ? `${style.active} ${style.span}` : style.span
            }
          >
            Reviews
          </NavLink>
        </li>
        <li key={nanoid()} className={style.listItem}>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive ? `${style.active} ${style.span}` : style.span
            }
          >
            Contacts
          </NavLink>
        </li>
        {location.pathname !== "/" && (
          <li key={nanoid()} className={style.listItem}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${style.active} ${style.span}` : style.span
              }
            >
              Back to Home
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
