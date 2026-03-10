import React, { useState } from 'react';
import { Link } from 'react-router';
import '../auth.scss';

const Register = () => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
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
            <input onChange={(e) => {
              setUsername(e.target.value);
            }} type="text" id="name" name="name" required placeholder="Enter your username" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onChange={(e) => {
              setEmail(e.target.value);
            }}  type="email" id="email" name="email" required placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onChange={(e) => {
              setPassword(e.target.value);
            }} type="password" id="password" name="password" required placeholder="Enter your password" />
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