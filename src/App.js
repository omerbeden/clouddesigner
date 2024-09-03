import React, { useRef, useState } from "react";
import {
  ReactFlow,
  useNodesState,
  Background,
  Controls,
  MiniMap,
  Panel,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import { DndContext, MouseSensor, useSensor, useSensors } from "@dnd-kit/core";
import Sidebar from "./components/Sidebar";
import Droppable from "./components/Droppable";
import "./App.css";
import "@xyflow/react/dist/style.css";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import ConfigPanel from "./components/ConfigPanel";
import { ThemeProvider, createTheme, Box, ButtonGroup } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  //const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [selectedNode, setSeletectedNode] = useState(null);

  const droppableRef = useRef(null);
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const sensors = useSensors(mouseSensor);

  const [openConfig, setOpenConfig] = useState(false);

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

  const onNodeClick = (event, node) => {
    setOpenConfig((c) => true);

    setSeletectedNode((ni) => node);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNodes((nds) =>
      nds.map((node) =>
        node.id === selectedNode.id
          ? {
              ...node,
              data: {
                ...node.data,
                settings: {
                  ...node.data.settings,
                  [name]: value,
                },
              },
            }
          : node
      )
    );
  };

  return (
    <React.StrictMode>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <div className="app">
          <DndContext
            onDragEnd={handleDragEnd}
            sensors={sensors}
            modifiers={[restrictToWindowEdges]}
          >
            <Sidebar></Sidebar>

            <Droppable>
              <div
                ref={droppableRef}
                style={{ width: "90vw", height: "100vh" }}
              >
                <ReactFlow
                  nodes={nodes}
                  onNodesChange={onNodesChange}
                  onNodeClick={onNodeClick}
                  colorMode="dark"
                >
                  <Background />
                  <Controls />
                  <MiniMap nodeStrokeWidth={3} zoomable pannable />
                  <Panel position="top-center">
                    <Box>
                      <ButtonGroup
                        variant="contained"
                        aria-label="Basic button group"
                      >
                        <Button>Export</Button>
                        <Button>Cost Estimation</Button>
                      </ButtonGroup>
                    </Box>
                  </Panel>
                </ReactFlow>
              </div>
            </Droppable>
          </DndContext>
          <ConfigPanel
            nodeSettings={selectedNode?.data.settings || {}}
            selectedNode={selectedNode}
            onInputChange={handleInputChange}
            drawerStatus={openConfig}
            onClose={() => setOpenConfig((c) => false)}
          ></ConfigPanel>
        </div>
      </ThemeProvider>
    </React.StrictMode>
  );
}
