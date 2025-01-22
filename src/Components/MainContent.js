
// import React from "react";
// import "./MainContent.css";

// const MainContent = () => {
//   return <div className="main-content">Main Content Area</div>;
// };

// export default MainContent;
import React from "react";
import "./MainContent.css";
const MainContent = ({ selectedUser, messages }) => {

  if (!selectedUser) {
    
    return<h1>Main Content Area<br/>
      Select a user to start chatting</h1>;
  }

  return (
    <div className="main-content">
        
      <h2>Chat with {selectedUser}</h2>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender === "You" ? "outgoing" : "incoming"}`}>
            <span className="message-sender">{msg.sender}:</span>
            <p className="message-content">{msg.content}</p>
            <span className="message-timestamp">{msg.timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
