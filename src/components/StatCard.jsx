import Icon from './Icon.jsx';
import './StatCard.css';

export default function StatCard({ value, label, trend, trendValue, color = 'purple' }) {
  return (
    <div className={`stat-card stat-card--${color}`}>
      <div className="stat-card-top">
        {trend && (
          <span className={`trend-badge trend-badge--${trend}`}>
            <Icon name={trend === 'up' ? 'arrowUp' : 'arrowDown'} size={12} strokeWidth={2.5} />
            {trendValue}
          </span>
        )}
        <Icon name="dots" size={18} className="stat-card-dots" />
      </div>
      <div className="stat-card-value">{value}</div>
      <div className="stat-card-label">{label}</div>
    </div>
  );
}
