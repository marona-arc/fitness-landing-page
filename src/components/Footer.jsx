export default function Footer() {
  return (
    <footer style={{
      background: "var(--bg-card)",
      borderTop: "1px solid var(--border)",
      padding: "32px 24px",
      textAlign: "center",
      color: "var(--text-muted)"
    }}>
      <p style={{
        fontWeight: "bold",
        color: "var(--accent)",
        fontSize: "1.2rem",
        marginBottom: 8
      }}>
        FitLife
      </p>
      <p style={{ marginBottom: 8 }}>
        Train Hard. Live Stronger. Every day.
      </p>
      <p>© 2026 FitLife. All rights reserved.</p>
    </footer>
  );
}