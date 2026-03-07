import React from 'react';
import '../interview.scss';
import { Link } from 'react-router';

const Home = () => {
  return (
    <main className="home-main-bg">
      <div className="box home-card">
        <h1 className="Heading">Welcome to <span className="brand-gradient">AI Resume Checker</span></h1>
        <p className="home-desc">
          Instantly analyze and improve your resume with AI.<br />
          <span className="soon">More features coming soon!</span>
        </p>
        <Link to="/login" className="Button primary home-cta">Get Started</Link>
      </div>
    </main>
  );
};

export default Home;
