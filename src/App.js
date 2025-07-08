import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'https://noteserverfinal.onrender.com/notes';

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [search, setSearch] = useState('');

  const fetchNotes = async () => {
    const res = await axios.get(API_URL, {
      params: { search }
    });
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, [search]);

  const addNote = async () => {
    if (!title || !content) return;
    await axios.post(API_URL, {
      title,
      content,
      tags: tags.split(',').map(tag => tag.trim())
    });
    setTitle('');
    setContent('');
    setTags('');
    fetchNotes();
  };

  const deleteNote = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchNotes();
  };

  return (
    <div className="container">
      <h1>📝 Simple Notes App</h1>

      <input
        className="input"
        placeholder="🔍 Search by title or tag"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="note-form">
        <input
          className="input"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          className="input"
          placeholder="Content"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <input
          className="input"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={e => setTags(e.target.value)}
        />
        <button className="button" onClick={addNote}>➕ Add Note</button>
      </div>

      {notes.length === 0 ? (
  <p className="no-notes">🗒️ No notes found. Add some!</p>
) : (
  notes.map((note, index) => {
    const colors = ['bg-sky', 'bg-green', 'bg-lavender', 'bg-peach', 'bg-gold'];
    const colorClass = colors[index % colors.length];

    return (
      <div key={note.id} className={`note ${colorClass}`}>
        <h3>{note.title}</h3>
        <p>{note.content}</p>
        <p><strong>Tags:</strong> {note.tags.join(', ')}</p>
        <p><small>Created: {new Date(note.createdAt).toLocaleString()}</small></p>
        <button className="button delete" onClick={() => deleteNote(note.id)}>🗑️ Delete</button>
      </div>
    );
  })
)}

    </div>
  );
}

export default App;
