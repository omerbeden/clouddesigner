import React, { useState } from "react";
import SidebarItem from "./SidebarItem";

function Sidebar({items}) {
  const [input, setInput] = useState("");
  return (
    <div className="sidebar">
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => setInput((v) => e.target.value)}
      />

      
      <hr></hr>
      <p>Components</p>
      
      {items.map((item) => (
        <SidebarItem key ={item.id} item={item} ></SidebarItem>
        
      ))}


      
    </div>
  );
}

export default Sidebar;
