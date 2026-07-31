export const users = {
  admin: { name: 'Linda Adora', role: 'Admin' },
  teacher: { name: 'Heather Morris', role: 'Teacher' },
  student: { name: 'Mia Williams', role: 'Student' },
};

// ---------- ADMIN DASHBOARD ----------
export const adminStats = [
  { label: 'Students', value: '2,684', trend: 'up', trendValue: '15%', color: 'purple' },
  { label: 'Teachers', value: '187', trend: 'down', trendValue: '3%', color: 'yellow' },
  { label: 'Staffs', value: '96', trend: 'down', trendValue: '3%', color: 'purple' },
  { label: 'Awards', value: '128', trend: 'up', trendValue: '5%', color: 'yellow' },
];

export const genderSplit = [
  { label: 'Boys', value: 1262, percent: 47, color: 'var(--blue)' },
  { label: 'Girls', value: 1422, percent: 53, color: 'var(--yellow)' },
];

export const attendanceWeekly = {
  categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  series: [
    { name: 'Total Present', color: 'var(--yellow)', data: [78, 82, 92, 55, 60] },
    { name: 'Total Absent', color: 'var(--blue)', data: [60, 70, 40, 78, 88] },
  ],
  highlight: { index: 2, label: '95%', sub: 'Present' },
};

export const earnings = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  income: [420, 650, 480, 700, 520, 610, 540, 690, 837, 600, 720, 900],
  expense: [300, 420, 350, 480, 380, 430, 400, 460, 500, 420, 470, 430],
  highlight: { index: 8, date: 'Sep 14', income: '$837,000', expense: '$500,000' },
};

export const olympicStudents = { value: '1,240', label: 'Olympic Students', trend: 'up', trendValue: '15%' };
export const competitionStats = { value: '86', label: 'Competitions', trend: 'down', trendValue: '8%' };

export const agendaAdmin = [
  { time: '08:00 am', tag: 'All Grade', title: 'Homeroom & Announcement', color: 'purple' },
  { time: '10:00 am', tag: 'Grade 3-5', title: 'Math Review & Practice', color: 'yellow' },
  { time: '10:30 am', tag: 'Grade 6-8', title: 'Science Experiment & Discussion', color: 'blue' },
];

export const messagesAdmin = [
  { name: 'Dr. Lila Ramirez', time: '9:00 AM', text: 'Please ensure the monthly attendance report is accurate before the deadline.' },
  { name: 'Ms. Heather Morris', time: '10:15 AM', text: "Don't forget the staff training on digital tools scheduled for Friday at 3 PM." },
  { name: 'Mr. Carl Jenkins', time: '2:00 PM', text: 'Budget review meeting for the next fiscal year is on Thursday at 10 AM.' },
];

export const studentActivity = [
  { icon: '🏆', title: 'Regional Robotics Champion', text: 'Winning robots triumph in engineering challenge', time: '2 days ago' },
  { icon: '🥇', title: 'Won Regional Debate Competition', text: "Debate team's compelling arguments reach national stage", time: '10 hours ago' },
  { icon: '🥈', title: '2nd Place at Science State Fair', text: 'Science Club claims silver at science showcase', time: '3 weeks ago' },
];

export const noticeBoard = [
  { title: 'Math Olympiad Competition', date: '04/18/2026', by: 'Ms. Jackson (Math Teacher)', views: '325' },
  { title: 'Yearbook Photo Submissions Wanted', date: '04/15/2026', by: 'Yearbook Committee', views: '587' },
  { title: 'Reminder: School Play Auditions This Week', date: '04/12/2026', by: 'Mr. Rodriguez (Drama Teacher)', views: '1.2K' },
  { title: 'Lost and Found Overflowing!', date: '04/10/2026', by: 'School Administration', views: '492' },
];

export const recentActivityAdmin = [
  { name: 'Ms. Johnson', text: 'assigned new English Literature homework', time: '20 minutes ago' },
  { name: 'David Lee', text: 'already submitted quiz in History', time: '1 hour ago' },
  { name: 'Permission Slip Reminder', text: 'Science Museum Field Trip', time: '3 hours ago' },
];

