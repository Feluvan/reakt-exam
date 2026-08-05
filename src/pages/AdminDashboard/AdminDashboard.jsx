import Icon from '../../components/Icon.jsx';
import StatCard from '../../components/StatCard.jsx';
import DonutChart from '../../components/charts/DonutChart.jsx';
import GroupedBarChart from '../../components/charts/GroupedBarChart.jsx';
import AreaLineChart from '../../components/charts/AreaLineChart.jsx';
import MiniCalendar from '../../components/MiniCalendar.jsx';
import MessagesCard from '../../components/MessagesCard.jsx';
import './AdminDashboard.css';

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <div className="dashboard-top">
        <div className="dashboard-main">
          <div className="stats-row">
            <StatCard label="Students" value="2,684" trend="up" trendValue="15%" color="purple" />
            <StatCard label="Teachers" value="187" trend="down" trendValue="3%" color="yellow" />
            <StatCard label="Staffs" value="96" trend="down" trendValue="3%" color="purple" />
            <StatCard label="Awards" value="128" trend="up" trendValue="5%" color="yellow" />
          </div>

          <div className="row-2col">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Students</h3>
                <Icon name="dots" className="muted-icon" />
              </div>
              <div className="students-donut-wrap">
                <DonutChart
                  segments={[
                    { label: 'Boys', value: 1262, percent: 47, color: 'var(--blue)' },
                    { label: 'Girls', value: 1422, percent: 53, color: 'var(--yellow)' },
                  ]}
                  centerValue={<Icon name="users" size={28} />}
                  size={160}
                  thickness={18}
                />
                <div className="legend students-legend">
                  <div className="legend-item">
                    <span className="legend-dot legend-dot--blue" />
                    <div>
                      <div className="legend-value">1,262</div>
                      <div>Boys (47%)</div>
                    </div>
                  </div>
                  <div className="legend-item">
                    <span className="legend-dot legend-dot--yellow" />
                    <div>
                      <div className="legend-value">1,422</div>
                      <div>Girls (53%)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Attendance</h3>
                <div className="legend">
                  <div className="legend-item">
                    <span className="legend-dot legend-dot--yellow" />
                    Total Present
                  </div>
                  <div className="legend-item">
                    <span className="legend-dot legend-dot--blue" />
                    Total Absent
                  </div>
                </div>
              </div>
              <GroupedBarChart
                categories={['Mon', 'Tue', 'Wed', 'Thu', 'Fri']}
                series={[
                  { name: 'Total Present', color: 'var(--yellow)', data: [78, 82, 92, 55, 60] },
                  { name: 'Total Absent', color: 'var(--blue)', data: [60, 70, 40, 78, 88] },
                ]}
                max={100}
                highlightIndex={2}
                highlightContent={
                  <>
                    <strong>95%</strong>
                    <div>Present</div>
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
                  <div className="legend-item"><span className="legend-dot legend-dot--blue" />Income</div>
                  <div className="legend-item"><span className="legend-dot legend-dot--purple" />Expense</div>
                </div>
              </div>
              <AreaLineChart
                categories={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
                series={[
                  { name: 'Income', color: 'var(--blue)', data: [420, 650, 480, 700, 520, 610, 540, 690, 837, 600, 720, 900] },
                  { name: 'Expense', color: 'var(--purple)', data: [300, 420, 350, 480, 380, 430, 400, 460, 500, 420, 470, 430] },
                ]}
                yLabels={['1000K', '750K', '500K', '250K', '0']}
                max={1000}
                highlightIndex={8}
                highlightContent={
                  <>
                    <div>Sep 14, 2026</div>
                    <div><span className="dot dot--blue" /> $837,000</div>
                    <div><span className="dot dot--purple" /> $500,000</div>
                  </>
                }
              />
            </div>

            <div className="mini-stats-col">
              <div className="card mini-stat-card">
                <Icon name="users" className="mini-stat-icon" />
                <div className="stat-card-value">1,240</div>
                <div className="stat-card-label">Olympic Students</div>
                <span className="trend-badge trend-badge--up">
                  <Icon name="arrowUp" size={12} strokeWidth={2.5} />
                  15%
                </span>
              </div>
              <div className="card mini-stat-card">
                <Icon name="ribbon" className="mini-stat-icon" />
                <div className="stat-card-value">86</div>
                <div className="stat-card-label">Competitions</div>
                <span className="trend-badge trend-badge--down">
                  <Icon name="arrowDown" size={12} strokeWidth={2.5} />
                  8%
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-side">
          <MiniCalendar
            agenda={[
              { time: '08:00 am', tag: 'All Grade', title: 'Homeroom & Announcement', color: 'purple' },
              { time: '10:00 am', tag: 'Grade 3-5', title: 'Math Review & Practice', color: 'yellow' },
              { time: '10:30 am', tag: 'Grade 6-8', title: 'Science Experiment & Discussion', color: 'blue' },
            ]}
          />
          <MessagesCard
            messages={[
              { name: 'Dr. Lila Ramirez', time: '9:00 AM', text: 'Please ensure the monthly attendance report is accurate before the deadline.' },
              { name: 'Ms. Heather Morris', time: '10:15 AM', text: "Don't forget the staff training on digital tools scheduled for Friday at 3 PM." },
              { name: 'Mr. Carl Jenkins', time: '2:00 PM', text: 'Budget review meeting for the next fiscal year is on Thursday at 10 AM.' },
            ]}
          />
        </div>
      </div>

      <div className="admin-bottom-row">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Student Activity</h3>
            <span className="view-all-link">View All</span>
          </div>
          <div className="activity-list">
            <div className="activity-item">
              <span className="activity-icon"><Icon name="ribbon" size={18} /></span>
              <div>
                <div className="activity-title">Regional Robotics Champion</div>
                <div className="activity-text">Winning robots triumph in engineering challenge</div>
                <div className="activity-time">2 days ago</div>
              </div>
            </div>
            <div className="activity-item">
              <span className="activity-icon"><Icon name="ribbon" size={18} /></span>
              <div>
                <div className="activity-title">Won Regional Debate Competition</div>
                <div className="activity-text">Debate team's compelling arguments reach national stage</div>
                <div className="activity-time">10 hours ago</div>
              </div>
            </div>
            <div className="activity-item">
              <span className="activity-icon"><Icon name="ribbon" size={18} /></span>
              <div>
                <div className="activity-title">2nd Place at Science State Fair</div>
                <div className="activity-text">Science Club claims silver at science showcase</div>
                <div className="activity-time">3 weeks ago</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Notice Board</h3>
            <Icon name="filter" className="muted-icon" />
          </div>
          <div className="notice-list">
            <div className="notice-item">
              <span className="notice-thumb" />
              <div className="notice-body">
                <div className="notice-title">Math Olympiad Competition</div>
                <div className="notice-by">By Ms. Jackson (Math Teacher)</div>
              </div>
              <span className="notice-date">04/18/2026</span>
              <span className="notice-views">325</span>
            </div>
            <div className="notice-item">
              <span className="notice-thumb" />
              <div className="notice-body">
                <div className="notice-title">Yearbook Photo Submissions Wanted</div>
                <div className="notice-by">By Yearbook Committee</div>
              </div>
              <span className="notice-date">04/15/2026</span>
              <span className="notice-views">587</span>
            </div>
            <div className="notice-item">
              <span className="notice-thumb" />
              <div className="notice-body">
                <div className="notice-title">Reminder: School Play Auditions This Week</div>
                <div className="notice-by">By Mr. Rodriguez (Drama Teacher)</div>
              </div>
              <span className="notice-date">04/12/2026</span>
              <span className="notice-views">1.2K</span>
            </div>
            <div className="notice-item">
              <span className="notice-thumb" />
              <div className="notice-body">
                <div className="notice-title">Lost and Found Overflowing!</div>
                <div className="notice-by">By School Administration</div>
              </div>
              <span className="notice-date">04/10/2026</span>
              <span className="notice-views">492</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Recent Activity</h3>
            <span className="view-all-link">View All</span>
          </div>
          <div className="recent-list">
            <div className="recent-item">
              <span className="recent-dot" />
              <div>
                <div className="recent-text"><strong>Ms. Johnson</strong> assigned new English Literature homework</div>
                <div className="recent-time">20 minutes ago</div>
              </div>
            </div>
            <div className="recent-item">
              <span className="recent-dot" />
              <div>
                <div className="recent-text"><strong>David Lee</strong> already submitted quiz in History</div>
                <div className="recent-time">1 hour ago</div>
              </div>
            </div>
            <div className="recent-item">
              <span className="recent-dot" />
              <div>
                <div className="recent-text"><strong>Permission Slip Reminder</strong> Science Museum Field Trip</div>
                <div className="recent-time">3 hours ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
