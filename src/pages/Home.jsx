import React from 'react';
import "./Home.css";
import profileImage from "../assets/profile.jpg"; //นำเข้ารูปโปรไฟล์


const Home = () => {
  return (
    <div className="home-container">
      <div className="grid-container">
        {/*ส่วนของรูปภาพ*/}
        <div className="image-setion">
          <img src={profileImage} alt="My Profile" className="profile-image"/>
        </div>
        {/*ส่วนของข้อความ*/}
        <div className="text-section">
          <h1>Hello, I'm Carrot</h1>
          <p>A passionate devoloper and writer who loves creating beautiful and meaningful projects.</p>
          <a href="/projects" className="btn btn-light btn-lg mt-3">View my Work</a>
        </div>
      </div>
    </div>
    
  );
};

export default Home;
