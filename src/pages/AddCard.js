import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardForm from "../components/CardForm";
import { addCard } from "../services/api";

export default function AddCard() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    image: "",
  });

  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

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
      await addCard({
        card_name: values.name,
        card_pic: values.image,
      });

      navigate("/cards");
    } catch (err) {
      setError("Failed to add card");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main>
      <CardForm
        values={values}
        onChange={handleChange}
        onSubmit={handleSubmit}
        busy={busy}
        error={error}
        submitText="Add Card"
      />
    </main>
  );
}
