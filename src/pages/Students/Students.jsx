import { useState } from 'react';
import Icon from '../../components/Icon.jsx';
import Avatar from '../../components/Avatar.jsx';
import Pagination from '../../components/Pagination.jsx';
import { studentsList } from '../../data/mockData.js';
import '../../styles/list-page.css';

export default function Students() {
  const [selected, setSelected] = useState([]);
  const [query, setQuery] = useState('');

  const toggle = (id) => {
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  };

  const rows = studentsList.filter((s) =>
    (s.name + s.id).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="list-page card">
      <div className="page-toolbar">
        <h1>All Students List</h1>
        <div className="page-toolbar-actions">
          <div className="search-box">
            <Icon name="search" size={16} />
            <input
              type="text"
              placeholder="Search by Name or ID"
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
              <th>Student Name</th>
              <th>Student ID</th>
              <th>Class</th>
              <th>DOB</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((s) => (
              <tr key={s.id} className={selected.includes(s.id) ? 'is-selected' : ''}>
                <td>
                  <input type="checkbox" checked={selected.includes(s.id)} onChange={() => toggle(s.id)} />
                </td>
                <td>
                  <div className="cell-person">
                    <Avatar name={s.name} size={38} />
                    <div>
                      <div className="cell-person-name">{s.name}</div>
                      <div className="cell-person-sub">{s.email}</div>
                    </div>
                  </div>
                </td>
                <td>{s.id}</td>
                <td>{s.class}</td>
                <td>{s.dob}</td>
                <td>{s.phone}</td>
                <td>{s.address}</td>
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

      <Pagination totalPages={12} />
    </div>
  );
}
