import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";
import { Box, Typography } from "@mui/material";

export default memo(({ data }) => {
  return (
    <>
      <Handle
        type="target"
        style={{ background: "#c95353" }}
        position={Position.Top}
        isConnectable={true}
      ></Handle>

      <Box
        sx={{
          display: "flex",
          flexDirection:"column",
          alignItems: "center",
          margin: "10px",
          marginTop: "5px",
          padding: "10px",          
          borderStyle: "solid",
          borderRadius: "5px",
        }}
      >
        <Typography variant="subtitle1" gutterBottom>
          {data.label}
        </Typography>
        {data.svg}
      </Box>
    </>
  );
});
