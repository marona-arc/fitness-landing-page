export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav style={{
      position: "fixed", top: 0, width: "100%", zIndex: 100,
      background: "var(--bg)", borderBottom: "1px solid var(--border)",
      padding: "16px 32px", display: "flex",
      justifyContent: "space-between", alignItems: "center"
    }}>
      <span style={{ fontWeight: "bold", fontSize: "1.2rem", color: "var(--accent)" }}>
        FitLife
      </span>
      <button onClick={() => setDarkMode(!darkMode)} style={{
        background: "var(--bg-card)", border: "1px solid var(--border)",
        color: "var(--text)", padding: "8px 16px",
        borderRadius: 8, cursor: "pointer"
      }}>
        {darkMode ? " Light" : " Dark"}
      </button>
    </nav>
  );
}