// ---------- TEACHERS PAGE ----------
export const teachersList = [
  { name: 'Ms. Elizabeth Johnson', email: 'johnson@schoolhub.edu', id: 'SJ-ENG-123', subject: 'English Literature', classes: '9A, 10B', phone: '(555) 101-0101', address: '123 Elm St, Springfield, IL' },
  { name: 'Mr. Carlos Garcia', email: 'garcia@schoolhub.edu', id: 'GRC-HIS-456', subject: 'History', classes: '8C, 11A', phone: '(555) 101-0102', address: '456 Oak Ave, Springfield, IL' },
  { name: 'Ms. Angela Jackson', email: 'jackson@schoolhub.edu', id: 'JCK-MATH-789', subject: 'Math', classes: '7A, 12 AP Calculus', phone: '(555) 101-0103', address: '789 Pine Rd, Springfield, IL' },
  { name: 'Mr. Luis Rodrigue', email: 'rodrigue@schoolhub.edu', id: 'ROD-DRA-012', subject: 'Drama', classes: 'Drama Club', phone: '(555) 101-0104', address: '012 Maple Dr, Springfield, IL' },
  { name: 'Ms. Susan Chen', email: 'chen@schoolhub.edu', id: 'CHN-SCI-345', subject: 'Science', classes: '8B, 9B Biology', phone: '(555) 101-0105', address: '345 Birch Ln, Springfield, IL' },
  { name: 'Mr. William Blake', email: 'blake@schoolhub.edu', id: 'THM-HIS-678', subject: 'History', classes: '10A, 11 AP World History', phone: '(555) 101-0106', address: '678 Cedar Blvd, Springfield, IL' },
  { name: 'Ms. Emily Lee', email: 'lee@schoolhub.edu', id: 'LEE-ENG-901', subject: 'English', classes: '7B, 8A', phone: '(555) 101-0107', address: '901 Walnut St, Springfield, IL' },
  { name: 'Mr. Fernando Davis', email: 'davis@schoolhub.edu', id: 'HER-SPA-234', subject: 'Spanish', classes: 'Spanish I, Spanish II', phone: '(555) 101-0108', address: '234 Spruce Way, Springfield, IL' },
  { name: 'Ms. Laura Lopez', email: 'lopez@schoolhub.edu', id: 'LOP-MATH-567', subject: 'Math', classes: '7C, Pre-Algebra', phone: '(555) 101-0109', address: '567 Redwood Ct, Springfield, IL' },
  { name: 'Mr. Daniel Kim', email: 'kim@schoolhub.edu', id: 'KIM-ART-890', subject: 'Art', classes: 'Art I, Art II', phone: '(555) 101-0110', address: '890 Fir St, Springfield, IL' },
];

// ---------- STUDENTS PAGE ----------
export const studentsList = [
  { name: 'Sarah Miller', email: 'smiller@schoolhub.edu', id: '2016-01-001', class: '10A', dob: '04/18/2008', phone: '(555) 101-0101', address: '101 High St, Springfield, IL' },
  { name: 'Ethan Brown', email: 'ebrown@schoolhub.edu', id: '2014-02-002', class: '12', dob: '07/22/2006', phone: '(555) 101-0102', address: '202 Lake Ave, Springfield, IL' },
  { name: 'Olivia Smith', email: 'osmith@schoolhub.edu', id: '2017-03-003', class: '9B', dob: '09/29/2010', phone: '(555) 101-0103', address: '303 River Rd, Springfield, IL' },
  { name: 'Lucas Johnson', email: 'ljohnson@schoolhub.edu', id: '2015-01-004', class: '11A', dob: '11/03/2009', phone: '(555) 101-0104', address: '404 Pine Dr, Springfield, IL' },
  { name: 'Mia Williams', email: 'mwilliams@schoolhub.edu', id: '2018-02-005', class: '8B', dob: '01/19/2007', phone: '(555) 101-0105', address: '505 Maple Ln, Springfield, IL' },
  { name: 'Noah Davis', email: 'ndavis@schoolhub.edu', id: '2015-03-006', class: '9C', dob: '05/05/2010', phone: '(555) 101-0106', address: '606 Birch Blvd, Springfield, IL' },
  { name: 'Emma Wilson', email: 'ewilson@schoolhub.edu', id: '2019-01-007', class: '7C', dob: '02/20/2007', phone: '(555) 101-0107', address: '707 Cedar Ct, Springfield, IL' },
  { name: 'Liam Thompson', email: 'lthomps@schoolhub.edu', id: '2017-02-008', class: '10B', dob: '08/28/2011', phone: '(555) 101-0108', address: '808 Walnut St, Springfield, IL' },
  { name: 'Ava Garcia', email: 'agarcia@schoolhub.edu', id: '2016-03-009', class: '11A', dob: '03/15/2009', phone: '(555) 101-0109', address: '909 Spruce Way, Springfield, IL' },
  { name: 'James Martinez', email: 'jmartinez@schoolhub.edu', id: '2018-01-010', class: '7B', dob: '12/12/2008', phone: '(555) 101-0110', address: '1010 Fir St, Springfield, IL' },
];

