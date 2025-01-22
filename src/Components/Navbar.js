// import React from 'react';
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">Fixed Navbar</nav>
//   );
// };

// export default Navbar;
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-title">My Application</div>
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
