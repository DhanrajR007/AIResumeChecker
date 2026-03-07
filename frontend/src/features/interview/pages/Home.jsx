import React from 'react';
import '../../auth/auth.scss';

const Home = () => {
  return (
    <main>
      <div className="box minimal-form" style={{ minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1 className="Heading">Welcome to AI Resume Checker</h1>
        <p style={{ marginTop: '1.5rem', color: '#bdbdbd', fontSize: '1.1rem', textAlign: 'center' }}>
          This is a dummy home page.<br />
          More features coming soon!
        </p>
      </div>
    </main>
  );
};

export default Home;
