import Icon from '../../components/Icon.jsx';
import StatCard from '../../components/StatCard.jsx';
import DonutChart from '../../components/charts/DonutChart.jsx';
import GroupedBarChart from '../../components/charts/GroupedBarChart.jsx';
import AreaLineChart from '../../components/charts/AreaLineChart.jsx';
import MiniCalendar from '../../components/MiniCalendar.jsx';
import MessagesCard from '../../components/MessagesCard.jsx';
import {
  adminStats,
  genderSplit,
  attendanceWeekly,
  earnings,
  olympicStudents,
  competitionStats,
  agendaAdmin,
  messagesAdmin,
  studentActivity,
  noticeBoard,
  recentActivityAdmin,
} from '../../data/mockData.js';
import './AdminDashboard.css';

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <div className="dashboard-top">
        <div className="dashboard-main">
          <div className="stats-row">
            {adminStats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>

          <div className="row-2col">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Students</h3>
                <Icon name="dots" className="muted-icon" />
              </div>
              <div className="students-donut-wrap">
                <DonutChart
                  segments={genderSplit}
                  centerValue={<Icon name="users" size={28} />}
                  size={160}
                  thickness={18}
                />
                <div className="legend students-legend">
                  {genderSplit.map((g) => (
                    <div className="legend-item" key={g.label}>
                      <span className="legend-dot" style={{ background: g.color }} />
                      <div>
                        <div className="legend-value">{g.value.toLocaleString()}</div>
                        <div>{g.label} ({g.percent}%)</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Attendance</h3>
                <div className="legend">
                  {attendanceWeekly.series.map((s) => (
                    <div className="legend-item" key={s.name}>
                      <span className="legend-dot" style={{ background: s.color }} />
                      {s.name}
                    </div>
                  ))}
                </div>
              </div>
              <GroupedBarChart
                categories={attendanceWeekly.categories}
                series={attendanceWeekly.series}
                max={100}
                highlightIndex={attendanceWeekly.highlight.index}
                highlightContent={
                  <>
                    <strong>{attendanceWeekly.highlight.label}</strong>
                    <div>{attendanceWeekly.highlight.sub}</div>
                  </>
                }
              />
            </div>
          </div>

          <div className="row-2col row-earnings">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Earnings</h3>
                <div className="legend">
                  <div className="legend-item"><span className="legend-dot" style={{ background: 'var(--blue)' }} />Income</div>
                  <div className="legend-item"><span className="legend-dot" style={{ background: 'var(--purple)' }} />Expense</div>
                </div>
              </div>
              <AreaLineChart
                categories={earnings.months}
                series={[
                  { name: 'Income', color: 'var(--blue)', data: earnings.income },
                  { name: 'Expense', color: 'var(--purple)', data: earnings.expense },
                ]}
                yLabels={['1000K', '750K', '500K', '250K', '0']}
                max={1000}
                highlightIndex={earnings.highlight.index}
                highlightContent={
                  <>
                    <div>{earnings.highlight.date}, 2026</div>
                    <div><span className="dot dot--blue" /> {earnings.highlight.income}</div>
                    <div><span className="dot dot--purple" /> {earnings.highlight.expense}</div>
                  </>
                }
              />
            </div>

            <div className="mini-stats-col">
              <div className="card mini-stat-card">
                <Icon name="users" className="mini-stat-icon" />
                <div className="stat-card-value">{olympicStudents.value}</div>
                <div className="stat-card-label">{olympicStudents.label}</div>
                <span className={`trend-badge trend-badge--${olympicStudents.trend}`}>
                  <Icon name={olympicStudents.trend === 'up' ? 'arrowUp' : 'arrowDown'} size={12} strokeWidth={2.5} />
                  {olympicStudents.trendValue}
                </span>
              </div>
              <div className="card mini-stat-card">
                <Icon name="ribbon" className="mini-stat-icon" />
                <div className="stat-card-value">{competitionStats.value}</div>
                <div className="stat-card-label">{competitionStats.label}</div>
                <span className={`trend-badge trend-badge--${competitionStats.trend}`}>
                  <Icon name={competitionStats.trend === 'up' ? 'arrowUp' : 'arrowDown'} size={12} strokeWidth={2.5} />
                  {competitionStats.trendValue}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-side">
          <MiniCalendar agenda={agendaAdmin} />
          <MessagesCard messages={messagesAdmin} />
        </div>
      </div>

      <div className="admin-bottom-row">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Student Activity</h3>
            <span className="view-all-link">View All</span>
          </div>
          <div className="activity-list">
            {studentActivity.map((a, i) => (
              <div className="activity-item" key={i}>
                <span className="activity-icon">{a.icon}</span>
                <div>
                  <div className="activity-title">{a.title}</div>
                  <div className="activity-text">{a.text}</div>
                  <div className="activity-time">{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Notice Board</h3>
            <Icon name="filter" className="muted-icon" />
          </div>
          <div className="notice-list">
            {noticeBoard.map((n, i) => (
              <div className="notice-item" key={i}>
                <span className="notice-thumb" />
                <div className="notice-body">
                  <div className="notice-title">{n.title}</div>
                  <div className="notice-by">By {n.by}</div>
                </div>
                <span className="notice-date">{n.date}</span>
                <span className="notice-views">{n.views}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Recent Activity</h3>
            <span className="view-all-link">View All</span>
          </div>
          <div className="recent-list">
            {recentActivityAdmin.map((r, i) => (
              <div className="recent-item" key={i}>
                <span className="recent-dot" />
                <div>
                  <div className="recent-text"><strong>{r.name}</strong> {r.text}</div>
                  <div className="recent-time">{r.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
