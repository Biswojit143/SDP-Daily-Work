function AccessibleButton() {
  return (
    <button
      aria-label="Save data"
      onClick={() => alert("Saved")}
      style={{ padding: "10px 20px" }}
    >
      Save
    </button>
  );
}

export default AccessibleButton;
