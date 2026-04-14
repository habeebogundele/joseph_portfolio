import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        background: "#0a0a0a",
        color: "#f5f5f5",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Page not found</h1>
      <Link href="/" style={{ color: "#c9a227" }}>
        Back to home
      </Link>
    </main>
  );
}
