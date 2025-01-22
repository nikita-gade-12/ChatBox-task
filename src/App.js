// import React, { useEffect } from "react";
// import Navbar from "./Components/Navbar";
// import LeftMenu from "./Components/LeftMenu";


// import RightPanel from "./Components/RightPanel";
// import Footer from "./Components/Footer";
// import { adjustPageWidth } from "./utils/resizeHelper";
// import "./App.css";
// import MainContent from "./Components/MainContent";


// function App() {
//   useEffect(() => {
//     window.addEventListener("resize", adjustPageWidth);
//     adjustPageWidth();

//     return () => {
//       window.removeEventListener("resize", adjustPageWidth);
//     };
//   }, []);

//   return (
//     <div className="App">
//       <Navbar />
//       <div className="container">
//         <LeftMenu />
//          <MainContent/>
//         <RightPanel />
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import LeftMenu from "./Components/LeftMenu";
import RightPanel from "./Components/RightPanel";
import Footer from "./Components/Footer";
import MainContent from "./Components/MainContent";
import { adjustPageWidth } from "./utils/resizeHelper";
import "./App.css";

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null); // To store the selected chat user
  const [messages, setMessages] = useState([]); // To store chat messages

  const chatUsers = [
    { id: "user1", name: "Alice" },
    { id: "user2", name: "Bob" },
    { id: "user3", name: "Charlie" },
  ];

  const handleSelectUser = (userId) => {
    setSelectedUser(userId);

    // Fetch messages for the selected user (Simulated for now)
    const fetchedMessages = [
      { sender: "Alice", content: "Hello!", timestamp: "10:30 AM" },
      { sender: "You", content: "Hi Alice!", timestamp: "10:31 AM" },
        { sender: "ishu", content: "Hi Alic!", timestamp: "10:31 AM" },
          { sender: "jak", content: "Hi Alice!", timestamp: "10:31 AM" },
    ];
    setMessages(fetchedMessages);
  };

  useEffect(() => {
    window.addEventListener("resize", adjustPageWidth);
    adjustPageWidth();

    return () => {
      window.removeEventListener("resize", adjustPageWidth);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <LeftMenu chatUsers={chatUsers} onSelectUser={handleSelectUser} />
        <MainContent selectedUser={selectedUser} messages={messages} />
        <RightPanel />
      </div>
      <Footer />
    </div>
  );
};

export default App;

