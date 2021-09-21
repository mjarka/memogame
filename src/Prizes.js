import { Box } from "@mui/system";
import React from "react";
import groupshot from "./prizes/groupshot.png";
export default function Prizes() {
  return (
    <Box width={"100vw"} display="flex" justifyContent="center" pt={4}>
      <img src={groupshot} width={"90%"}></img>
    </Box>
  );
}
