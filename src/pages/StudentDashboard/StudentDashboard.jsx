import Icon from '../../components/Icon.jsx';
import MiniCalendar from '../../components/MiniCalendar.jsx';
import MessagesCard from '../../components/MessagesCard.jsx';
import GaugeChart from '../../components/charts/GaugeChart.jsx';
import AreaLineChart from '../../components/charts/AreaLineChart.jsx';
import HorizontalBarList from '../../components/charts/HorizontalBarList.jsx';
import StatusBadge from '../../components/StatusBadge.jsx';
import './StudentDashboard.css';

const student = { name: 'Mia Williams', role: 'Student' };

const studentStats = [
  { icon: 'grid', value: '97%', label: 'Attendance', color: 'blue' },
  { icon: 'notice', value: '258+', label: 'Task Completed', color: 'purple' },
  { icon: 'edit', value: '12', label: 'Task in Progress', color: 'yellow' },
  { icon: 'ribbon', value: '245', label: 'Reward Points', color: 'pink' },
];

const studentPerformance = { gpa: 3.4, max: 4.0, percent: 85, label: '1st Semester – 6th Semester' };

const scoreActivity = {
  categories: ['Apr 10', 'Apr 11', 'Apr 12', 'Apr 13', 'Apr 14', 'Apr 15', 'Apr 16'],
  data: [55, 78, 48, 62, 70, 58, 92],
  highlight: { index: 4, value: '70%' },
};

const gradeBySubject = [
  { subject: 'Biology', value: 78 },
  { subject: 'Chemistry', value: 92 },
  { subject: 'Geography', value: 68 },
  { subject: 'History', value: 85 },
  { subject: 'Literature', value: 80 },
  { subject: 'Art', value: 94 },
];

const assignments = [
  { no: '01', task: 'Read Chapters 1-3', subject: 'English Literature', due: 'May 1, 2026', time: '09:00 AM', status: 'In Progress' },
  { no: '02', task: 'Complete Problem Set #5', subject: 'Mathematics', due: 'May 3, 2026', time: '10:30 AM', status: 'Not Started' },
  { no: '03', task: 'Write Lab Report on Acid-Base Titration', subject: 'Chemistry', due: 'May 5, 2026', time: '11:12 AM', status: 'In Progress' },
  { no: '04', task: 'Prepare for Oral Presentation', subject: 'History', due: 'May 2, 2026', time: '12:00 PM', status: 'Not Started' },
  { no: '05', task: 'Create Art Piece for Final Project', subject: 'Art', due: 'May 6, 2026', time: '03:00 PM', status: 'In Progress' },
];

const agendaStudent = [
  { time: '08:00 am', tag: 'Mathematics', title: 'Homeroom & Announcement', color: 'purple' },
  { time: '10:30 am', tag: 'Science', title: 'Science Fair Preparation', color: 'yellow' },
  { time: '01:00 pm', tag: 'History', title: 'History Documentary Viewing', color: 'blue' },
];

const messagesStudent = [
  { name: 'Ms. Carter', time: '4:15 PM', text: "Don't forget, tomorrow's lab report on titration is due by 9 AM." },
  { name: 'Jake', time: '12:30 PM', text: 'Hey, are we still meeting up after school to study for the math test?' },
  { name: 'Coach Simmons', time: '2:00 PM', text: 'Practice is moved to 5 PM today because of the assembly.' },
];

const recentActivityStudent = [
  { group: 'Today', items: [
    { icon: 'calendar', title: 'Reminder: Attending Physics Group Meeting.', time: '1:00 PM' },
    { icon: 'calendar', title: 'Reminder: Art Supplies Collection.', time: '10:30 AM' },
    { icon: 'ribbon', title: 'You got Award for 1st place student', time: '10:30 AM' },
  ]},
  { group: 'Yesterday', items: [
    { icon: 'notice', title: 'Biology with Ms. Carter Quiz Scheduled', time: '4:00 PM' },
    { icon: 'chat', title: 'Received Feedback on English Essay.', time: '9:15 AM' },
    { icon: 'edit', title: 'Submitted Mathematics Assignment.', time: '2:45 PM' },
  ]},
];

export default function StudentDashboard() {
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
                  <span><Icon name="cap" size={14} /> Grade 8</span>
                  <span><Icon name="mail" size={14} /> mia.williams@schoolhub.edu</span>
                </div>
              </div>
            </div>
            <div className="student-stats-grid">
              {studentStats.map((s) => (
                <div className={`mini-stat mini-stat--${s.color}`} key={s.label}>
                  <span className="mini-stat-emoji"><Icon name={s.icon} size={18} /></span>
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
                      <span className="activity-icon"><Icon name={it.icon} size={18} /></span>
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
