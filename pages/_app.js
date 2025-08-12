import { ChatProvider } from "../context/ChatContext";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <ChatProvider>
      <Component {...pageProps} />
    </ChatProvider>
  );
}
