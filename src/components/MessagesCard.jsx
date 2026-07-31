import Avatar from './Avatar.jsx';
import './MessagesCard.css';

export default function MessagesCard({ messages }) {
  return (
    <div className="card messages-card">
      <div className="card-header">
        <h3 className="card-title">Messages</h3>
        <span className="view-all-link">View All</span>
      </div>
      <div className="messages-list">
        {messages.map((m, i) => (
          <div className="message-row" key={i}>
            <Avatar name={m.name} size={38} />
            <div className="message-body">
              <div className="message-top">
                <span className="message-name">{m.name}</span>
                <span className="message-time">{m.time}</span>
              </div>
              <p className="message-text">{m.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
