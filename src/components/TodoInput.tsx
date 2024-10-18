import React, { useState, ChangeEvent, FormEvent } from "react";
import TextField from "@mui/material/TextField";
import CheckIcon from "@mui/icons-material/Check";
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const StyledCheckIcon = styled(CheckIcon)({
  color: "#E6E6E6",
  background: "#FEFEFE",
  paddingRight: "10px",
  paddingLeft: "10px",
  fontSize: "3rem",
});

const StyledRadioButtonUncheckedIcon = styled(RadioButtonUncheckedIcon)({
  color: "#E6E6E6",
  background: "#FEFEFE",
  paddingRight: "10px",
  paddingLeft: "10px",
  fontSize: "3rem",
});

const TaskBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "10px",
  border: "1px solid #E5E5E5",
  background: "#FEFEFE",
  color: "#4D4D4D",
  fontSize: "2.5rem",
  fontFamily: "Roboto, sans-serif",
}));

const TodoInput: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([
    "Тестовое задание",
    "Прекрасный код",
    "Покрытие тестами",
  ]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (task.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, task]);
      setTask("");
    }
  };

  return (
    <div>
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
        <TaskBox key={index}>
          <InputAdornment position="start">
            <StyledRadioButtonUncheckedIcon />
          </InputAdornment>
          {t}
        </TaskBox>
      ))}
    </div>
  );
};

export default TodoInput;
