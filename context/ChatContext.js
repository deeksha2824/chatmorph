// context/ChatContext.js
import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! 👋 Welcome to our demo chat.", sender: "bot", id: 1 },
    { text: "Thanks! This looks nice.", sender: "user", id: 2 },
    { text: "Click 'Page 2' to see the docked chat animation.", sender: "bot", id: 3 }
  ]);

  const [input, setInput] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <ChatContext.Provider value={{ messages, setMessages, input, setInput, isMinimized, setIsMinimized }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
