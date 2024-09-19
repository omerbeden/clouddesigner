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
        component="center"
        sx={{
          padding: "10px",
          borderStyle: "dashed",
          borderRadius: "5px",
          borderColor: "gray",
          borderWidth: "2px",
        }}
      >
        <Typography variant="subtitle2" gutterBottom>
          {data.label}
        </Typography>

        {data.svg}
      </Box>
    </>
  );
});
