# ChatMorph — Animated Persistent Chatbox (Next.js)

A two-layout chat interface built with **Next.js** and **Framer Motion** that demonstrates smooth transitions, persistent state across pages, and a functional minimized chat state.  
Designed for a Front-End Developer assessment focusing on animation quality, UI transitions, and component persistence.

---

## ✨ Features

- **Two Layouts**
  - **Full Chat** — Full-width chat interface docked at the bottom of the page.
  - **Docked Chat** — Compact chatbox anchored to the lower-right corner.

- **Smooth Morph Animation**
  - Chat container resizes and repositions between layouts with no reloads.
  - Existing messages fade out/in during transitions.

- **Persistent State**
  - Messages and typed input are preserved when navigating between pages.

- **Minimized State**
  - Docked chat can be minimized into a small floating icon.
  - Clicking the icon restores the chat instantly.

- **Bot Interaction**
  - Simulated bot responses with random replies.
  - Animated typing indicator for realism.

- **Accessible & Responsive**
  - Keyboard send with Enter key.
  - Auto-scrolls to newest message.
  - Works on mobile and desktop.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)  
- **Animation:** [Framer Motion](https://www.framer.com/motion/)  
- **Styling:** CSS Modules + Global CSS Variables  
- **State Management:** React Context API  

---

## 🚀 Getting Started

### 1. Clone the repository

git clone <your-repo-url> chatmorph
cd chatmorph

## 2. Install dependencies
npm install


## 3. Run in development mode
npm run dev

## The app will run at:
http://localhost:8080

## 4. Build for production
npm run build
npm run start

### 📂 Project Structure
chatmorph/
│
├── components/
│   ├── ChatBox.js         # Main chat component (animated)
│   ├── Navbar.js          # Navigation bar
│   └── MinimizedIcon.js   # Icon for minimized state
│
├── context/
│   └── ChatContext.js     # Global state for messages/input/minimized
│
├── pages/
│   ├── _app.js            # Wraps app with ChatProvider
│   ├── index.js           # Full Chat layout
│   └── docked.js          # Docked Chat layout
│
├── styles/
│   ├── globals.css        # Global theme + base styles
│   ├── ChatBox.module.css # Chatbox-specific styles
│   └── Navbar.module.css  # Navbar styles
│
└── package.json

## 🎯 How It Works
The ChatBox component is persistent and shares state via ChatContext.

Navigation between / and /docked triggers Framer Motion layout animations:

Fade out content.

Morph chat container position & size.

Fade in new content.

Docked view supports minimizing to a floating button.

## 📸 Demo Flow
Open Full Chat → Send a message → See bot reply.

Switch to Docked Chat → Notice the morph animation.

Minimize → Floating button appears.

Restore → Chat reappears with all messages intact.

## 📄 License
This project is for demonstration and assessment purposes.