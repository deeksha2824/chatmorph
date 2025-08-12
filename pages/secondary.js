// pages/secondary.js
import Navbar from "../components/Navbar";
import ChatBox from "../components/ChatBox";

export default function Secondary() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", paddingBottom: 120 }}>
      <Navbar />
      <main className="container" style={{ paddingTop: 28 }}>
        <h1>Page 2 — Docked View</h1>
        <p>The chatbox is docked to the lower-right. You can minimize it to an icon and re-open it.</p>

        <section style={{ marginTop: 18 }}>
          <div style={{ background: "var(--card)", padding: 16, borderRadius: 12 }}>
            <h2 style={{ marginBottom: 8 }}>Docked chat</h2>
            <p style={{ marginBottom: 8 }}>
              The chat component persists between pages. Try typing and switching back to Home — your messages will remain.
            </p>
            <small style={{ color: "var(--muted)" }}>Use the minimize button to test the minimized state.</small>
          </div>
        </section>
      </main>

      <ChatBox docked={true} />
    </div>
  );
}
