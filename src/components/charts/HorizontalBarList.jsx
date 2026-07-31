export default function HorizontalBarList({ data, max = 100, color = 'var(--purple)' }) {
  const ticks = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  return (
    <div className="hbar-list">
      {data.map((row) => (
        <div className="hbar-row" key={row.subject}>
          <span className="hbar-label">{row.subject}</span>
          <div className="hbar-track">
            <div className="hbar-fill" style={{ width: `${(row.value / max) * 100}%`, background: color }} />
          </div>
        </div>
      ))}
      <div className="hbar-axis">
        {ticks.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </div>
  );
}
