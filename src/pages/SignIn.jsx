import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      return;
    }
    try {
      setError('');
      setLoading(true);
      await signIn(email, password);
      // navigate('/');
    } catch {
      setError('Failed to log in');
    }
    setLoading(false);
  };
  return (
    <div>
      <p>Join us and make your own roster!</p>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button disabled={loading} type='submit'>
          Join
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
