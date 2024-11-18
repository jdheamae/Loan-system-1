import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Notifications from './notification'; // Import Notifications component
import './borrowerdash.css';
import './notification.css';
const BorrowerHeader = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const hideNotifications = () => {
    setShowNotifications(false);
  };
  const [isVisible, setIsVisible] = useState(false);

  const notifications = [
    { message: "You only have 3 weeks before your due date.", time: "2 days ago", icon: "mail.png" },
    { message: "The funds have been deposited in your account. Congratulations!", time: "3 weeks ago", icon: "deposit.png" },
    { message: "Your application is now being reviewed.", time: "1 month ago", icon: "review.png" },
    { message: "Your application has been approved!", time: "1 month ago", icon: "approved.png" },
  ];
  const [loggedIn, setLoggedIn] = useState(true); 
  const handleLogout = () => {
    // Remove token and other user info from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    setLoggedIn(false); // Update loggedIn state to false
    navigate('/login'); // Redirect to home page after logout
};
  return (
    <header className="headdash">
      <img src="logo.png" alt="MSU-IIT NMPC Logo" className="logol" />
      <h2 className="dashh2">MSU-IIT National Multi-Purpose Cooperative</h2>
      <nav className="iconn">
        <Link to="/">
          <img src="Home.png" alt="Home" className="navicon1" />
        </Link>

        {/* Notification Button with hover and click events */}
        <div 
          className="notification-container" 
          onMouseEnter={toggleNotifications} 
          onMouseLeave={hideNotifications}
        >
          <button onClick={() => setIsVisible(!isVisible)} className="notification-button">
            <img src="Bell_pin.png" alt="Notifications" className="navicon" />
          </button>

          {/* Notifications Dropdown */}
          {isVisible && (
                <div className="notifications-dropdown">
                <h3>Notifications</h3>
                <ul className="notification-list">
                    {notifications.map((notif, index) => (
                    <li key={index} className="notification-item">
                        <img src={notif.icon} alt="icon" className="notification-icon" />
                        <div className="notification-message">
                        <p>{notif.message}</p>
                        <span className="notification-time">{notif.time}</span>
                        </div>
                    </li>
                    ))}
                </ul>
                <a href="/notifications" className="see-all">See all Notifications</a>
                </div>
            )}
        </div>
        

        {/* Notification Button with hover and click events */}
        <div 
          className="notification-container" 
          onMouseEnter={toggleNotifications} 
          onMouseLeave={hideNotifications}
        >
          <button onClick={() => setIsVisible(!isVisible)} className="notification-button">
                <img src="User_circle.png" alt="User" className="navicon" />
            </button>

          {/* Notifications Dropdown */}
          {isVisible && (
                <div className="notifications-dropdown" onClick={handleLogout}>
                  <Link to="/login" >Logout</Link>
                </div>
            )}
        </div>


      </nav>
      <span></span>
    </header>
  );
};

export default BorrowerHeader;
