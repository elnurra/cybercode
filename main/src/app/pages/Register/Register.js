import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.scss';

export const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const result = await response.json();
      console.log('Registration successful:', result);
      setSuccessMessage('Registration successful! Redirecting to homepage...');

      // Redirect to the homepage after successful registration
      setTimeout(() => {
        navigate('/');
      }, 2000); // Delay redirection to show success message
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-page">
      <div className="hero-container">
        <div className="subhead">Register</div>
        <form className="input-group" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-field"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            className="input-field"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            className="input-field"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}
          <div className="input-group-2">
            <input type="checkbox" className="checkbox" />
            <span>Remember me</span>
          </div>
          <button id="register" type="submit" className="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
