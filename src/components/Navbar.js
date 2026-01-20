import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header style={styles.header}>
      <strong>Card App</strong>

      <nav style={styles.nav}>
        <NavLink to="/" end style={styles.link}>
          Home
        </NavLink>

        <NavLink to="/cards" style={styles.link}>
          Cards
        </NavLink>

        <NavLink to="/cards/new" style={styles.link}>
          Add Card
        </NavLink>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    padding: "10px 20px",
    borderBottom: "1px solid #ccc",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nav: {
    display: "flex",
    gap: "15px",
  },
  link: {
    textDecoration: "none",
    color: "blue",
  },
};
