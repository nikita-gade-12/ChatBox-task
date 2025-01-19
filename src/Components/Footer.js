// import React from "react";
// import "./Footer.css";

// const Footer = () => {
//   return <footer className="footer">Footer Content</footer>;
// };

// export default Footer;

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="chat-footer">
      {/* Contact Information Section */}
      <div className="footer-info">
        <p className="footer-name">Name: John Doe</p>
        <p className="footer-contact">Email: john.doe@example.com</p>
        <p className="footer-phone">Phone: +1-234-567-8901</p>
        <p className="footer-other">Status: Available</p>
      </div>

      {/* Chat Input Section */}
      <div className="footer-chat">
        <button className="icon-button attach-button" title="Attach File">
          📎
        </button>
        <input
          type="text"
          className="message-input"
          placeholder="Type a message..."
        />
        <button className="icon-button emoji-button" title="Insert Emoji">
          😊
        </button>
        <button className="send-button" title="Send Message">Send</button>
      </div>
    </footer>
  );
};

export default Footer;
