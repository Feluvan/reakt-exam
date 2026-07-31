import { useState } from 'react';
import Icon from '../../components/Icon.jsx';
import Avatar from '../../components/Avatar.jsx';
import StatusBadge from '../../components/StatusBadge.jsx';
import Pagination from '../../components/Pagination.jsx';
import AreaLineChart from '../../components/charts/AreaLineChart.jsx';
import { expensesSummary, expensesChart, expensesTable } from '../../data/mockData.js';
import '../../styles/list-page.css';
import '../Finance/Finance.css';

export default function SchoolExpenses() {
  const [query, setQuery] = useState('');

  const rows = expensesTable.filter((r) => (r.name + r.id).toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="finance-page">
      <div className="finance-top">
        <div className="card finance-chart-card">
          <div className="card-header">
            <h3 className="card-title">School Expenses</h3>
            <Icon name="dots" className="muted-icon" />
          </div>
          <AreaLineChart
            categories={expensesChart.months}
            series={[{ name: 'Expenses', color: 'var(--purple)', data: expensesChart.data, fill: true }]}
            yLabels={['100K', '75K', '50K', '25K', '0']}
            max={100000}
            highlightIndex={expensesChart.highlight.index}
            highlightContent={
              <>
                <strong>{expensesChart.highlight.value}</strong>
                <div>{expensesChart.highlight.date}, 2026</div>
              </>
            }
          />
        </div>

        <div className="finance-summary-grid">
          {expensesSummary.map((s) => (
            <div className="finance-summary-card" key={s.label} style={{ background: 'var(--purple-soft)' }}>
              <div className="finance-summary-top">
                <svg width="46" height="20" viewBox="0 0 46 20" className="sparkline">
                  <polyline points="0,6 6,14 12,4 18,16 24,10 30,18 36,8 46,16" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span className={`trend-badge trend-badge--${s.trend}`}>
                  <Icon name={s.trend === 'up' ? 'arrowUp' : 'arrowDown'} size={11} strokeWidth={2.5} />
                  {s.trendValue}
                </span>
              </div>
              <div className="stat-card-value">{s.value}</div>
              <div className="stat-card-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="list-page card finance-table-card">
        <div className="page-toolbar">
          <h1>School Expenses</h1>
          <div className="page-toolbar-actions">
            <div className="search-box">
              <Icon name="search" size={16} />
              <input
                type="text"
                placeholder="Search by Item or ID"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <span className="select-pill"><Icon name="calendar" size={14} /> This Month</span>
            <span className="select-pill">All Departments</span>
            <span className="select-pill">All Status</span>
          </div>
        </div>

        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Expense Item</th>
                <th>Category</th>
                <th>Department</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id}>
                  <td><input type="checkbox" /></td>
                  <td>
                    <div className="cell-person">
                      <Avatar name={r.name} size={38} />
                      <div>
                        <div className="cell-person-name">{r.name}</div>
                        <div className="cell-person-sub">{r.id}</div>
                      </div>
                    </div>
                  </td>
                  <td>{r.category}</td>
                  <td>{r.department}</td>
                  <td>${r.amount.toLocaleString()}</td>
                  <td>{r.date}</td>
                  <td><StatusBadge status={r.status} /></td>
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

        <Pagination totalPages={10} />
      </div>
    </div>
  );
}
