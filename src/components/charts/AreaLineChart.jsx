const VB_W = 1000;
const VB_H = 300;

function buildPoints(data, max) {
  const n = data.length;
  return data.map((v, i) => {
    const x = (i / (n - 1)) * VB_W;
    const y = VB_H - (v / max) * VB_H;
    return [x, y];
  });
}

export default function AreaLineChart({
  categories,
  series,
  max,
  height = 260,
  yLabels,
  highlightIndex,
  highlightContent,
}) {
  const computedMax = max || Math.max(...series.flatMap((s) => s.data)) * 1.15;

  return (
    <div className="area-chart" style={{ height }}>
      {yLabels && (
        <div className="area-y-axis">
          {yLabels.map((v) => (
            <span key={v}>{v}</span>
          ))}
        </div>
      )}
      <div className="area-plot">
        {highlightIndex != null && highlightContent && (
          <div
            className="area-tooltip"
            style={{ left: `${(highlightIndex / (categories.length - 1)) * 100}%` }}
          >
            <div className="area-tooltip-line" />
            <div className="area-tooltip-box">{highlightContent}</div>
          </div>
        )}
        <svg viewBox={`0 0 ${VB_W} ${VB_H}`} preserveAspectRatio="none" className="area-svg">
          {[0, 0.25, 0.5, 0.75, 1].map((f) => (
            <line key={f} x1="0" x2={VB_W} y1={VB_H * f} y2={VB_H * f} className="area-gridline" />
          ))}
          {series.map((s) => {
            const pts = buildPoints(s.data, computedMax);
            const linePts = pts.map((p) => p.join(',')).join(' ');
            const areaPts = `0,${VB_H} ${linePts} ${VB_W},${VB_H}`;
            return (
              <g key={s.name}>
                {s.fill && <polygon points={areaPts} fill={s.color} opacity="0.12" />}
                <polyline points={linePts} fill="none" stroke={s.color} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            );
          })}
          {highlightIndex != null &&
            series.map((s) => {
              const pts = buildPoints(s.data, computedMax);
              const [x, y] = pts[highlightIndex];
              return <circle key={s.name} cx={x} cy={y} r="8" fill="#fff" stroke={s.color} strokeWidth="4" />;
            })}
        </svg>
        <div className="area-x-axis">
          {categories.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
