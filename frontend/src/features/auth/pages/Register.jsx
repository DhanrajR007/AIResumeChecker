import React from 'react';
import { Link } from 'react-router';
import '../auth.scss';

const Register = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <main>
      <div className="box minimal-form">
        <h1 className="Heading">Register</h1>
        <form onSubmit={onSubmit} autoComplete="off">
          <div className="input-group">
            <label htmlFor="name">Username</label>
            <input type="text" id="name" name="name" required placeholder="Enter your username" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required placeholder="Enter your password" />
          </div>
          <button className="Button primary" type="submit">Register</button>
        </form>
        <div className="link">
          <span>Already have an account?</span>
          <Link to="/login" className="Link">Login</Link>
        </div>
      </div>
    </main>
  );
};

export default Register;