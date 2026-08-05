import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard.jsx';
import Teachers from './pages/Teachers/Teachers.jsx';
import Students from './pages/Students/Students.jsx';
import Attendance from './pages/Attendance/Attendance.jsx';
import StudentDashboard from './pages/StudentDashboard/StudentDashboard.jsx';
import TeacherDashboard from './pages/TeacherDashboard/TeacherDashboard.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="students" element={<Students />} />
          <Route path="attendance" element={<Attendance />} />
        </Route>

        <Route element={<Layout user={{ name: 'Mia Williams', role: 'Student' }} />}>
          <Route path="student-dashboard" element={<StudentDashboard />} />
        </Route>

        <Route element={<Layout user={{ name: 'Heather Morris', role: 'Teacher' }} />}>
          <Route path="teacher-dashboard" element={<TeacherDashboard />} />
        </Route>

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
