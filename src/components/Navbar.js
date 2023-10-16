import { useMemo } from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ bgColor }) => {
  const navbarStyle = useMemo(() => {
    return {
      backgroundColor: bgColor,
    };
  }, [bgColor]);

  return (
    <header className={styles.navbar} style={navbarStyle}>
      <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      <img className={styles.burgerIcon} alt="" src="/burger.svg" />
    </header>
  );
};

export default Navbar;
