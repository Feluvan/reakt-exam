import Icon from '../../components/Icon.jsx';
import MiniCalendar from '../../components/MiniCalendar.jsx';
import MessagesCard from '../../components/MessagesCard.jsx';
import DonutChart from '../../components/charts/DonutChart.jsx';
import GroupedBarChart from '../../components/charts/GroupedBarChart.jsx';
import AreaLineChart from '../../components/charts/AreaLineChart.jsx';
import StatusBadge from '../../components/StatusBadge.jsx';
import './TeacherDashboard.css';

const teacherBanner = {
  title: 'Your teaching classes are increasing great about 30% than last year',
  email: 'heather.morris@schoolhub.edu',
  phone: '+1 234 5678',
};

const teacherStats = [
  { label: 'Total Classes', value: '8', trend: 'up', trendValue: '15%' },
  { label: 'Total Students', value: '246', trend: 'down', trendValue: '5%' },
  { label: 'Total Hours', value: '132', trend: 'down', trendValue: '10%' },
  { label: 'Assignments Graded', value: '342', trend: 'up', trendValue: '23%' },
];

const studentAttendanceDonut = [
  { label: 'Present', value: 80, color: 'var(--purple)' },
  { label: 'Absent', value: 20, color: 'var(--yellow)' },
];

const studentPerformanceChart = {
  categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  series: [
    { name: 'Class 10', color: 'var(--blue)', data: [88, 78, 60, 85, 52] },
    { name: 'Class 11', color: 'var(--yellow)', data: [65, 82, 75, 60, 48] },
    { name: 'Class 12', color: 'var(--purple)', data: [70, 80, 80, 65, 45] },
  ],
  highlight: { index: 2, values: [{ label: '75%', color: 'var(--yellow)' }, { label: '60%', color: 'var(--blue)' }, { label: '80%', color: 'var(--purple)' }] },
};

const teacherTasks = [
  { title: 'Grade Student Essays', date: 'Apr 24, 2026', done: false },
  { title: 'Update Lesson Plans', date: 'Apr 25, 2026', done: true },
  { title: 'Attend Department Meeting', date: 'Apr 26, 2026', done: true },
  { title: 'Compile Reports for Parent-Teacher Conferences', date: 'Apr 28, 2026', done: false },
];

const teachingActivity = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  data: [95, 120, 80, 100, 90, 70, 130, 110, 60, 150, 95, 140],
  highlight: { index: 3, date: 'Apr 30', label: 'Working Hours: 120 Hours' },
};

const studentTasks = [
  { name: 'Emily Peterson', topic: 'History 11 AP World History', taskTopic: 'World War II', task: 'Essay on the Impact of WWII on Modern Europe', date: 'Apr 30, 2026', status: 'Active' },
  { name: 'Jacob Lee', topic: 'History 12', taskTopic: 'The Cold War', task: 'Research Paper on the Cuban Missile Crisis', date: 'May 5, 2026', status: 'Not Viewed' },
  { name: 'Sarah Martin', topic: 'History 10A', taskTopic: 'European Colonization', task: 'Prepare Arguments for Class Debate', date: 'Apr 29, 2026', status: 'Reviewing' },
  { name: 'Liam Johnson', topic: 'History 12', taskTopic: 'American History', task: 'Presentation on the Civil Rights Movement', date: 'May 10, 2026', status: 'Not Viewed' },
  { name: 'Olivia Smith', topic: 'History 11 AP World History', taskTopic: 'Industrial Revolution', task: 'Group Project on the Effects of Industrialization', date: 'May 3, 2026', status: 'Reviewing' },
];

const agendaTeacher = [
  { time: '08:00 am', tag: 'History 11 AP', title: 'Review Recent Test Results', color: 'purple' },
  { time: '10:00 am', tag: 'History 12', title: 'Lecture on Cold War', color: 'yellow' },
  { time: '04:30 pm', tag: 'History 10A', title: "Prepare for Tomorrow's Debate", color: 'blue' },
];

const messagesTeacher = [
  { name: 'Mrs. Allen', time: '7:30 AM', text: 'Love your idea about integrating history and English! Can we meet Thursday?' },
  { name: 'Tim Lee', time: '12:30 PM', text: 'I need help with the project outline. Could we meet during your office hours?' },
  { name: 'Principal Johnson', time: '12:30 PM', text: "Please confirm your attendance at today's 3:00 PM department head meeting." },
];

const recentActivityTeacher = [
  { title: 'Curriculum Update Submitted', text: 'Your multimedia proposal for the World History curriculum has been approved.', time: '2:00 PM' },
  { title: 'Student Grade Posted', text: 'Grades for the Civil Rights Movement presentation have been posted.', time: '9:15 AM' },
  { title: 'Department Meeting Reminder', text: 'Reminder: Department meeting at 3:30 PM today in the main conference room.', time: '8:00 AM' },
];

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
