import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import useStore from "./store";
export default function Points() {
  const points = useStore((state) => state.points);
  const started = useStore((state) => state.started);
  // Timer
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    started && setTimeout(() => setCounter(counter + 1), 1000);
  }, [counter, started]);
  return (
    <Box p={2} display="flex" justifyContent="space-between">
      <Typography variant="body"> CZAS: {counter}</Typography>
      <Typography variant="body"> Ruchy {points}</Typography>
    </Box>
  );
}
