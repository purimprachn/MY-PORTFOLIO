import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my projects and blog posts.</p>
        <a href="/projects" className="btn btn-light btn-lg mt-3">View My Work</a>
      </div>
    </div>
  );
};

export default Home;
