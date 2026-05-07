import { motion } from "framer-motion";
import { Dumbbell, Flame, Trophy } from "lucide-react";

const features = [
  { icon: <Dumbbell size={36} />, title: "Custom Workouts", desc: "Plans built for your body and goals." },
  { icon: <Flame size={36} />,    title: "Burn Calories",   desc: "High-intensity sessions that get results." },
  { icon: <Trophy size={36} />,   title: "Track Progress",  desc: "See how far you've come every week." },
];

export default function Features() {
  return (
    <section style={{ padding: "80px 24px", background: "var(--bg)" }}>
      <h2 style={{ textAlign: "center", marginBottom: 48, fontSize: "2rem", color: "var(--text)" }}>
        Why Choose Us
      </h2>
      <div style={{
        display: "flex", gap: 24,
        justifyContent: "center", flexWrap: "wrap"
      }}>
        {features.map((f, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            style={{
              background: "var(--bg-card)", border: "1px solid var(--border)",
              borderRadius: 12, padding: 32, width: 280, textAlign: "center"
            }}
          >
            <div style={{ color: "var(--accent)", marginBottom: 16 }}>{f.icon}</div>
            <h3 style={{ marginBottom: 8, color: "var(--text)" }}>{f.title}</h3>
            <p style={{ color: "var(--text-muted)" }}>{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}