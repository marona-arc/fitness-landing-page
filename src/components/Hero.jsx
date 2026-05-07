import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--bg)",
      padding: "0 24px",
      textAlign: "center",
      paddingTop: "80px"
    }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: "800px", width: "100%" }}
      >
        <h1 style={{
          fontSize: "clamp(2rem, 5vw, 4rem)",
          color: "var(--text)",
          lineHeight: 1.3,
          marginBottom: 0
        }}>
          Train Hard.
        </h1>
        <h1 style={{
          fontSize: "clamp(2rem, 5vw, 4rem)",
          color: "var(--accent)",
          lineHeight: 1.3,
          marginBottom: 16
        }}>
          Live Stronger.
        </h1>
        <p style={{
          color: "var(--text-muted)",
          fontSize: "1.2rem",
          marginBottom: 32
        }}>
          Your fitness journey starts here. No excuses.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "14px 36px",
            background: "var(--accent)",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontSize: "1rem",
            cursor: "pointer"
          }}
        >
          Get Started Free
        </motion.button>
      </motion.div>
    </section>
  );
}