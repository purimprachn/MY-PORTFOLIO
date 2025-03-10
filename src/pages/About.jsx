import React from 'react';
import "./About.css";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa"; // ✅ ใช้ react-icons อย่างถูกต้อง
import { SiLine } from "react-icons/si"; // ✅ ใช้ไอคอน LINE ที่ถูกต้อง
import CImage from "../assets/Carrot.jpg"; // ✅ รูปโปรไฟล์

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">

        {/* ส่วนของรูปภาพ */}
        <div className="C-container">
          <img src={CImage} alt="My Profile" className="C-image" />
        </div>

        {/* ส่วนของข้อความ */}
        <div className="about-text">
          <h2>About Me!</h2>
          <p>Hello! I'm <strong>แครอท</strong>, a passionate developer and writer.</p>
          <p>
            I love coding, storytelling, and exploring new technologies. 
            My goal is to create meaningful projects that combine creativity and functionality.
          </p>
          <p>สวัสดีค่ะ ยินดีต้อนรับเข้าสู่เว็บไซต์ของแครอทนะคะ คุณสามารถติดต่อแครอทได้ตามช่องทางด้านล่างนี้เลยค่ะ</p>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://github.com/purimprachn" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.facebook.com/?locale=th_TH" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/carrot_jsw/?__pwa=1" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://line.me/ti/p/~carierot" target="_blank" rel="noopener noreferrer">
              <SiLine /> {/* ✅ เปลี่ยนเป็น `SiLine` ที่ถูกต้อง */}
            </a>
          </div>

          <a href="/projects" className="btn btn-primary">See My Projects</a>
        </div>
      </div>
    </div>
  );
};

export default About;
