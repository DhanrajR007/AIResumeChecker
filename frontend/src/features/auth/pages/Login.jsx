import React, { useState } from "react";
import "../auth.scss";
import { Link, useNavigate } from "react-router";;
import useAuth from "../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { loading, handleLogin } = useAuth();
  const onSubmit = async (e) => {
    e.preventDefault();
    await handleLogin({ email, password });
    navigate("/");
  };
  if (loading) {
    return (
      <main>
        <h1>Loading.......</h1>
      </main>
    );
  }
  return (
    <main>
      <div className="box minimal-form">
        <h1 className="Heading">Login</h1>
        <form onSubmit={onSubmit} autoComplete="off">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter your password"
            />
          </div>
          <button className="Button primary" type="submit">
            Login
          </button>
        </form>
        <div className="link">
          <span>Don't have an account?</span>
          <Link to="/register" className="Link">
            Register
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;
