import { useState } from 'react';
import Icon from '../../components/Icon.jsx';
import Avatar from '../../components/Avatar.jsx';
import Pagination from '../../components/Pagination.jsx';
import '../../styles/list-page.css';

const teachersList = [
  { name: 'Ms. Elizabeth Johnson', email: 'johnson@schoolhub.edu', id: 'SJ-ENG-123', subject: 'English Literature', classes: '9A, 10B', phone: '(555) 101-0101', address: '123 Elm St, Springfield, IL' },
  { name: 'Mr. Carlos Garcia', email: 'garcia@schoolhub.edu', id: 'GRC-HIS-456', subject: 'History', classes: '8C, 11A', phone: '(555) 101-0102', address: '456 Oak Ave, Springfield, IL' },
  { name: 'Ms. Angela Jackson', email: 'jackson@schoolhub.edu', id: 'JCK-MATH-789', subject: 'Math', classes: '7A, 12 AP Calculus', phone: '(555) 101-0103', address: '789 Pine Rd, Springfield, IL' },
  { name: 'Mr. Luis Rodrigue', email: 'rodrigue@schoolhub.edu', id: 'ROD-DRA-012', subject: 'Drama', classes: 'Drama Club', phone: '(555) 101-0104', address: '012 Maple Dr, Springfield, IL' },
  { name: 'Ms. Susan Chen', email: 'chen@schoolhub.edu', id: 'CHN-SCI-345', subject: 'Science', classes: '8B, 9B Biology', phone: '(555) 101-0105', address: '345 Birch Ln, Springfield, IL' },
  { name: 'Mr. William Blake', email: 'blake@schoolhub.edu', id: 'THM-HIS-678', subject: 'History', classes: '10A, 11 AP World History', phone: '(555) 101-0106', address: '678 Cedar Blvd, Springfield, IL' },
  { name: 'Ms. Emily Lee', email: 'lee@schoolhub.edu', id: 'LEE-ENG-901', subject: 'English', classes: '7B, 8A', phone: '(555) 101-0107', address: '901 Walnut St, Springfield, IL' },
  { name: 'Mr. Fernando Davis', email: 'davis@schoolhub.edu', id: 'HER-SPA-234', subject: 'Spanish', classes: 'Spanish I, Spanish II', phone: '(555) 101-0108', address: '234 Spruce Way, Springfield, IL' },
  { name: 'Ms. Laura Lopez', email: 'lopez@schoolhub.edu', id: 'LOP-MATH-567', subject: 'Math', classes: '7C, Pre-Algebra', phone: '(555) 101-0109', address: '567 Redwood Ct, Springfield, IL' },
  { name: 'Mr. Daniel Kim', email: 'kim@schoolhub.edu', id: 'KIM-ART-890', subject: 'Art', classes: 'Art I, Art II', phone: '(555) 101-0110', address: '890 Fir St, Springfield, IL' },
];

export default function Teachers() {
  const [selected, setSelected] = useState([]);
  const [query, setQuery] = useState('');

  const toggle = (id) => {
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  };

  const rows = teachersList.filter((t) =>
    (t.name + t.id + t.subject).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="list-page card">
      <div className="page-toolbar">
        <h1>All Teachers List</h1>
        <div className="page-toolbar-actions">
          <div className="search-box">
            <Icon name="search" size={16} />
            <input
              type="text"
              placeholder="Search by ID, Name, or Subject"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <button type="button" className="icon-btn"><Icon name="filter" size={16} /></button>
          <button type="button" className="icon-btn"><Icon name="ribbon" size={16} /></button>
          <button type="button" className="icon-btn"><Icon name="plus" size={18} /></button>
        </div>
      </div>

      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Teacher Name</th>
              <th>School ID</th>
              <th>Subject</th>
              <th>Class(es)</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((t) => (
              <tr key={t.id} className={selected.includes(t.id) ? 'is-selected' : ''}>
                <td>
                  <input type="checkbox" checked={selected.includes(t.id)} onChange={() => toggle(t.id)} />
                </td>
                <td>
                  <div className="cell-person">
                    <Avatar name={t.name} size={38} />
                    <div>
                      <div className="cell-person-name">{t.name}</div>
                      <div className="cell-person-sub">{t.email}</div>
                    </div>
                  </div>
                </td>
                <td>{t.id}</td>
                <td>{t.subject}</td>
                <td>{t.classes}</td>
                <td>{t.phone}</td>
                <td>{t.address}</td>
                <td>
                  <div className="row-actions">
                    <Icon name="edit" size={17} />
                    <Icon name="trash" size={17} />
                    <Icon name="dots" size={17} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination totalPages={17} />
    </div>
  );
}
