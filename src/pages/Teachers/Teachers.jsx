import { useState } from 'react';
import Icon from '../../components/Icon.jsx';
import Avatar from '../../components/Avatar.jsx';
import Pagination from '../../components/Pagination.jsx';
import { teachersList } from '../../data/mockData.js';
import '../../styles/list-page.css';

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
