import React from 'react';
import SidebarItem from './SidebarItem';

function Canvas({items}) {



  return (
    <div className="canvas">      
      {items.map((item) => (
        <SidebarItem key ={item.id} item={item}></SidebarItem>
      ))}
    </div>
  );
}

export default Canvas;
