import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useStore from "./store";
export default function PlayButton() {
  const started = useStore((state) => state.started);
  return (
    <Box
      display="flex"
      position="absolute"
      justifyContent="center"
      bottom="20px"
      left="0"
      right="0"
    >
      <Button
        color="secondary"
        variant="contained"
        onClick={() => useStore.setState({ started: true })}
      >
        Zagraj
      </Button>
    </Box>
  );
}
