import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const FooterBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px 30px",
  border: "1px solid #E5E5E5",
  background: "#FEFEFE",
  color: "#7F7F7F",
  fontSize: "1.2rem",
  fontFamily: "Roboto, sans-serif",
});

const Button = styled(Box)<{ active?: boolean }>(({ active }) => ({
  cursor: "pointer",
  padding: "0 10px",
  border: active ? "1px solid #E5E5E5" : "none",
  borderRadius: "4px",
  color: active ? "#4D4D4D" : "#7F7F7F",
  marginRight: "10px",
}));

interface FooterProps {
  leftTasksCount: number;
  filter: string;
  setFilter: (filter: string) => void;
  clearCompleted: () => void;
}

const Footer: React.FC<FooterProps> = ({ leftTasksCount, filter, setFilter, clearCompleted }) => {
  return (
    <FooterBox>
      <Box>{leftTasksCount} items left</Box>
      <Box display="flex" alignItems="center">
        <Button active={filter === "all"} onClick={() => setFilter("all")}>
          All
        </Button>
        <Button active={filter === "active"} onClick={() => setFilter("active")}>
          Active
        </Button>
        <Button active={filter === "completed"} onClick={() => setFilter("completed")}>
          Completed
        </Button>
      </Box>
      <Box>
        <Button onClick={clearCompleted}>Clear completed</Button>
      </Box>
    </FooterBox>
  );
};

export default Footer;
