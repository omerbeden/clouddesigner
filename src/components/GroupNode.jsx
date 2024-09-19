import React, { memo } from "react";
import { Box, Typography } from "@mui/material";
import { NodeResizeControl } from "@xyflow/react";

const controlStyle = {
  background: "transparent",
  border: "none",
};

export default memo(({ data }) => {
  return (
    <>
      <NodeResizeControl style={controlStyle} minWidth={250} minHeight={250}>
        <ResizeIcon />
      </NodeResizeControl>
      <Box
        component={"center"}        
        sx={{
          padding: "10px",
          borderStyle: "dashed",
          borderRadius: "5px",
          borderColor: "gray",
          borderWidth: "2px",
          backgroundColor: "rgba(255, 0, 1, 0.2)",
          width: "100%",
          height: "100%",
        }}
      >
        <Typography variant="subtitle2" gutterBottom>
          {data.label}
        </Typography>
      </Box>
    </>
  );

  function ResizeIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="#ff0071"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ position: "absolute", right: 5, bottom: 5 }}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="16 20 20 20 20 16" />
        <line x1="14" y1="14" x2="20" y2="20" />
        <polyline points="8 4 4 4 4 8" />
        <line x1="4" y1="4" x2="10" y2="10" />
      </svg>
    );
  }
});
