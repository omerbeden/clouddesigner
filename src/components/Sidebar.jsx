import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import { Box, Divider, Input, Typography } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { nodes as items } from "./nodeData";

function Sidebar() {
  const [input, setInput] = useState("");

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          margin: "10px",
          marginTop: "5px",
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

      {items.map((item) => (
        <SidebarItem key={item.id} item={item}></SidebarItem>
      ))}
    </Box>
  );
}

export default Sidebar;
