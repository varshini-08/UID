import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks! We will get back to you soon.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ padding: '2rem 1rem', maxWidth: 720, margin: '0 auto' }}>
      <h1 style={{ marginBottom: '0.5rem' }}>Contact Us</h1>
      <p style={{ marginBottom: '1.5rem', color: '#555' }}>
        Have a question? Send us a message and we will reply shortly.
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '0.75rem' }}>
        <div>
          <label htmlFor="name" style={{ display: 'block', marginBottom: 4 }}>Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            style={{ width: '100%', padding: '.55rem .7rem', border: '1px solid #d1d5db', borderRadius: 6 }}
          />
        </div>

        <div>
          <label htmlFor="email" style={{ display: 'block', marginBottom: 4 }}>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            style={{ width: '100%', padding: '.55rem .7rem', border: '1px solid #d1d5db', borderRadius: 6 }}
          />
        </div>

        <div>
          <label htmlFor="message" style={{ display: 'block', marginBottom: 4 }}>Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="How can we help?"
            style={{ width: '100%', padding: '.55rem .7rem', border: '1px solid #d1d5db', borderRadius: 6, resize: 'vertical' }}
          />
        </div>

        <button type="submit" style={{ background: '#2563eb', color: '#fff', border: 0, padding: '.6rem .9rem', borderRadius: 6, cursor: 'pointer', width: 'fit-content' }}>
          Send
        </button>
      </form>

     
    </div>
  );
};

export default Contact;


