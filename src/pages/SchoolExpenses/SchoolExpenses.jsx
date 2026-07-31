import { useState } from 'react';
import Icon from '../../components/Icon.jsx';
import Pagination from '../../components/Pagination.jsx';
import { expensesTable } from '../../data/mockData.js';
import '../../styles/list-page.css';

export default function SchoolExpenses() {
  const [query, setQuery] = useState('');

  const rows = expensesTable.filter((r) =>
    (r.id + r.expense).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="list-page card">
      <div className="page-toolbar">
        <h1>School Expenses</h1>
        <div className="page-toolbar-actions">
          <div className="search-box">
            <Icon name="search" size={16} />
            <input
              type="text"
              placeholder="Search by ID or Expense"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <span className="select-pill"><Icon name="calendar" size={14} /> April 2026</span>
          <span className="select-pill">All Categories</span>
        </div>
      </div>

      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Category</th>
              <th>Expense</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Payment Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.category}</td>
                <td>{r.expense}</td>
                <td>{r.quantity}</td>
                <td>{r.amount}</td>
                <td><span className="table-pill">{r.date}</span></td>
                <td>
                  <div className="row-actions">
                    <Icon name="edit" size={17} />
                    <Icon name="trash" size={17} />
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
