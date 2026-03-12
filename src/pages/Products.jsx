import { Link } from "react-router-dom";
import styles from "../MainNavigation.module.css";


const PRODUCTS = [
  { id: "p1", name: "Product 1" },
  { id: "p2", name: "Product 2" },
  { id: "p3", name: "Product 3" },
];

export function ProductsPage() {
  return (
    <>
      <div> Products Page</div>

      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id} className={styles.list}>
            <Link to={product.id}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
