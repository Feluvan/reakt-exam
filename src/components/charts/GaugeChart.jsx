export default function GaugeChart({ percent, size = 220, thickness = 22, valueColor = 'var(--purple)', trackColor = 'var(--yellow)' }) {
  const w = size;
  const h = size / 2 + thickness / 2 + 6;
  const r = size / 2 - thickness / 2;
  const cx = size / 2;
  const cy = size / 2 + 3;
  const d = `M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`;

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <path d={d} fill="none" stroke={trackColor} strokeWidth={thickness} strokeLinecap="round" />
      <path
        d={d}
        fill="none"
        stroke={valueColor}
        strokeWidth={thickness}
        strokeLinecap="round"
        pathLength={100}
        strokeDasharray={`${percent} ${100 - percent}`}
      />
    </svg>
  );
}
