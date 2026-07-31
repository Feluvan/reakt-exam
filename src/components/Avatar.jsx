function initials(name) {
  return name
    .replace(/^(Ms\.|Mr\.|Mrs\.|Dr\.)\s*/, '')
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

export default function Avatar({ name, size = 40 }) {
  return (
    <div className="avatar" style={{ width: size, height: size, fontSize: size * 0.36 }}>
      {name ? initials(name) : ''}
    </div>
  );
}
