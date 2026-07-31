const paths = {
  home: 'M4 11.5 12 4l8 7.5V20a1 1 0 0 1-1 1h-4.5a.5.5 0 0 1-.5-.5V15a2 2 0 0 0-2-2h0a2 2 0 0 0-2 2v5.5a.5.5 0 0 1-.5.5H5a1 1 0 0 1-1-1z',
  cap: 'M12 4 2 9l10 5 8-4v6M6 11.5V17c0 1.3 2.7 3 6 3s6-1.7 6-3v-5.5',
  users: 'M8.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM2 20c0-3 3-5.5 6.5-5.5S15 17 15 20M16 8.3a3 3 0 1 1 0 6M18 14.6c2.4.5 4 2.4 4 5.4',
  grid: 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z',
  dollar: 'M12 3v18M17 7.5c0-1.9-2.2-3.5-5-3.5S7 5.6 7 7.5 9.2 11 12 11s5 1.6 5 3.5-2.2 3.5-5 3.5-5-1.6-5-3.5',
  notice: 'M5 4h11l3 3v13H5zM16 4v3h3M9 11h6M9 15h6',
  calendar: 'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4',
  book: 'M5 4.5C5 3.7 5.7 3 6.5 3H19v15H6.5c-.8 0-1.5.7-1.5 1.5V4.5ZM19 18v3H6.5A1.5 1.5 0 0 1 5 19.5',
  message: 'M4 5h16v11H8l-4 4z',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21c0-4.4 3.6-8 8-8s8 3.6 8 8',
  settings: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4 12h1M19 12h1M12 4v1M12 19v1M6 6l.7.7M17.3 17.3l.7.7M6 18l.7-.7M17.3 6.7l.7-.7',
  logout: 'M9 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4M15 16l4-4-4-4M19 12H9',
  search: 'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM21 21l-4.3-4.3',
  bell: 'M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6ZM10 20a2 2 0 0 0 4 0',
  chat: 'M4 5h16v11H8l-4 4zM8 9h8M8 12h5',
  chevronLeft: 'm14 6-6 6 6 6',
  chevronRight: 'm10 6 6 6-6 6',
  chevronDown: 'm6 10 6 6 6-6',
  plus: 'M12 5v14M5 12h14',
  filter: 'M4 5h16M7 12h10M10 19h4',
  ribbon: 'M8 4h8l-1 8-3 2-3-2z M9 14l-2 6 5-3 5 3-2-6',
  edit: 'M4 20h4L18.5 9.5a1.5 1.5 0 0 0 0-2.1L17.6 6.5a1.5 1.5 0 0 0-2.1 0L5 17z',
  trash: 'M5 7h14M9 7V5h6v2M6 7l1 13h10l1-13M10 11v6M14 11v6',
  dots: 'M5 12h.01M12 12h.01M19 12h.01',
  arrowUp: 'M12 19V5M6 11l6-6 6 6',
  arrowDown: 'M12 5v14M6 13l6 6 6-6',
};

export default function Icon({ name, size = 20, strokeWidth = 1.8, className = '' }) {
  const d = paths[name];
  if (!d) return null;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={d} />
    </svg>
  );
}
