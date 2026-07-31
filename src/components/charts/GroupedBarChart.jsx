export default function GroupedBarChart({ categories, series, max = 100, steps = 4, height = 220, highlightIndex, highlightContent }) {
  const yLabels = [];
  for (let i = steps; i >= 0; i--) {
    yLabels.push(Math.round((max / steps) * i));
  }

  return (
    <div className="bars-chart" style={{ height }}>
      <div className="bars-y-axis">
        {yLabels.map((v) => (
          <span key={v}>{v}</span>
        ))}
      </div>
      <div className="bars-plot">
        <div className="bars-grid">
          {yLabels.map((v) => (
            <div className="bars-gridline" key={v} />
          ))}
        </div>
        <div className="bars-columns">
          {categories.map((cat, i) => (
            <div className="bars-column" key={cat}>
              {i === highlightIndex && highlightContent && (
                <div className="bars-tooltip">{highlightContent}</div>
              )}
              <div className="bars-group">
                {series.map((s) => (
                  <div
                    key={s.name}
                    className="bars-bar"
                    style={{ height: `${(s.data[i] / max) * 100}%`, background: s.color }}
                  />
                ))}
              </div>
              <span className="bars-cat-label">{cat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
