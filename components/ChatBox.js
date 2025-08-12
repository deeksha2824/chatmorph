import { motion, AnimatePresence } from "framer-motion";
import { useChat } from "../context/ChatContext";
import styles from "../styles/ChatBox.module.css";
import { useEffect, useRef, useState } from "react";
import MinimizedIcon from "./MinimizedIcon";

let idCounter = 200;

export default function ChatBox({ docked }) {
  const { messages, setMessages, input, setInput, isMinimized, setIsMinimized } = useChat();
  const chatScroll = useRef(null);
  const [botTyping, setBotTyping] = useState(false);
  const botTimer = useRef();

  useEffect(() => {
    if (chatScroll.current) {
      chatScroll.current.scrollTop = chatScroll.current.scrollHeight;
    }
    return () => botTimer.current && clearTimeout(botTimer.current);
  }, [messages]);

  function handleSend() {
    const text = input.trim();
    if (!text) return;
    setMessages(prev => [...prev, { id: ++idCounter, text, sender: "user" }]);
    setInput("");

    setBotTyping(true);
    botTimer.current = setTimeout(() => {
      const replies = [
        "Hmm... interesting thought! 🤔",
        "I hear you! Let’s try the other layout now.",
        "Oh! You’ve got ideas 😄",
        "Cool — want to see how this looks in Docked Chat?"
      ];
      const reply = replies[Math.floor(Math.random() * replies.length)];
      setMessages(prev => [...prev, { id: ++idCounter, text: reply, sender: "bot" }]);
      setBotTyping(false);
    }, 1000 + Math.random() * 600);
  }

  const sizes = {
    home: { bottom: 0, left: 0, right: 0, height: 240, borderRadius: 0 },
    docked: { bottom: 18, right: 18, width: 360, height: 460, borderRadius: 16, left: "auto" }
  };

  return (
    <motion.div
      className={styles.chatContainer}
      layout
      initial={docked ? "docked" : "home"}
      animate={docked ? "docked" : "home"}
      variants={{
        home: { ...sizes.home, transition: { duration: 0.55, ease: "easeInOut" } },
        docked: { ...sizes.docked, transition: { duration: 0.55, ease: "easeInOut" } }
      }}
      style={{ position: "fixed", zIndex: 60 }}
    >
      {isMinimized && docked ? (
        <div className={styles.iconWrap}>
          <MinimizedIcon onClick={() => setIsMinimized(false)} />
        </div>
      ) : (
        <>
          {docked && (
            <button className={styles.minimizeBtn} onClick={() => setIsMinimized(true)}>—</button>
          )}

          <AnimatePresence mode="wait">
            {!isMinimized && (
              <motion.div
                key={docked ? "docked-content" : "home-content"}
                className={styles.chatContent}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.1 } }}
                exit={{ opacity: 0, transition: { duration: 0.25 } }}
              >
                <div className={styles.header}>
                  <div className={styles.headerLeft}>
                    <div className={styles.avatar}>💬</div>
                    <div>
                      <div className={styles.headerTitle}>
                        {docked ? "Docked Chat" : "Full Chat"}
                      </div>
                      <div className={styles.headerSubtitle}>
                        {docked ? "Compact view — try minimizing me" : "Bottom view — switch to Docked Chat"}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.chatHistory} ref={chatScroll}>
                  {messages.map(msg => (
                    <div
                      key={msg.id}
                      className={`${styles.message} ${msg.sender === "bot" ? styles.bot : styles.user}`}
                    >
                      {msg.text}
                    </div>
                  ))}

                  {botTyping && (
                    <div className={`${styles.message} ${styles.bot}`}>
                      <span className={styles.typingDot}></span>
                      <span className={styles.typingDot}></span>
                      <span className={styles.typingDot}></span>
                    </div>
                  )}
                </div>

                <div className={styles.inputArea}>
                  <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Type and hit Enter..."
                    onKeyDown={e => e.key === "Enter" && handleSend()}
                  />
                  <button onClick={handleSend}>Send</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </motion.div>
  );
}