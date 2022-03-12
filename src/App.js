import "./App.css";
import Navbar from "./components/navbar";
import ChatBody from "./components/chat/chatBody/ChatBody";

function App() {
  return (
    <div className="main_container">
      <Navbar />
      <div className="main_content">
        <ChatBody />
      </div>
    </div>
  );
}

export default App;