// ---------- FINANCE / FEES COLLECTION ----------
export const feesSummary = [
  { label: 'Total Amount', value: '$126,450', trend: 'up', trendValue: '15%' },
  { label: 'Total Tuition', value: '$67,200', trend: 'up', trendValue: '15%' },
  { label: 'Total Activities', value: '$8,000', trend: 'down', trendValue: '8%' },
  { label: 'Total Miscellaneous', value: '$6,150', trend: 'down', trendValue: '8%' },
];

export const feesChart = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  data: [45000, 52000, 68000, 85000, 100000, 90000, 115000, 152927, 130000, 60000, 118000, 165000],
  highlight: { index: 7, date: 'Aug 19', value: '$152,927' },
};

export const feesTable = [
  { name: 'Sophia Wilson', id: '2015-02-017', class: '11A', tuition: 4500, activities: 300, misc: 200, amount: 5000, status: 'Paid' },
  { name: 'Ethan Lee', id: '2015-01-016', class: '10B', tuition: 4500, activities: 250, misc: 150, amount: 4900, status: 'Pending' },
  { name: 'Michael Brown', id: '2015-03-012', class: '12 AP Calculus', tuition: 4800, activities: 300, misc: 200, amount: 5300, status: 'Paid' },
  { name: 'Ava Smith', id: '2015-01-019', class: '9B', tuition: 4500, activities: 250, misc: 100, amount: 4850, status: 'Overdue' },
  { name: 'Lucas Johnson', id: '2015-01-004', class: '11A', tuition: 4500, activities: 300, misc: 200, amount: 5000, status: 'Paid' },
  { name: 'Isabella Garcia', id: '2015-03-015', class: '8B', tuition: 4200, activities: 200, misc: 150, amount: 4550, status: 'Pending' },
  { name: 'Oliver Martinez', id: '2015-02-014', class: 'Drama Club', tuition: 4500, activities: 350, misc: 100, amount: 4950, status: 'Paid' },
  { name: 'Hannah White', id: '2015-01-013', class: '7C', tuition: 4200, activities: 200, misc: 100, amount: 4500, status: 'Paid' },
  { name: 'Aiden Taylor', id: '2015-03-018', class: 'Spanish I', tuition: 4200, activities: 250, misc: 150, amount: 4600, status: 'Overdue' },
  { name: 'Emily Peterson', id: '2015-02-011', class: '10A', tuition: 4500, activities: 250, misc: 150, amount: 4900, status: 'Pending' },
];

// ---------- SCHOOL EXPENSES ----------
export const expensesSummary = [
  { label: 'Total Expenses', value: '$98,200', trend: 'up', trendValue: '9%' },
  { label: 'Salaries', value: '$70,400', trend: 'up', trendValue: '4%' },
  { label: 'Utilities & Maintenance', value: '$12,350', trend: 'up', trendValue: '12%' },
  { label: 'Supplies & Others', value: '$15,450', trend: 'down', trendValue: '6%' },
];

export const expensesChart = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  data: [78000, 79500, 80200, 81000, 85000, 83000, 76000, 74000, 92000, 95000, 98200, 90000],
  highlight: { index: 10, date: 'Nov 8', value: '$98,200' },
};

