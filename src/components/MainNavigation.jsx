import { Link } from "react-router-dom";
import styles from "../MainNavigation.module.css"; 

export function MainNavigation() {
  return (
    <header className={styles.header}>
      <nav >
        <ul className={styles.navigation}>
          <li className={styles.list}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.list}>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
