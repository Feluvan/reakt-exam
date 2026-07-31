const map = {
  Paid: 'blue',
  Active: 'blue',
  Pending: 'yellow',
  Reviewing: 'yellow',
  Overdue: 'red',
  'Not Viewed': 'red',
  'In Progress': 'blue',
  'Not Started': 'red',
};

export default function StatusBadge({ status }) {
  const tone = map[status] || 'purple';
  return <span className={`status-badge status-badge--${tone}`}>{status}</span>;
}
