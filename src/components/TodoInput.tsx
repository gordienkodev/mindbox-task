import React, { useState, ChangeEvent, FormEvent } from "react";
import TextField from "@mui/material/TextField";
import CheckIcon from "@mui/icons-material/Check";
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import CheckMarkIcon from "./CheckMarkIcon";
import GrayCircleIcon from "./GrayCircleIcon";

const StyledCheckIcon = styled(CheckIcon)({
  color: "#E6E6E6",
  background: "#FEFEFE",
  paddingRight: "10px",
  paddingLeft: "10px",
  fontSize: "3rem",
});

const TaskBox = styled(Box)<{ completed: boolean }>(({ completed }) => ({
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

const TodoInput: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<{ text: string; completed: boolean }[]>([
    { text: "Тестовое задание", completed: false },
    { text: "Прекрасный код", completed: false },
    { text: "Покрытие тестами", completed: false },
  ]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (task.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleTaskCompletion = (index: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          placeholder="What needs to be done?"
          variant="outlined"
          value={task}
          onChange={handleChange}
          fullWidth
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <StyledCheckIcon />
                </InputAdornment>
              ),
              style: {
                background: "#FEFEFE",
                color: "#4D4D4D",
              },
            },
          }}
        />
      </form>
      {tasks.map((t, index) => (
        <TaskBox key={index} onClick={() => toggleTaskCompletion(index)} completed={t.completed}>
          <InputAdornment position="start">
            {t.completed ? <CheckMarkIcon /> : <GrayCircleIcon />}
          </InputAdornment>
          {t.text}
        </TaskBox>
      ))}
    </>
  );
};

export default TodoInput;
