import Icon from './Icon.jsx';
import Avatar from './Avatar.jsx';
import './Topbar.css';

export default function Topbar({ user }) {
  return (
    <header className="topbar">
      <div className="search-box topbar-search">
        <Icon name="search" size={18} />
        <input type="text" placeholder="Search" />
      </div>

      <div className="topbar-right">
        <button type="button" className="icon-btn icon-btn--ghost">
          <Icon name="chat" size={18} />
        </button>
        <button type="button" className="icon-btn icon-btn--ghost">
          <Icon name="bell" size={18} />
        </button>
        <div className="topbar-user">
          <div className="topbar-user-text">
            <span className="topbar-user-name">{user.name}</span>
            <span className="topbar-user-role">{user.role}</span>
          </div>
          <Avatar name={user.name} size={42} />
        </div>
      </div>
    </header>
  );
}
