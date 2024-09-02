import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import React from "react";


const SidebarItem = React.memo(({ item }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: item.id,
    data: item,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    color: "white",
    position: "relative",
    cursor: "pointer",
    display: "flex",
    padding: "10px",
    margin: "5px",
    gap: "10px",
  };

  const hadnleClick = () => {
    console.log("clikced");
  };

  return (
    <div
      id={item.id}
      ref={setNodeRef}
      onClick={() => hadnleClick()}
      style={style}
      {...listeners}
      {...attributes}
    >
      {item.svg}
      {item.name}
    </div>
  );
});

export default SidebarItem;
