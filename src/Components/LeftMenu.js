// import React, { useState } from "react";
// import "./LeftMenu.css";

// const LeftMenu = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const toggleMenu = () => setIsCollapsed(!isCollapsed);

//   return (
//     <div className="left-menu">
//       <button className="collapsible" onClick={toggleMenu}>
//         Toggle Menu
//       </button>
//       {isCollapsed && <div className="menu-content">Left menu content</div>}
   
//     </div>
//   );
// };

// export default LeftMenu;

import React, { useState } from "react";
import "./LeftMenu.css";

const LeftMenu = ({ chatUsers, onSelectUser }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = () => setIsCollapsed(!isCollapsed);

  return (
    <div className={`left-menu ${isCollapsed ? "collapsed" : ""}`}>
       <h3>Left Menu</h3>
      <button className="collapsible" onClick={toggleMenu}>
        {isCollapsed ? "Expand Menu" : "Collapse Menu"}
      </button>
      {!isCollapsed && (
        <div className="menu-content">
          <h3>Users</h3>
          <ul className="user-list">
            {chatUsers.map((user) => (
              <li
                key={user.id}
                className="user-item"
                onClick={() => onSelectUser(user.id)}
              >
                {user.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LeftMenu;
