import React, { useState } from 'react';
import './notification.css';

const Notifications = () => {
  const [isVisible, setIsVisible] = useState(false);

  const notifications = [
    { message: "You only have 3 weeks before your due date.", time: "2 days ago", icon: "mail.png" },
    { message: "The funds have been deposited in your account. Congratulations!", time: "3 weeks ago", icon: "deposit.png" },
    { message: "Your application is now being reviewed.", time: "1 month ago", icon: "review.png" },
    { message: "Your application has been approved!", time: "1 month ago", icon: "approved.png" },
  ];

  return (
    <div className="notification-container">
      <button onClick={() => setIsVisible(!isVisible)} className="notification-button">
      </button>
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
  );
};

export default Notifications;
