import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import Topbar from './Topbar.jsx';
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
            <span>✉️ emailaddress@mail.com</span>
            <span>📞 +1 234 5678</span>
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
