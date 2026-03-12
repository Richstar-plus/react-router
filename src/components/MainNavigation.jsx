import { NavLink } from "react-router-dom";
import styles from "../MainNavigation.module.css";

export function MainNavigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          <li className={styles.list}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Home
            </NavLink>
          </li>
          <li className={styles.list}>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
