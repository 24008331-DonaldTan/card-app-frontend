export default function CardForm({
  values,
  onChange,
  onSubmit,
  busy,
  error,
  submitText,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>{submitText}</h2>

      {error && <p style={styles.error}>{error}</p>}

      <div style={styles.field}>
        <label>Card Name</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={onChange}
          required
        />
      </div>

      <div style={styles.field}>
        <label>Card Image URL</label>
        <input
          type="text"
          name="image"
          value={values.image}
          onChange={onChange}
        />
      </div>

      <button type="submit" disabled={busy}>
        {busy ? "Saving..." : submitText}
      </button>
    </form>
  );
}

const styles = {
  form: {
    maxWidth: "400px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  field: {
    display: "flex",
    flexDirection: "column",
  },
  error: {
    color: "red",
  },
};
