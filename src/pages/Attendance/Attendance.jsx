import Icon from '../../components/Icon.jsx';
import Pagination from '../../components/Pagination.jsx';
import '../../styles/list-page.css';
import './Attendance.css';

const attendanceDays = [
  { day: '08', weekend: false }, { day: '09', weekend: false }, { day: '10', weekend: false },
  { day: '11', weekend: false }, { day: '12', weekend: false }, { day: '13', weekend: true },
  { day: '14', weekend: true }, { day: '15', weekend: false }, { day: '16', weekend: false },
  { day: '17', weekend: false }, { day: '18', weekend: false }, { day: '19', weekend: false },
  { day: '20', weekend: true }, { day: '21', weekend: true },
];

const P = 'present';
const A = 'absent';
const W = null;

const attendanceRows = [
  { name: 'Lucas Johnson', record: [P, A, P, P, P, W, W, P, A, P, P, P, W, W] },
  { name: 'Emily Peterson', record: [P, P, P, P, P, W, W, P, P, A, P, P, W, W] },
  { name: 'Michael Brown', record: [P, P, P, A, P, W, W, P, A, P, P, P, W, W] },
  { name: 'Hannah White', record: [P, A, P, P, P, W, W, P, P, P, A, P, W, W] },
  { name: 'Oliver Martinez', record: [P, P, P, P, P, W, W, P, P, P, P, P, W, W] },
  { name: 'Isabella Garcia', record: [P, P, P, P, A, W, W, P, P, P, P, P, W, W] },
  { name: 'Ethan Lee', record: [P, P, P, P, P, W, W, A, P, A, P, P, W, W] },
  { name: 'Sophia Wilson', record: [A, P, P, P, P, W, W, P, P, P, P, P, W, W] },
  { name: 'Aiden Taylor', record: [P, P, P, P, P, W, W, P, P, P, P, A, W, W] },
  { name: 'Ava Smith', record: [P, P, A, P, P, W, W, P, A, P, P, P, W, W] },
];

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
