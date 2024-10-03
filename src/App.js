/* eslint-disable import/no-anonymous-default-export */
import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  ReactFlow,
  useReactFlow,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  addEdge,
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
import ImageNode from "./components/ImageNode";
import GroupNode from "./components/GroupNode";

const nodeTypes = { imageNode: ImageNode, groupNode: GroupNode };
const sidePanelWidth = 165;

function App() {
  useEffect(() => {
    const errorHandler = (e) => {
      if (
        e.message.includes(
          "ResizeObserver loop completed with undelivered notifications" ||
            "ResizeObserver loop limit exceeded"
        )
      ) {
        const resizeObserverErr = document.getElementById(
          "webpack-dev-server-client-overlay"
        );
        if (resizeObserverErr) {
          resizeObserverErr.style.display = "none";
        }
      }
    };
    window.addEventListener("error", errorHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const [selectedNode, setSelectedNode] = useState(null);

  const droppableRef = useRef(null);
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const sensors = useSensors(mouseSensor);

  const [openConfig, setOpenConfig] = useState(false);

  function handleDragEnd(event) {
    if (event.delta.x > sidePanelWidth) {
      const rect = droppableRef.current.getBoundingClientRect();
      const newNode = {
        id: Math.random().toString(),

        position: {
          x: event.active.rect.current.translated?.left - rect.x,
          y: event.active.rect.current.translated?.top - rect.y,
        },
        data: {
          label: event.active.data.current.name,
          svg: event.active.data.current.svg,
          settings: event.active.data.current.settings,
        },
        style: event.active.data.current.style,
        type: event.active.data.current.type,
      };

      setNodes((nds) => [...nds, newNode]);

      groupNodes(newNode.position, newNode);
    }
  }

  const onNodeClick = (event, node) => {
    setSelectedNode((n) => node);
  };

  useEffect(() => {
    if (selectedNode) {
      setOpenConfig((c) => true);
    }
  }, [selectedNode]);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const { screenToFlowPosition } = useReactFlow();

  const isNodeInsideGroup = (nodePosition, groupNode) => {
    const { x: groupX, y: groupY } = groupNode.position;

    const groupWidth = groupNode.measured.width;
    const groupHeight = groupNode.measured.height;

    const nodeX = nodePosition.x;
    const nodeY = nodePosition.y;

    return (
      nodeX > groupX &&
      nodeX < groupX + groupWidth &&
      nodeY > groupY &&
      nodeY < groupY + groupHeight
    );
  };

  function groupNodes(dropPosition, node) {
    const groupNodes = nodes.filter((n) => n.type === "groupNode");

    groupNodes.forEach((groupNode) => {
      if (isNodeInsideGroup(dropPosition, groupNode)) {
        setNodes((nds) =>
          nds.map((n) =>
            n.id === node.id
              ? {
                  ...n,
                  parentId: groupNode.id,
                  extent: "parent",
                }
              : n
          )
        );
      }
    });
  }

  function ungroupNode(node) {
    setNodes((nds) =>
      nds.map((n) =>
        n.id === node.id
          ? {
              ...n,
              parentId: null,
              extent: null,
            }
          : n
      )
    );
  }

  function onNodeDrag(event, node) {
    if (node.type !== "groupNode") {
      const dropPosition = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      groupNodes(dropPosition, node);
    }
  }

  const handleInputChange = (e) => {
    if (e.target === undefined) {
      const { label } = e;
      console.log(e);
      setNodes((nds) =>
        nds.map((node) =>
          node.id === selectedNode.id
            ? {
                ...node,
                data: {
                  ...node.data,
                  settings: {
                    ...node.data.settings,
                    region: label,
                  },
                },
              }
            : node
        )
      );
    } else {
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
                    [name]: {...node.data.settings[name],value},
                  },
                },
              }
            : node
        )
      );
    }
  };

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  function onNodeDoubleClick(event, node) {
    ungroupNode(node);
  }


  useEffect(() => {
    
  console.log(nodes)
  
  }, [nodes])

  useEffect(() => {
    console.log("selected node:")  
    console.log(selectedNode)
    
    }, [selectedNode])
    
  
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
                  edges={edges}
                  onNodesChange={onNodesChange}
                  onEdgesChange={onEdgesChange}
                  onNodeClick={onNodeClick}
                  colorMode="dark"
                  nodeTypes={nodeTypes}
                  onNodeDrag={onNodeDrag}
                  onConnect={onConnect}
                  onNodeDoubleClick={onNodeDoubleClick}
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
            selectedNode={selectedNode}
            setSelectedNode={setSelectedNode}
            onInputChange={handleInputChange}
            drawerStatus={openConfig}
            onClose={() => setOpenConfig((c) => false)}
          ></ConfigPanel>
        </div>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default () => (
  <ReactFlowProvider>
    <App />
  </ReactFlowProvider>
);
