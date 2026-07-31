import { useEffect, useState } from 'react';
import Icon from '../../components/Icon.jsx';
import StatusBadge from '../../components/StatusBadge.jsx';
import { libraryBooks } from '../../data/mockData.js';
import '../../styles/list-page.css';
import './Library.css';

const STORAGE_KEY = 'schoolhub-library-books';

function loadBooks() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return libraryBooks;
  try {
    return JSON.parse(saved);
  } catch {
    return libraryBooks;
  }
}

const emptyForm = { title: '', author: '', genre: '', copies: '' };

export default function Library() {
  const [books, setBooks] = useState(loadBooks);
  const [query, setQuery] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  }, [books]);

  const addBook = (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.author.trim()) return;

    const newBook = {
      id: `BK-${Date.now()}`,
      title: form.title.trim(),
      author: form.author.trim(),
      genre: form.genre.trim() || 'General',
      copies: Number(form.copies) || 1,
      status: 'Available',
    };
    setBooks((prev) => [newBook, ...prev]);
    setForm(emptyForm);
    setShowForm(false);
  };

  const removeBook = (id) => {
    setBooks((prev) => prev.filter((b) => b.id !== id));
  };

  const rows = books.filter((b) =>
    (b.title + b.author + b.genre).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="list-page card">
      <div className="page-toolbar">
        <h1>Library</h1>
        <div className="page-toolbar-actions">
          <div className="search-box">
            <Icon name="search" size={16} />
            <input
              type="text"
              placeholder="Search by Title, Author, or Genre"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <button type="button" className="icon-btn" onClick={() => setShowForm((v) => !v)}>
            <Icon name="plus" size={18} className={showForm ? 'icon-rotate' : ''} />
          </button>
        </div>
      </div>

      {showForm && (
        <form className="add-book-form" onSubmit={addBook}>
          <input
            type="text"
            placeholder="Book title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Author"
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Genre"
            value={form.genre}
            onChange={(e) => setForm({ ...form, genre: e.target.value })}
          />
          <input
            type="number"
            min="1"
            placeholder="Copies"
            value={form.copies}
            onChange={(e) => setForm({ ...form, copies: e.target.value })}
          />
          <button type="submit" className="add-book-submit">Add Book</button>
        </form>
      )}

      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Book Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Copies</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((b) => (
              <tr key={b.id}>
                <td>
                  <div className="cell-person-name">{b.title}</div>
                  <div className="cell-person-sub">{b.id}</div>
                </td>
                <td>{b.author}</td>
                <td>{b.genre}</td>
                <td>{b.copies}</td>
                <td><StatusBadge status={b.status} /></td>
                <td>
                  <div className="row-actions">
                    <Icon name="trash" size={17} onClick={() => removeBook(b.id)} />
                  </div>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={6} className="empty-row">No books found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