export const expensesTable = [
  { name: 'Teacher Salaries', id: 'EXP-001', category: 'Payroll', department: 'Administration', amount: 52000, date: 'Jul 1, 2026', status: 'Paid' },
  { name: 'Support Staff Wages', id: 'EXP-002', category: 'Payroll', department: 'Administration', amount: 18400, date: 'Jul 1, 2026', status: 'Paid' },
  { name: 'Electricity Bill', id: 'EXP-003', category: 'Utilities', department: 'Facilities', amount: 6200, date: 'Jul 5, 2026', status: 'Paid' },
  { name: 'Water & Sanitation', id: 'EXP-004', category: 'Utilities', department: 'Facilities', amount: 1850, date: 'Jul 5, 2026', status: 'Paid' },
  { name: 'Building Maintenance', id: 'EXP-005', category: 'Maintenance', department: 'Facilities', amount: 4300, date: 'Jul 10, 2026', status: 'Pending' },
  { name: 'Classroom Supplies', id: 'EXP-006', category: 'Supplies', department: 'Academics', amount: 3150, date: 'Jul 12, 2026', status: 'Paid' },
  { name: 'Library Books & Materials', id: 'EXP-007', category: 'Supplies', department: 'Library', amount: 2400, date: 'Jul 14, 2026', status: 'Pending' },
  { name: 'Sports Equipment', id: 'EXP-008', category: 'Supplies', department: 'Athletics', amount: 1900, date: 'Jul 15, 2026', status: 'Overdue' },
  { name: 'IT & Software Licenses', id: 'EXP-009', category: 'Technology', department: 'IT Dept', amount: 3600, date: 'Jul 18, 2026', status: 'Paid' },
  { name: 'Transportation Fuel', id: 'EXP-010', category: 'Transport', department: 'Operations', amount: 2700, date: 'Jul 20, 2026', status: 'Paid' },
];

// ---------- STUDENT DASHBOARD ----------
export const studentStats = [
  { icon: '🎯', value: '97%', label: 'Attendance', color: 'blue' },
  { icon: '📋', value: '258+', label: 'Task Completed', color: 'purple' },
  { icon: '📝', value: '12', label: 'Task in Progress', color: 'yellow' },
  { icon: '🏅', value: '245', label: 'Reward Points', color: 'pink' },
];

export const studentPerformance = { gpa: 3.4, max: 4.0, percent: 85, label: '1st Semester – 6th Semester' };

export const scoreActivity = {
  categories: ['Apr 10', 'Apr 11', 'Apr 12', 'Apr 13', 'Apr 14', 'Apr 15', 'Apr 16'],
  data: [55, 78, 48, 62, 70, 58, 92],
  highlight: { index: 4, value: '70%' },
};

export const gradeBySubject = [
  { subject: 'Biology', value: 78 },
  { subject: 'Chemistry', value: 92 },
  { subject: 'Geography', value: 68 },
  { subject: 'History', value: 85 },
  { subject: 'Literature', value: 80 },
  { subject: 'Art', value: 94 },
];

export const assignments = [
  { no: '01', task: 'Read Chapters 1-3', subject: 'English Literature', due: 'May 1, 2026', time: '09:00 AM', status: 'In Progress' },
  { no: '02', task: 'Complete Problem Set #5', subject: 'Mathematics', due: 'May 3, 2026', time: '10:30 AM', status: 'Not Started' },
  { no: '03', task: 'Write Lab Report on Acid-Base Titration', subject: 'Chemistry', due: 'May 5, 2026', time: '11:12 AM', status: 'In Progress' },
  { no: '04', task: 'Prepare for Oral Presentation', subject: 'History', due: 'May 2, 2026', time: '12:00 PM', status: 'Not Started' },
  { no: '05', task: 'Create Art Piece for Final Project', subject: 'Art', due: 'May 6, 2026', time: '03:00 PM', status: 'In Progress' },
];

export const agendaStudent = [
  { time: '08:00 am', tag: 'Mathematics', title: 'Homeroom & Announcement', color: 'purple' },
  { time: '10:30 am', tag: 'Science', title: 'Science Fair Preparation', color: 'yellow' },
  { time: '01:00 pm', tag: 'History', title: 'History Documentary Viewing', color: 'blue' },
];

export const messagesStudent = [
  { name: 'Ms. Carter', time: '4:15 PM', text: "Don't forget, tomorrow's lab report on titration is due by 9 AM." },
  { name: 'Jake', time: '12:30 PM', text: 'Hey, are we still meeting up after school to study for the math test?' },
  { name: 'Coach Simmons', time: '2:00 PM', text: 'Practice is moved to 5 PM today because of the assembly.' },
];

export const recentActivityStudent = [
  { group: 'Today', items: [
    { icon: '📅', title: 'Reminder: Attending Physics Group Meeting.', time: '1:00 PM' },
    { icon: '🎒', title: 'Reminder: Art Supplies Collection.', time: '10:30 AM' },
    { icon: '🏅', title: 'You got Award for 1st place student', time: '10:30 AM' },
  ]},
  { group: 'Yesterday', items: [
    { icon: '🧪', title: 'Biology with Ms. Carter Quiz Scheduled', time: '4:00 PM' },
    { icon: '👍', title: 'Received Feedback on English Essay.', time: '9:15 AM' },
    { icon: '📤', title: 'Submitted Mathematics Assignment.', time: '2:45 PM' },
  ]},
];

