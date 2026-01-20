import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Card App</h1>

      <p>
        This application allows you to view, add, and edit cards stored in the
        database.
      </p>

      <nav style={{ marginTop: "1.5rem" }}>
        <Link to="/cards">View Cards</Link>
        <br />
        <Link to="/add">Add New Card</Link>
      </nav>
    </main>
  );
}
