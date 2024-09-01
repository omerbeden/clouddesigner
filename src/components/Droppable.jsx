
import React from 'react';
import {useDroppable} from '@dnd-kit/core';


function Droppable(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: 'droppable',
  });
  const style = {
    'background-color': isOver ? 'green' : undefined,
    display:'flex'
  };
  
  
  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
export default Droppable;