// ---------- TEACHER DASHBOARD ----------
export const teacherBanner = {
  title: 'Your teaching classes are increasing great about 30% than last year',
  email: 'heather.morris@schoolhub.edu',
  phone: '+1 234 5678',
};

export const teacherStats = [
  { label: 'Total Classes', value: '8', trend: 'up', trendValue: '15%' },
  { label: 'Total Students', value: '246', trend: 'down', trendValue: '5%' },
  { label: 'Total Hours', value: '132', trend: 'down', trendValue: '10%' },
  { label: 'Assignments Graded', value: '342', trend: 'up', trendValue: '23%' },
];

export const studentAttendanceDonut = [
  { label: 'Present', value: 80, color: 'var(--purple)' },
  { label: 'Absent', value: 20, color: 'var(--yellow)' },
];

export const studentPerformanceChart = {
  categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  series: [
    { name: 'Class 10', color: 'var(--blue)', data: [88, 78, 60, 85, 52] },
    { name: 'Class 11', color: 'var(--yellow)', data: [65, 82, 75, 60, 48] },
    { name: 'Class 12', color: 'var(--purple)', data: [70, 80, 80, 65, 45] },
  ],
  highlight: { index: 2, values: [{ label: '75%', color: 'var(--yellow)' }, { label: '60%', color: 'var(--blue)' }, { label: '80%', color: 'var(--purple)' }] },
};

export const teacherTasks = [
  { title: 'Grade Student Essays', date: 'Apr 24, 2026', done: false },
  { title: 'Update Lesson Plans', date: 'Apr 25, 2026', done: true },
  { title: 'Attend Department Meeting', date: 'Apr 26, 2026', done: true },
  { title: 'Compile Reports for Parent-Teacher Conferences', date: 'Apr 28, 2026', done: false },
];

export const teachingActivity = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  data: [95, 120, 80, 100, 90, 70, 130, 110, 60, 150, 95, 140],
  highlight: { index: 3, date: 'Apr 30', label: 'Working Hours: 120 Hours' },
};

export const studentTasks = [
  { name: 'Emily Peterson', topic: 'History 11 AP World History', taskTopic: 'World War II', task: 'Essay on the Impact of WWII on Modern Europe', date: 'Apr 30, 2026', status: 'Active' },
  { name: 'Jacob Lee', topic: 'History 12', taskTopic: 'The Cold War', task: 'Research Paper on the Cuban Missile Crisis', date: 'May 5, 2026', status: 'Not Viewed' },
  { name: 'Sarah Martin', topic: 'History 10A', taskTopic: 'European Colonization', task: 'Prepare Arguments for Class Debate', date: 'Apr 29, 2026', status: 'Reviewing' },
  { name: 'Liam Johnson', topic: 'History 12', taskTopic: 'American History', task: 'Presentation on the Civil Rights Movement', date: 'May 10, 2026', status: 'Not Viewed' },
  { name: 'Olivia Smith', topic: 'History 11 AP World History', taskTopic: 'Industrial Revolution', task: 'Group Project on the Effects of Industrialization', date: 'May 3, 2026', status: 'Reviewing' },
];

export const agendaTeacher = [
  { time: '08:00 am', tag: 'History 11 AP', title: 'Review Recent Test Results', color: 'purple' },
  { time: '10:00 am', tag: 'History 12', title: 'Lecture on Cold War', color: 'yellow' },
  { time: '04:30 pm', tag: 'History 10A', title: "Prepare for Tomorrow's Debate", color: 'blue' },
];

export const messagesTeacher = [
  { name: 'Mrs. Allen', time: '7:30 AM', text: 'Love your idea about integrating history and English! Can we meet Thursday?' },
  { name: 'Tim Lee', time: '12:30 PM', text: 'I need help with the project outline. Could we meet during your office hours?' },
  { name: 'Principal Johnson', time: '12:30 PM', text: "Please confirm your attendance at today's 3:00 PM department head meeting." },
];

export const recentActivityTeacher = [
  { title: 'Curriculum Update Submitted', text: 'Your multimedia proposal for the World History curriculum has been approved.', time: '2:00 PM' },
  { title: 'Student Grade Posted', text: 'Grades for the Civil Rights Movement presentation have been posted.', time: '9:15 AM' },
  { title: 'Department Meeting Reminder', text: 'Reminder: Department meeting at 3:30 PM today in the main conference room.', time: '8:00 AM' },
];
