import Icon from '../../components/Icon.jsx';
import Pagination from '../../components/Pagination.jsx';
import { attendanceDays, attendanceRows } from '../../data/mockData.js';
import '../../styles/list-page.css';
import './Attendance.css';

function Mark({ status }) {
  if (status === 'present') {
    return (
      <span className="mark mark--present">
        <Icon name="check" size={13} strokeWidth={3} />
      </span>
    );
  }
  if (status === 'absent') {
    return (
      <span className="mark mark--absent">
        <Icon name="close" size={13} strokeWidth={3} />
      </span>
    );
  }
  return <span className="mark mark--none">-</span>;
}

export default function Attendance() {
  return (
    <div className="list-page card">
      <div className="page-toolbar">
        <h1>Attendance</h1>
        <div className="page-toolbar-actions">
          <span className="select-pill"><Icon name="calendar" size={14} /> April 2024</span>
          <span className="select-pill">Week 2-3</span>
          <span className="select-pill">Class 11A</span>
        </div>
      </div>

      <div className="table-wrap">
        <table className="data-table attendance-table">
          <thead>
            <tr>
              <th>Student Name</th>
              {attendanceDays.map((d) => (
                <th key={d.day}>{d.day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {attendanceRows.map((row) => (
              <tr key={row.name}>
                <td className="cell-person-name">{row.name}</td>
                {row.record.map((status, i) => (
                  <td key={i}><Mark status={status} /></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination totalPages={17} />
    </div>
  );
}
