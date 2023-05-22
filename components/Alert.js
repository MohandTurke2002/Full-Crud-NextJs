import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";

function AlertPop({ message, color }) {
  const [open, setOpen] = useState(true);
  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>
        <Alert severity={color}>{message}</Alert>
      </Collapse>
    </Box>
  );
}

export default AlertPop;
