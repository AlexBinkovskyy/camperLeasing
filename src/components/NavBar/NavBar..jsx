import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <nav className={style.wrapper}>
      <ul className={style.list}>
        <li className={style.listItem}>
          <Link to="/catalog">
            <span>Catalog</span>
          </Link>
        </li>
        <li className={style.listItem}>
          <Link to="/favorite">
            <span>Favorite</span>
          </Link>
        </li>
        <li className={style.listItem}>
          <Link to="/">
            <span>Back to Home</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
