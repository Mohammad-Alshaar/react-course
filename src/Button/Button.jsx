function Button() {
  const Style = {
    border: "none",
    backgroundColor: "red",
    color: "white",
    padding: "10px",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "2em",
    borderRadius: "4px",
    cursor: "pointer",
  };
  return (
    <button type="button" style={Style}>
      Click me
    </button>
  );
}
export default Button;
