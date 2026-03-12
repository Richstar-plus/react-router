import { Outlet } from "react-router-dom";
import { MainNavigation } from "../components/MainNavigation";
import styles from "../Root.module.css";


export function RootLayout() {

  return (
  <>
    <MainNavigation />
    <main className={styles.content}>
      <Outlet />
    </main>
  </>
  );
}