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
    "background-color": "blue",
    color: "white",
    position: "relative",
    border: "none",
    cursor: "pointer",
    display: "flex",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    userSelect: "none",
    WebkitUserSelect: "none",
  };

  const hadnleClick = () => {
    console.log("clikced");
  };

  return (
    <div>
      <button
        id={item.id}
        ref={setNodeRef}
        onClick={() => hadnleClick()}
        style={style}
        {...listeners}
        {...attributes}
      >
        {item.name}

        {item.dropped ? (
          <span
            className="close-icon"
            onClick={(e) => {
              e.stopPropagation();
              document.getElementById(item.id).remove();
              console.log(item);
            }}
          >
            &times;
          </span>
        ) : null}
      </button>
    </div>
  );
});

export default SidebarItem;
