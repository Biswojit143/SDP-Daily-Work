function Button({ label, variant = "primary", onClick }) {
  const styles = {
    primary: {
      backgroundColor: "#4f46e5",
      color: "white",
    },
    secondary: {
      backgroundColor: "#e5e7eb",
      color: "#111827",
    },
  };

  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 16px",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
        fontSize: "14px",
        ...styles[variant],
      }}
    >
      {label}
    </button>
  );
}

export default Button;