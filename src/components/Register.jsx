import React, { useState } from 'react';
import { registerUser } from '../api';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(form);
      setMessage(res.data.message);
      console.log(' Registration successful:', res.data);
      setForm({ name: '', email: '', password: '' });
    } catch (err) {
      console.error(' Registration error:', err.response?.data?.message || err);
      setMessage(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h2>Register</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required /><br />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required /><br />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
