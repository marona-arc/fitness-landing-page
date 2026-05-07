import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section style={{
      padding: "80px 24px", background: "var(--accent)",
      textAlign: "center", color: "#fff"
    }}>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={{ fontSize: "2.5rem", marginBottom: 16 }}
      >
        Ready to Transform?
      </motion.h2>
      <p style={{ marginBottom: 32, opacity: 0.9, fontSize: "1.1rem" }}>
        Join 10,000+ members already crushing their goals.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          padding: "14px 40px", background: "#fff",
          color: "var(--accent)", border: "none",
          borderRadius: 8, fontSize: "1rem",
          fontWeight: "bold", cursor: "pointer"
        }}
      >
        Join Now — It's Free
      </motion.button>
    </section>
  );
}