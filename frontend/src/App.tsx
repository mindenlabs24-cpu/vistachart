import { useState } from 'react';
import { Send, Phone, Video, MoreVertical, Paperclip, Smile, Search } from 'lucide-react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="menu-icon">
            <div className="hamburger"></div>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
          </div>
          <div className="search-bar">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        
        <div className="chat-list">
          {/* Chat Item Dummy */}
          <div className="chat-item active">
            <div className="avatar">JD</div>
            <div className="chat-item-info">
              <div className="chat-item-top">
                <h4>John Doe</h4>
                <span className="time">10:30 AM</span>
              </div>
              <p className="last-message">Hey, how is the project going?</p>
            </div>
          </div>
          <div className="chat-item">
            <div className="avatar">SA</div>
            <div className="chat-item-info">
              <div className="chat-item-top">
                <h4>Sarah Adams</h4>
                <span className="time">Yesterday</span>
              </div>
              <p className="last-message">I sent the document.</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="main-chat">
        <header className="chat-header">
          <div className="chat-header-info">
            <div className="avatar">JD</div>
            <div className="contact-details">
              <h3>John Doe</h3>
              <span className="status">Online</span>
            </div>
          </div>
          <div className="chat-header-actions">
            <button className="action-btn"><Phone size={20} /></button>
            <button className="action-btn"><Video size={20} /></button>
            <button className="action-btn"><MoreVertical size={20} /></button>
          </div>
        </header>

        <div className="chat-messages">
          <div className="message received">
            <p>Hey, how is the project going?</p>
            <span className="msg-time">10:30 AM</span>
          </div>
          <div className="message sent">
            <p>It's going great! Just working on the UI now.</p>
            <span className="msg-time">10:32 AM</span>
          </div>
        </div>

        <footer className="chat-input-area">
          <button className="icon-btn"><Paperclip size={22} /></button>
          <div className="input-wrapper">
            <input 
              type="text" 
              placeholder="Write a message..." 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="icon-btn smile-btn"><Smile size={22} /></button>
          </div>
          <button className="send-btn">
            <Send size={20} />
          </button>
        </footer>
      </main>
    </div>
  );
}

export default App;
