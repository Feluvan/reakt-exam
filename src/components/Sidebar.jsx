import { NavLink, Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import './Sidebar.css';

const menu = [
  { icon: 'home', label: 'Dashboard', to: '/dashboard' },
  { icon: 'cap', label: 'Teachers', to: '/teachers' },
  { icon: 'users', label: 'Students', to: '/students' },
  { icon: 'grid', label: 'Attendance', to: '/attendance' },
  {
    icon: 'dollar',
    label: 'Finance',
    children: [
      { label: 'Fees Collection', to: '/finance/fees' },
      { label: 'School Expenses', to: '/finance/expenses' },
    ],
  },
  { icon: 'notice', label: 'Notice', disabled: true },
  { icon: 'calendar', label: 'Calendar', disabled: true },
  { icon: 'book', label: 'Library', disabled: true },
  { icon: 'message', label: 'Message', disabled: true },
];

const otherMenu = [
  { icon: 'user', label: 'Profile', disabled: true },
  { icon: 'settings', label: 'Setting', disabled: true },
];

export default function Sidebar() {
  const renderItem = (item) => {
    if (item.children) {
      return (
        <div key={item.label} className="sidebar-group">
          <div className="sidebar-item sidebar-item--label">
            <Icon name={item.icon} />
            <span>{item.label}</span>
          </div>
          <div className="sidebar-submenu">
            {item.children.map((child) => (
              <NavLink
                key={child.to}
                to={child.to}
                className={({ isActive }) => `sidebar-subitem${isActive ? ' active' : ''}`}
              >
                {child.label}
              </NavLink>
            ))}
          </div>
        </div>
      );
    }

    if (item.disabled) {
      return (
        <div key={item.label} className="sidebar-item sidebar-item--disabled">
          <Icon name={item.icon} />
          <span>{item.label}</span>
        </div>
      );
    }

    return (
      <NavLink
        key={item.label}
        to={item.to}
        className={({ isActive }) => `sidebar-item${isActive ? ' active' : ''}`}
      >
        <Icon name={item.icon} />
        <span>{item.label}</span>
      </NavLink>
    );
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="sidebar-logo-mark"><Icon name="cap" size={22} /></span>
        <span>SchoolHub</span>
      </div>

      <div className="sidebar-section-label">Menu</div>
      <nav className="sidebar-nav">{menu.map(renderItem)}</nav>

      <div className="sidebar-section-label">Other</div>
      <nav className="sidebar-nav">
        {otherMenu.map(renderItem)}
        <Link to="/dashboard" className="sidebar-item">
          <Icon name="logout" />
          <span>Log out</span>
        </Link>
      </nav>

      <div className="sidebar-promo">
        <p>Let's manage your data better in your hand</p>
        <button type="button">Download the App</button>
      </div>
    </aside>
  );
}
