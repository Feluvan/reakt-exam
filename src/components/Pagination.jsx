import Icon from './Icon.jsx';

export default function Pagination({ totalPages = 17 }) {
  const numbers = [];
  const showEllipsis = totalPages > 5;
  const headCount = showEllipsis ? 4 : totalPages;
  for (let i = 1; i <= Math.min(headCount, totalPages); i++) numbers.push(i);

  return (
    <div className="pagination">
      <button type="button" className="pagination-nav">
        <Icon name="chevronLeft" size={16} />
      </button>

      <div className="pagination-pages">
        {numbers.map((n) => (
          <button key={n} type="button" className={n === 1 ? 'active' : ''}>
            {n}
          </button>
        ))}
        {showEllipsis && (
          <>
            <span>...</span>
            <button type="button">
              {totalPages}
            </button>
          </>
        )}
      </div>

      <button type="button" className="pagination-nav">
        <Icon name="chevronRight" size={16} />
      </button>
    </div>
  );
}
