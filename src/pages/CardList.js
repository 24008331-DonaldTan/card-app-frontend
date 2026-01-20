import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getCards, deleteCard } from "../services/api";

export default function CardList() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadCards() {
      try {
        setLoading(true);
        const data = await getCards();
        setCards(data);
      } catch (err) {
        setError("Failed to load cards");
      } finally {
        setLoading(false);
      }
    }

    loadCards();
  }, []);

  async function handleDelete(id) {
    if (!window.confirm("Delete this card?")) return;

    try {
      setBusy(true);
      await deleteCard(id);
      setCards(cards.filter((card) => card.id !== id));
    } catch (err) {
      setError("Failed to delete card");
    } finally {
      setBusy(false);
    }
  }

  if (loading) {
    return <p>Loading cards...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <main style={styles.container}>
      <h2>All Cards</h2>

      {cards.length === 0 && <p>No cards found.</p>}

      <div style={styles.grid}>
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onDelete={handleDelete}
            busy={busy}
          />
        ))}
      </div>
    </main>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "15px",
    marginTop: "15px",
  },
};

