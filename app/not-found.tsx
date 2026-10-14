import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "1.5rem" }}>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, margin: 0 }}>
          This page could not be found
        </h1>
        <p style={{ color: "var(--color-neutral)", maxWidth: "40rem", lineHeight: "1.7" }}>
          The page you are looking for does not exist or has been moved. Please check the URL or
          return to the homepage.
        </p>
        <Link href="/" className="btn btn--primary">
          Return to Homepage
        </Link>
      </div>
    </section>
  );
}
