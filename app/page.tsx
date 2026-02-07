export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "system-ui, sans-serif",
        backgroundColor: "#ffffff",
        color: "#111827",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem" }}>
        Projet Hackathon
      </h1>
      <p style={{ fontSize: "1.125rem", color: "#6b7280" }}>
        Bienvenue ! Commencez par modifier cette page.
      </p>
    </main>
  );
}
