import "./App.css";
import React, { useState } from "react";
import Canvas from "./components/Canvas";
import ConfigPanel from "./components/ConfigPanel";
import Sidebar from "./components/Sidebar";
import { DndContext, MouseSensor, useSensor, useSensors } from "@dnd-kit/core";
import Droppable from "./components/Droppable";

function App() {
  const [canvasItems, setCanvasItems] = useState([]);

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const [items, setItems] = useState([
    { id: 1, name: "LoadBalancer", dropped: false },
    { id: 2, name: "EC2", dropped: false },
    { id: 3, name: "Lambda", dropped: false },
    { id: 4, name: "SNS", dropped: false },
    { id: 5, name: "SQS", dropped: false },
  ]);

  const sensors = useSensors(mouseSensor);

  return (
    <div className="app">
      <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
        <Sidebar items={items}></Sidebar>

        <Droppable>
          <Canvas items={canvasItems} />
        </Droppable>
      </DndContext>

      <ConfigPanel></ConfigPanel>
    </div>
  );

  function handleDragEnd(event) {
    if (event.over && event.over.id === "droppable") {
      const item = {
        ...event.active.data.current,
        id: Math.random(),
        dropped: true,
      };

      setCanvasItems((c) => [...c, item]);
    }
  }
}

export default App;
