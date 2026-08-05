import Icon from '../../components/Icon.jsx';
import StatCard from '../../components/StatCard.jsx';
import DonutChart from '../../components/charts/DonutChart.jsx';
import GroupedBarChart from '../../components/charts/GroupedBarChart.jsx';
import AreaLineChart from '../../components/charts/AreaLineChart.jsx';
import MiniCalendar from '../../components/MiniCalendar.jsx';
import MessagesCard from '../../components/MessagesCard.jsx';
import './AdminDashboard.css';

const adminStats = [
  { label: 'Students', value: '2,684', trend: 'up', trendValue: '15%', color: 'purple' },
  { label: 'Teachers', value: '187', trend: 'down', trendValue: '3%', color: 'yellow' },
  { label: 'Staffs', value: '96', trend: 'down', trendValue: '3%', color: 'purple' },
  { label: 'Awards', value: '128', trend: 'up', trendValue: '5%', color: 'yellow' },
];

const genderSplit = [
  { label: 'Boys', value: 1262, percent: 47, color: 'var(--blue)' },
  { label: 'Girls', value: 1422, percent: 53, color: 'var(--yellow)' },
];

const attendanceWeekly = {
  categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  series: [
    { name: 'Total Present', color: 'var(--yellow)', data: [78, 82, 92, 55, 60] },
    { name: 'Total Absent', color: 'var(--blue)', data: [60, 70, 40, 78, 88] },
  ],
  highlight: { index: 2, label: '95%', sub: 'Present' },
};

const earnings = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  income: [420, 650, 480, 700, 520, 610, 540, 690, 837, 600, 720, 900],
  expense: [300, 420, 350, 480, 380, 430, 400, 460, 500, 420, 470, 430],
  highlight: { index: 8, date: 'Sep 14', income: '$837,000', expense: '$500,000' },
};

const olympicStudents = { value: '1,240', label: 'Olympic Students', trend: 'up', trendValue: '15%' };
const competitionStats = { value: '86', label: 'Competitions', trend: 'down', trendValue: '8%' };

const agendaAdmin = [
  { time: '08:00 am', tag: 'All Grade', title: 'Homeroom & Announcement', color: 'purple' },
  { time: '10:00 am', tag: 'Grade 3-5', title: 'Math Review & Practice', color: 'yellow' },
  { time: '10:30 am', tag: 'Grade 6-8', title: 'Science Experiment & Discussion', color: 'blue' },
];

const messagesAdmin = [
  { name: 'Dr. Lila Ramirez', time: '9:00 AM', text: 'Please ensure the monthly attendance report is accurate before the deadline.' },
  { name: 'Ms. Heather Morris', time: '10:15 AM', text: "Don't forget the staff training on digital tools scheduled for Friday at 3 PM." },
  { name: 'Mr. Carl Jenkins', time: '2:00 PM', text: 'Budget review meeting for the next fiscal year is on Thursday at 10 AM.' },
];

const studentActivity = [
  { icon: 'ribbon', title: 'Regional Robotics Champion', text: 'Winning robots triumph in engineering challenge', time: '2 days ago' },
  { icon: 'ribbon', title: 'Won Regional Debate Competition', text: "Debate team's compelling arguments reach national stage", time: '10 hours ago' },
  { icon: 'ribbon', title: '2nd Place at Science State Fair', text: 'Science Club claims silver at science showcase', time: '3 weeks ago' },
];

const noticeBoard = [
  { title: 'Math Olympiad Competition', date: '04/18/2026', by: 'Ms. Jackson (Math Teacher)', views: '325' },
  { title: 'Yearbook Photo Submissions Wanted', date: '04/15/2026', by: 'Yearbook Committee', views: '587' },
  { title: 'Reminder: School Play Auditions This Week', date: '04/12/2026', by: 'Mr. Rodriguez (Drama Teacher)', views: '1.2K' },
  { title: 'Lost and Found Overflowing!', date: '04/10/2026', by: 'School Administration', views: '492' },
];

const recentActivityAdmin = [
  { name: 'Ms. Johnson', text: 'assigned new English Literature homework', time: '20 minutes ago' },
  { name: 'David Lee', text: 'already submitted quiz in History', time: '1 hour ago' },
  { name: 'Permission Slip Reminder', text: 'Science Museum Field Trip', time: '3 hours ago' },
];

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
                <span className="activity-icon"><Icon name={a.icon} size={18} /></span>
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
