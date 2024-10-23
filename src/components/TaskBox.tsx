import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const TaskBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'completed',
})<{ completed: boolean }>(({ completed }) => ({
  display: "flex",
  alignItems: "center",
  padding: "10px",
  border: "1px solid #E5E5E5",
  background: "#FEFEFE",
  color: completed ? "#E6E6E6" : "#4D4D4D",
  fontSize: "2.5rem",
  fontFamily: "Roboto, sans-serif",
  cursor: "pointer",
  textDecoration: completed ? "line-through" : "none",
  textDecorationThickness: completed ? "2px" : "0",
}));

export default TaskBox;
