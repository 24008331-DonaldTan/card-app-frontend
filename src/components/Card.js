import { Link } from "react-router-dom";

export default function Card({ card, onDelete, busy }) {
  return (
    <div style={styles.card}>
      <img
        src={card.image || "https://via.placeholder.com/200"}
        alt={card.name}
        style={styles.image}
      />

      <h3>{card.name}</h3>
      <p>ID: {card.id}</p>

      <div style={styles.actions}>
        <Link to={`/cards/${card.id}/edit`}>
          <button>Edit</button>
        </Link>

        <button onClick={() => onDelete(card.id)} disabled={busy}>
          Delete
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "6px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    marginBottom: "10px",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
};
