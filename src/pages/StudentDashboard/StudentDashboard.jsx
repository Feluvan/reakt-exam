import Icon from '../../components/Icon.jsx';
import MiniCalendar from '../../components/MiniCalendar.jsx';
import MessagesCard from '../../components/MessagesCard.jsx';
import GaugeChart from '../../components/charts/GaugeChart.jsx';
import AreaLineChart from '../../components/charts/AreaLineChart.jsx';
import HorizontalBarList from '../../components/charts/HorizontalBarList.jsx';
import StatusBadge from '../../components/StatusBadge.jsx';
import {
  users,
  studentStats,
  studentPerformance,
  scoreActivity,
  gradeBySubject,
  assignments,
  agendaStudent,
  messagesStudent,
  recentActivityStudent,
} from '../../data/mockData.js';
import './StudentDashboard.css';

export default function StudentDashboard() {
  const student = users.student;

  return (
    <div className="student-dashboard">
      <div className="dashboard-top">
        <div className="dashboard-main">
          <div className="welcome-row">
            <div className="card welcome-card">
              <div className="welcome-text">
                <h2>Welcome, {student.name}</h2>
                <p>Here's a quick look at your progress, tasks and upcoming schedule this week.</p>
                <div className="welcome-meta">
                  <span>🎓 Grade 8</span>
                  <span>✉️ mia.williams@schoolhub.edu</span>
                </div>
              </div>
            </div>
            <div className="student-stats-grid">
              {studentStats.map((s) => (
                <div className={`mini-stat mini-stat--${s.color}`} key={s.label}>
                  <span className="mini-stat-emoji">{s.icon}</span>
                  <div className="stat-card-value">{s.value}</div>
                  <div className="stat-card-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="row-2col">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Performance</h3>
                <Icon name="dots" className="muted-icon" />
              </div>
              <div className="performance-gauge">
                <GaugeChart percent={studentPerformance.percent} />
                <div className="performance-value">
                  <strong>{studentPerformance.gpa}</strong>
                  <span>of {studentPerformance.max} max GPA</span>
                </div>
                <div className="performance-label">{studentPerformance.label}</div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Score Activity</h3>
                <span className="select-pill">Weekly</span>
              </div>
              <AreaLineChart
                categories={scoreActivity.categories}
                series={[{ name: 'Score', color: 'var(--yellow-deep)', data: scoreActivity.data, fill: true }]}
                yLabels={['100', '75', '50', '25', '0']}
                max={100}
                highlightIndex={scoreActivity.highlight.index}
                highlightContent={<strong>{scoreActivity.highlight.value}</strong>}
              />
            </div>
          </div>

          <div className="row-2col">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Recent Activity</h3>
                <span className="view-all-link">View All</span>
              </div>
              {recentActivityStudent.map((group) => (
                <div className="recent-group" key={group.group}>
                  <div className="recent-group-label">{group.group}</div>
                  {group.items.map((it, i) => (
                    <div className="activity-item" key={i}>
                      <span className="activity-icon">{it.icon}</span>
                      <div>
                        <div className="activity-title">{it.title}</div>
                        <div className="activity-time">{it.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Grade by Subject</h3>
                <span className="select-pill">Weekly</span>
              </div>
              <HorizontalBarList data={gradeBySubject} max={100} color="var(--purple)" />
            </div>
          </div>
        </div>

        <div className="dashboard-side">
          <MiniCalendar agenda={agendaStudent} />
          <MessagesCard messages={messagesStudent} />
        </div>
      </div>

      <div className="card dashboard-bottom">
        <div className="card-header">
          <h3 className="card-title">Assignments</h3>
          <div className="search-box" style={{ width: 240 }}>
            <Icon name="search" size={16} />
            <input type="text" placeholder="Search by Subject" />
          </div>
        </div>
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Task</th>
                <th>Subject</th>
                <th>Due Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((a) => (
                <tr key={a.no}>
                  <td>{a.no}</td>
                  <td>{a.task}</td>
                  <td>{a.subject}</td>
                  <td>{a.due}</td>
                  <td>{a.time}</td>
                  <td><StatusBadge status={a.status} /></td>
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
      </div>
    </div>
  );
}
