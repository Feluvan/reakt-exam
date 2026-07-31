import { useState } from 'react';
import Icon from '../../components/Icon.jsx';
import Avatar from '../../components/Avatar.jsx';
import StatusBadge from '../../components/StatusBadge.jsx';
import Pagination from '../../components/Pagination.jsx';
import AreaLineChart from '../../components/charts/AreaLineChart.jsx';
import { feesSummary, feesChart, feesTable } from '../../data/mockData.js';
import '../../styles/list-page.css';
import './Finance.css';

export default function Finance() {
  const [query, setQuery] = useState('');

  const rows = feesTable.filter((r) => (r.name + r.id).toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="finance-page">
      <div className="finance-top">
        <div className="card finance-chart-card">
          <div className="card-header">
            <h3 className="card-title">Fees Collection</h3>
            <Icon name="dots" className="muted-icon" />
          </div>
          <AreaLineChart
            categories={feesChart.months}
            series={[{ name: 'Fees', color: 'var(--yellow-deep)', data: feesChart.data, fill: true }]}
            yLabels={['200K', '150K', '100K', '50K', '0']}
            max={200000}
            highlightIndex={feesChart.highlight.index}
            highlightContent={
              <>
                <strong>{feesChart.highlight.value}</strong>
                <div>{feesChart.highlight.date}, 2026</div>
              </>
            }
          />
        </div>

        <div className="finance-summary-grid">
          {feesSummary.map((s) => (
            <div className="finance-summary-card" key={s.label}>
              <div className="finance-summary-top">
                <svg width="46" height="20" viewBox="0 0 46 20" className="sparkline">
                  <polyline points="0,14 6,8 12,16 18,6 24,12 30,4 36,10 46,2" fill="none" stroke="currentColor" strokeWidth="2" />
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
          <h1>Fees Collection</h1>
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
            <span className="select-pill"><Icon name="calendar" size={14} /> Today</span>
            <span className="select-pill">All Classes</span>
            <span className="select-pill">All Status</span>
          </div>
        </div>

        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Student Name</th>
                <th>Class</th>
                <th>Tuition Fee</th>
                <th>Activities Fee</th>
                <th>Miscellaneous</th>
                <th>Amount</th>
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
                  <td>{r.class}</td>
                  <td>${r.tuition.toLocaleString()}</td>
                  <td>${r.activities.toLocaleString()}</td>
                  <td>${r.misc.toLocaleString()}</td>
                  <td>${r.amount.toLocaleString()}</td>
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

        <Pagination totalPages={12} />
      </div>
    </div>
  );
}
