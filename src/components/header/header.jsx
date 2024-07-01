import React, { useState } from 'react';
import { FaHome, FaBars, FaTimes, FaWineGlassAlt, FaComments } from 'react-icons/fa';
import "./header.scss";
import logo from "../../assets/logo.jpeg";
import { Link } from 'react-router-dom';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu-icon" onClick={toggleSidebar}>
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <Link to='/'><FaHome /> HOME</Link>
        <a href="#"><FaWineGlassAlt /> VIN</a>
        <Link to='/Chatbot'><FaComments /> CHAT</Link>
        <button className='Logo_IN'>LOG IN</button>
        <button className='sign_In'>SIGN IN</button>
      </div>
      <div className="links">
        <Link to='/'>HOME</Link>
        <a href="#">VIN</a>
        <Link to='/Chatbot'> CHAT</Link>
      </div>
      <div className="credential">
        <button className='Logo_IN'>LOG IN</button>
        <button className='sign_In'>SIGN IN</button>
      </div>
    </div>
  );
}
