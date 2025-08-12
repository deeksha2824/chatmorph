// pages/index.js
import Navbar from "../components/Navbar";
import ChatBox from "../components/ChatBox";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", paddingBottom: 240 }}>
      <Navbar />
      <main className="container" style={{ paddingTop: 28 }}>
        <h1>Full Chat View</h1>
        <p>
          This is the full-width version of our chat interface. Perfect for when chatting is your main focus.
        </p>

        <section style={{ marginTop: 18 }}>
          <div style={{ background: "var(--card)", padding: 16, borderRadius: 12 }}>
            <h2 style={{ marginBottom: 8 }}>Why Full Chat?</h2>
            <p style={{ marginBottom: 8 }}>
              The full layout gives more space for longer conversations and makes reading older messages easier.
            </p>
            <small style={{ color: "var(--muted)" }}>
              Tip: Switch to the Docked Chat layout to see the morph animation.
            </small>
          </div>
        </section>
      </main>

      <ChatBox docked={false} />
    </div>
  );
}
