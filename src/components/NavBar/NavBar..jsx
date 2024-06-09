import { NavLink, useLocation } from "react-router-dom";
import style from "./NavBar.module.css";
import { nanoid } from "nanoid";
import { selectFavoritesIDs } from "../../Redux/selectors";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const NavBar = () => {
  const location = useLocation();
  const favoriteTip = document.getElementsByClassName(style.favorite);
  const favoriteCount = useSelector(selectFavoritesIDs);

  useEffect(() => {
    favoriteTip[0].setAttribute(
      "data-favorite-count",
      favoriteCount.length ? `+${favoriteCount.length}` : ''
    );
  }, [favoriteCount, favoriteTip]);

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
        <li key={nanoid()} className={`${style.listItem} ${style.favorite}`}>
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
