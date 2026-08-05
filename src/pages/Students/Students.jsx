import { useState } from 'react';
import Icon from '../../components/Icon.jsx';
import Avatar from '../../components/Avatar.jsx';
import Pagination from '../../components/Pagination.jsx';
import '../../styles/list-page.css';

const studentsList = [
  { name: 'Sarah Miller', email: 'smiller@schoolhub.edu', id: '2016-01-001', class: '10A', dob: '04/18/2008', phone: '(555) 101-0101', address: '101 High St, Springfield, IL' },
  { name: 'Ethan Brown', email: 'ebrown@schoolhub.edu', id: '2014-02-002', class: '12', dob: '07/22/2006', phone: '(555) 101-0102', address: '202 Lake Ave, Springfield, IL' },
  { name: 'Olivia Smith', email: 'osmith@schoolhub.edu', id: '2017-03-003', class: '9B', dob: '09/29/2010', phone: '(555) 101-0103', address: '303 River Rd, Springfield, IL' },
  { name: 'Lucas Johnson', email: 'ljohnson@schoolhub.edu', id: '2015-01-004', class: '11A', dob: '11/03/2009', phone: '(555) 101-0104', address: '404 Pine Dr, Springfield, IL' },
  { name: 'Mia Williams', email: 'mwilliams@schoolhub.edu', id: '2018-02-005', class: '8B', dob: '01/19/2007', phone: '(555) 101-0105', address: '505 Maple Ln, Springfield, IL' },
  { name: 'Noah Davis', email: 'ndavis@schoolhub.edu', id: '2015-03-006', class: '9C', dob: '05/05/2010', phone: '(555) 101-0106', address: '606 Birch Blvd, Springfield, IL' },
  { name: 'Emma Wilson', email: 'ewilson@schoolhub.edu', id: '2019-01-007', class: '7C', dob: '02/20/2007', phone: '(555) 101-0107', address: '707 Cedar Ct, Springfield, IL' },
  { name: 'Liam Thompson', email: 'lthomps@schoolhub.edu', id: '2017-02-008', class: '10B', dob: '08/28/2011', phone: '(555) 101-0108', address: '808 Walnut St, Springfield, IL' },
  { name: 'Ava Garcia', email: 'agarcia@schoolhub.edu', id: '2016-03-009', class: '11A', dob: '03/15/2009', phone: '(555) 101-0109', address: '909 Spruce Way, Springfield, IL' },
  { name: 'James Martinez', email: 'jmartinez@schoolhub.edu', id: '2018-01-010', class: '7B', dob: '12/12/2008', phone: '(555) 101-0110', address: '1010 Fir St, Springfield, IL' },
];

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
