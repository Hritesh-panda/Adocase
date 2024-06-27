import React from "react";
import "./header.css";
import profile from "../../image/profile.avif";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-all">
          <div className="logo">ADVOCASE</div>
          <nav className="nav">
            <ul>
              <li>
                <a href="#newsfeed">
                  <i class="bi bi-newspaper pe-1"></i>News feed
                </a>
              </li>
              <li>
                <a href="#findlawyers">
                  <i class="bi bi-people-fill pe-1"></i>Find lawyers
                </a>
              </li>
              <li>
                <a href="#home" className="active">
                  <i class="bi bi-house pe-1"></i> Home
                </a>
              </li>
              <li>
                <a href="#connections">
                  <i class="bi bi-ethernet pe-1"></i>Connections
                </a>
              </li>
              <li>
                <a href="#chats">
                  <i class="bi bi-chat-left-dots pe-1"></i>Chats
                </a>
              </li>
            </ul>
          </nav>
          <div className="profile">
            <div>
              <i class="bi bi-gear"></i>
            </div>
            <div className="bell-nav">
              <i class="bi bi-bell"></i>
              <div className="dot-n"></div>
            </div>
            <img src={profile} alt="Profile" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
