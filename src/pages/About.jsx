import React from 'react';

const About = () => {
  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row w-75">
        {/* รูปภาพด้านซ้าย */}
        <div className="col-md-4 text-center">
          <img 
            src="https://via.placeholder.com/250" 
            alt="Profile" 
            className="img-fluid rounded-circle shadow-lg"
          />
        </div>
        
        {/* ข้อมูลด้านขวา */}
        <div className="col-md-8 d-flex flex-column justify-content-center">
          <h2 className="fw-bold">About Me</h2>
          <p className="lead">Hello! I'm <strong>แครอท</strong>, a passionate developer and writer.</p>
          <p>
            I love coding, storytelling, and exploring new technologies. 
            My goal is to create meaningful projects that combine creativity and functionality.
          </p>
          <p>
            In addition to coding, I enjoy writing blogs about tech, productivity, and self-improvement.
          </p>
          <a href="/projects" className="btn btn-primary btn-lg mt-3">See My Projects</a>
        </div>
      </div>
    </div>
  );
};

export default About;
