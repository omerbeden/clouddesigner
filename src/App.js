import React, { useCallback, useState, useRef } from "react";
import { ReactFlow, useNodesState, Background, Controls, MiniMap } from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import { DndContext, MouseSensor, useSensor, useSensors } from "@dnd-kit/core";
import Sidebar from "./components/Sidebar";
import Droppable from "./components/Droppable";
import "./App.css";
import "@xyflow/react/dist/style.css";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import ConfigPanel from "./components/ConfigPanel";

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  //const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const droppableRef = useRef(null);
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const sensors = useSensors(mouseSensor);

  const [items, setItems] = useState([
    { id: 1, name: "LoadBalancer", dropped: false },
    { id: 2, name: "EC2", dropped: false },
    { id: 3, name: "Lambda", dropped: false },
    { id: 4, name: "SNS", dropped: false },
    { id: 5, name: "SQS", dropped: false },
  ]);


  function handleDragEnd(event) {
    const rect = droppableRef.current.getBoundingClientRect();
    
    const newNode = {
      id: Math.random().toString(),
      position: {
        x: event.active.rect.current.translated?.left - rect.x,
        y: event.active.rect.current.translated?.top - rect.y,
      },
      data: { label: event.active.data.current.name },
      type: "default",
    };

    setNodes((nds) => [...nds, newNode]);
  }

  return (
    <div className="app">
      <DndContext
        onDragEnd={handleDragEnd}
        sensors={sensors}
        modifiers={[restrictToWindowEdges]}
      >
        <Sidebar items={items}></Sidebar>

        <Droppable>
          <div ref={droppableRef} style={{ width: "70vw", height: "100vh" }}>
            <ReactFlow nodes={nodes} onNodesChange={onNodesChange}
            onnode
             >
              <Background />
              <Controls/>
              <MiniMap/>
            </ReactFlow>
          </div>
        </Droppable>
      </DndContext>
      <ConfigPanel></ConfigPanel>
    </div>
  );
}
