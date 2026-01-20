import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardForm from "../components/CardForm";
import { getCards, updateCard } from "../services/api";

export default function EditCard() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    image: "",
  });

  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadCard() {
      try {
        setLoading(true);
        const data = await getCards();
        const card = data.find((c) => String(c.id) === id);

        if (!card) {
          setError("Card not found");
          return;
        }

        setValues({
          name: card.card_name ?? card.name,
          image: card.card_pic ?? card.image ?? "",
        });
      } catch (err) {
        setError("Failed to load card");
      } finally {
        setLoading(false);
      }
    }

    loadCard();
  }, [id]);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit() {
    try {
      setBusy(true);
      setError("");

      // ✅ map frontend fields to backend fields
      await updateCard(id, {
        card_name: values.name,
        card_pic: values.image,
      });

      navigate("/cards");
    } catch (err) {
      setError("Failed to update card");
    } finally {
      setBusy(false);
    }
  }

  if (loading) {
    return <p>Loading card...</p>;
  }

  return (
    <main>
      <CardForm
        values={values}
        onChange={handleChange}
        onSubmit={handleSubmit}
        busy={busy}
        error={error}
        submitText="Edit Card"
      />
    </main>
  );
}
