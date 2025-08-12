// pages/docked.js
import Navbar from "../components/Navbar";
import ChatBox from "../components/ChatBox";

export default function Docked() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", paddingBottom: 120 }}>
      <Navbar />
      <main className="container" style={{ paddingTop: 28 }}>
        <h1>Docked Chat View</h1>
        <p>
          This is the compact version of our chat interface, docked neatly in the lower-right corner.
          You can minimize it to an icon and restore it anytime.
        </p>

        <section style={{ marginTop: 18 }}>
          <div style={{ background: "var(--card)", padding: 16, borderRadius: 12 }}>
            <h2 style={{ marginBottom: 8 }}>Why Docked Chat?</h2>
            <p style={{ marginBottom: 8 }}>
              The docked layout is ideal when you want to keep chatting without losing sight of other content.
              It stays accessible while taking up less space.
            </p>
            <small style={{ color: "var(--muted)" }}>
              Tip: Switch back to the full chat layout from the navigation bar to compare.
            </small>
          </div>
        </section>
      </main>

      <ChatBox docked={true} />
    </div>
  );
}
