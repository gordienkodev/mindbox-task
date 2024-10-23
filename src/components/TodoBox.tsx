import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface TodoBoxProps {
  zIndex: number;
  width: string;
  children?: ReactNode;
}

const TodoBox = ({ zIndex, width, children }: TodoBoxProps) => (
  <Box
    sx={{
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      background: "#FEFEFE",
      position: "relative",
      zIndex,
      width,
      margin: "0 auto",
    }}
  >
    {children || <Typography sx={{ padding: "3px" }}></Typography>}
  </Box>
);

export default TodoBox;
