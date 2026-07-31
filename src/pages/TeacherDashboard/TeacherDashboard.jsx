import Icon from '../../components/Icon.jsx';
import MiniCalendar from '../../components/MiniCalendar.jsx';
import MessagesCard from '../../components/MessagesCard.jsx';
import DonutChart from '../../components/charts/DonutChart.jsx';
import GroupedBarChart from '../../components/charts/GroupedBarChart.jsx';
import AreaLineChart from '../../components/charts/AreaLineChart.jsx';
import StatusBadge from '../../components/StatusBadge.jsx';
import {
  teacherBanner,
  teacherStats,
  studentAttendanceDonut,
  studentPerformanceChart,
  teacherTasks,
  teachingActivity,
  studentTasks,
  agendaTeacher,
  messagesTeacher,
  recentActivityTeacher,
} from '../../data/mockData.js';
import './TeacherDashboard.css';

export default function TeacherDashboard() {
  const attendanceSegments = studentAttendanceDonut.map((s) => ({ ...s, percent: s.value }));
  const present = studentAttendanceDonut[0].value;

  return (
    <div className="teacher-dashboard">
      <div className="dashboard-top">
        <div className="dashboard-main">
          <div className="card teacher-banner">
            <h2>{teacherBanner.title}</h2>
            <div className="teacher-banner-meta">
              <span><Icon name="mail" size={14} /> {teacherBanner.email}</span>
              <span><Icon name="phone" size={14} /> {teacherBanner.phone}</span>
            </div>
          </div>

          <div className="teacher-stats-row">
            {teacherStats.map((s) => (
              <div className="teacher-stat card" key={s.label}>
                <div className="teacher-stat-top">
                  <span className="stat-card-label">{s.label}</span>
                  <span className={`trend-badge trend-badge--${s.trend}`}>
                    <Icon name={s.trend === 'up' ? 'arrowUp' : 'arrowDown'} size={11} strokeWidth={2.5} />
                    {s.trendValue}
                  </span>
                </div>
                <div className="stat-card-value">{s.value}</div>
              </div>
            ))}
          </div>

          <div className="row-2col">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Student Attendance</h3>
                <Icon name="dots" className="muted-icon" />
              </div>
              <div className="students-donut-wrap">
                <DonutChart segments={attendanceSegments} centerValue={`${present}%`} size={160} thickness={20} />
                <div className="legend">
                  {studentAttendanceDonut.map((s) => (
                    <div className="legend-item" key={s.label}>
                      <span className="legend-dot" style={{ background: s.color }} />
                      {s.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Student Performance</h3>
                <span className="select-pill">Weekly</span>
              </div>
              <div className="legend" style={{ marginBottom: 10 }}>
                {studentPerformanceChart.series.map((s) => (
                  <div className="legend-item" key={s.name}>
                    <span className="legend-dot" style={{ background: s.color }} />
                    {s.name}
                  </div>
                ))}
              </div>
              <GroupedBarChart
                categories={studentPerformanceChart.categories}
                series={studentPerformanceChart.series}
                max={100}
                highlightIndex={studentPerformanceChart.highlight.index}
                highlightContent={
                  <>
                    {studentPerformanceChart.highlight.values.map((v) => (
                      <div key={v.label}><span className="legend-dot" style={{ background: v.color }} /> {v.label}</div>
                    ))}
                  </>
                }
              />
            </div>
          </div>

          <div className="row-2col">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Tasks</h3>
                <span className="view-all-link">+ Add Task</span>
              </div>
              <ul className="task-list">
                {teacherTasks.map((t) => (
                  <li key={t.title} className="task-item">
                    <label>
                      <input type="checkbox" defaultChecked={t.done} />
                      <span className={t.done ? 'task-done' : ''}>{t.title}</span>
                    </label>
                    <div className="task-actions">
                      <span className="task-date">{t.date}</span>
                      <Icon name="edit" size={15} />
                      <Icon name="trash" size={15} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Teaching Activity</h3>
                <span className="select-pill">Monthly</span>
              </div>
              <AreaLineChart
                categories={teachingActivity.months}
                series={[{ name: 'Hours', color: 'var(--yellow-deep)', data: teachingActivity.data, fill: true }]}
                yLabels={['160', '120', '80', '40', '0']}
                max={160}
                highlightIndex={teachingActivity.highlight.index}
                highlightContent={
                  <>
                    <div>{teachingActivity.highlight.date}, 2026</div>
                    <strong>{teachingActivity.highlight.label}</strong>
                  </>
                }
              />
            </div>
          </div>
        </div>

        <div className="dashboard-side">
          <MiniCalendar agenda={agendaTeacher} />
          <MessagesCard messages={messagesTeacher} />
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Recent Activity</h3>
              <span className="view-all-link">View All</span>
            </div>
            <div className="recent-list">
              {recentActivityTeacher.map((r, i) => (
                <div className="recent-item" key={i}>
                  <span className="recent-dot" />
                  <div>
                    <div className="activity-title">{r.title}</div>
                    <div className="activity-text">{r.text}</div>
                    <div className="recent-time">{r.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="card dashboard-bottom">
        <div className="card-header">
          <h3 className="card-title">Student Tasks</h3>
          <div className="search-box" style={{ width: 240 }}>
            <Icon name="search" size={16} />
            <input type="text" placeholder="Search by Topic" />
          </div>
        </div>
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Topic</th>
                <th>Task Name</th>
                <th>Submission Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {studentTasks.map((t, i) => (
                <tr key={i}>
                  <td>
                    <div className="cell-person-name">{t.name}</div>
                    <div className="cell-person-sub">{t.topic}</div>
                  </td>
                  <td>{t.taskTopic}</td>
                  <td>{t.task}</td>
                  <td>{t.date}</td>
                  <td><StatusBadge status={t.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
