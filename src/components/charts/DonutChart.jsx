export default function DonutChart({ segments, size = 170, thickness = 20, centerValue, centerLabel }) {
  const radius = (size - thickness) / 2;
  const center = size / 2;
  let cumulative = 0;

  return (
    <div className="donut-chart" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={center} cy={center} r={radius} fill="none" stroke="#eef0f6" strokeWidth={thickness} />
        {segments.map((seg, i) => {
          const offset = -cumulative;
          cumulative += seg.percent;
          return (
            <circle
              key={i}
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={seg.color}
              strokeWidth={thickness}
              strokeLinecap="round"
              pathLength={100}
              strokeDasharray={`${seg.percent} ${100 - seg.percent}`}
              strokeDashoffset={offset}
              transform={`rotate(-90 ${center} ${center})`}
            />
          );
        })}
      </svg>
      {(centerValue || centerLabel) && (
        <div className="donut-center">
          {centerValue && <span className="donut-value">{centerValue}</span>}
          {centerLabel && <span className="donut-label">{centerLabel}</span>}
        </div>
      )}
    </div>
  );
}
