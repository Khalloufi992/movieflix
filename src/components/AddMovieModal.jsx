import React, { useState } from 'react';
import StarRating from './StarRating';

function AddMovieModal({ isOpen, onClose, onAdd }) {
  const [form, setForm] = useState({
    title: '', description: '', posterURL: '', trailerURL: '',
    rating: 0, year: '', director: '', genre: ''
  });
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!form.title.trim()) errs.title = 'Title is required';
    if (!form.description.trim()) errs.description = 'Description is required';
    if (!form.posterURL.trim()) errs.posterURL = 'Poster URL is required';
    if (!form.trailerURL.trim()) errs.trailerURL = 'Trailer URL is required';
    if (form.rating === 0) errs.rating = 'Please select a rating';
    if (!form.year.trim()) errs.year = 'Year is required';
    if (!form.director.trim()) errs.director = 'Director is required';
    if (!form.genre.trim()) errs.genre = 'Genre is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    onAdd({
      id: Date.now(),
      ...form,
      rating: Number(form.rating),
      year: Number(form.year)
    });
    setForm({ title: '', description: '', posterURL: '', trailerURL: '', rating: 0, year: '', director: '', genre: '' });
    setErrors({});
    onClose();
  };

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const fields = [
    { label: 'Title', field: 'title', type: 'text', placeholder: 'e.g. The Shawshank Redemption' },
    { label: 'Description', field: 'description', type: 'textarea', placeholder: 'Brief plot summary...' },
    { label: 'Poster URL', field: 'posterURL', type: 'text', placeholder: 'https://example.com/poster.jpg' },
    { label: 'Trailer URL (YouTube Embed)', field: 'trailerURL', type: 'text', placeholder: 'https://www.youtube.com/embed/...' },
    { label: 'Year', field: 'year', type: 'number', placeholder: '2024' },
    { label: 'Director', field: 'director', type: 'text', placeholder: 'Director name' },
    { label: 'Genre', field: 'genre', type: 'text', placeholder: 'Action / Drama' }
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Add New Movie</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          {fields.map(({ label, field, type, placeholder }) => (
            <div className="form-group" key={field}>
              <label className="form-label">{label}</label>
              {type === 'textarea' ? (
                <textarea
                  value={form[field]}
                  onChange={e => handleChange(field, e.target.value)}
                  className={`form-input form-textarea ${errors[field] ? 'error' : ''}`}
                  placeholder={placeholder}
                />
              ) : (
                <input
                  type={type}
                  value={form[field]}
                  onChange={e => handleChange(field, e.target.value)}
                  className={`form-input ${errors[field] ? 'error' : ''}`}
                  placeholder={placeholder}
                />
              )}
              {errors[field] && <span className="form-error">{errors[field]}</span>}
            </div>
          ))}
          <div className="form-group">
            <label className="form-label">Rating</label>
            <StarRating rating={form.rating} interactive onRate={val => handleChange('rating', val)} size={28} />
            {errors.rating && <span className="form-error">{errors.rating}</span>}
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={handleSubmit}>Add Movie</button>
        </div>
      </div>
    </div>
  );
}

export default AddMovieModal;