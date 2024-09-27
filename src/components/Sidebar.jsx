import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import { Box, Divider, Input, Typography } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { nodes as items } from "./nodeData";

function Sidebar() {
  const [input, setInput] = useState("");

  return (
    <Box
      sx={{
        margin: "10px",
        width: "200px",
        maxWidth: "200px",
        minWidth: "200px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",          
          marginTop: "5px",
          marginBottom:"10px"
        }}
      >
        <SearchIcon />
        <Input
          placeholder="Search an item"
          onChange={(e) => setInput((v) => e.target.value)}
          disableUnderline
        ></Input>
      </Box>

      <Typography variant="h6" gutterBottom>
        Components
      </Typography>
      <Divider></Divider>

      {items
        .filter((item) => item.name.toLowerCase().includes(input.toLowerCase()))
        .map((filteredItem) => (
          <SidebarItem key={filteredItem.id} item={filteredItem} />
        ))}
    </Box>
  );
}

export default Sidebar;
