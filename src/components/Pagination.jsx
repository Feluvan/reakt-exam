import { useState } from 'react';
import Icon from './Icon.jsx';

export default function Pagination({ totalPages = 12 }) {
  const [page, setPage] = useState(1);

  const numbers = [];
  const showEllipsis = totalPages > 5;
  const headCount = showEllipsis ? 4 : totalPages;
  for (let i = 1; i <= Math.min(headCount, totalPages); i++) numbers.push(i);

  return (
    <div className="pagination">
      <button type="button" className="pagination-nav" onClick={() => setPage((p) => Math.max(1, p - 1))}>
        <Icon name="chevronLeft" size={16} />
      </button>

      <div className="pagination-pages">
        {numbers.map((n) => (
          <button key={n} className={page === n ? 'active' : ''} onClick={() => setPage(n)}>
            {n}
          </button>
        ))}
        {showEllipsis && (
          <>
            <span>...</span>
            <button className={page === totalPages ? 'active' : ''} onClick={() => setPage(totalPages)}>
              {totalPages}
            </button>
          </>
        )}
      </div>

      <button type="button" className="pagination-nav" onClick={() => setPage((p) => Math.min(totalPages, p + 1))}>
        <Icon name="chevronRight" size={16} />
      </button>
    </div>
  );
}
