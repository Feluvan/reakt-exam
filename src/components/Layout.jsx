import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import Topbar from './Topbar.jsx';
import Icon from './Icon.jsx';
import { users } from '../data/mockData.js';
import './Layout.css';

export default function Layout({ user = users.admin }) {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="app-main">
        <Topbar user={user} />
        <div className="app-content">
          <Outlet />
        </div>
        <footer className="app-footer">
          <div className="app-footer-contact">
            <span><Icon name="mail" size={14} /> emailaddress@mail.com</span>
            <span><Icon name="phone" size={14} /> +1 234 5678</span>
          </div>
          <div className="app-footer-links">
            <span>Terms of Use</span>
            <span>Privacy Policy</span>
            <span>Copyright © SchoolHub</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
