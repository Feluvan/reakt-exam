import { useMemo, useState } from 'react';
import Icon from './Icon.jsx';
import './MiniCalendar.css';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function buildGrid(year, month) {
  const firstDay = new Date(year, month, 1);
  const startOffset = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const totalCells = Math.ceil((startOffset + daysInMonth) / 7) * 7;

  const cells = [];
  for (let i = 0; i < totalCells; i++) {
    const dayNum = i - startOffset + 1;
    const date = new Date(year, month, dayNum);
    cells.push({ date, inMonth: date.getMonth() === month });
  }
  return cells;
}

export default function MiniCalendar({ agenda }) {
  const today = useMemo(() => new Date(), []);
  const [view, setView] = useState({ year: today.getFullYear(), month: today.getMonth() });

  const cells = useMemo(() => buildGrid(view.year, view.month), [view]);

  const changeMonth = (delta) => {
    setView((v) => {
      const d = new Date(v.year, v.month + delta, 1);
      return { year: d.getFullYear(), month: d.getMonth() };
    });
  };

  const isToday = (date) =>
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate();

  return (
    <div className="card mini-calendar">
      <div className="calendar-header">
        <button type="button" className="icon-btn icon-btn--ghost" onClick={() => changeMonth(-1)}>
          <Icon name="chevronLeft" size={16} />
        </button>
        <h3>{MONTHS[view.month]} {view.year}</h3>
        <button type="button" className="icon-btn icon-btn--ghost" onClick={() => changeMonth(1)}>
          <Icon name="chevronRight" size={16} />
        </button>
      </div>

      <div className="calendar-weekdays">
        {WEEKDAYS.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>

      <div className="calendar-grid">
        {cells.map(({ date, inMonth }, i) => (
          <span
            key={i}
            className={`calendar-cell${inMonth ? '' : ' is-muted'}${isToday(date) ? ' is-today' : ''}`}
          >
            {date.getDate()}
          </span>
        ))}
      </div>

      {agenda && (
        <>
          <div className="card-header agenda-header">
            <h3 className="card-title">Agenda</h3>
            <Icon name="dots" size={18} className="muted-icon" />
          </div>
          <div className="agenda-list">
            {agenda.map((item, i) => (
              <div className={`agenda-item agenda-item--${item.color}`} key={i}>
                <span className="agenda-time">{item.time}</span>
                <span className="agenda-tag">{item.tag}</span>
                <span className="agenda-title">{item.title}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
