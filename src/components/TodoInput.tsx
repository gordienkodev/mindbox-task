import React, { useState, ChangeEvent, FormEvent } from "react";
import TextField from "@mui/material/TextField";
import CheckIcon from "@mui/icons-material/Check";
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from "@mui/material/styles";

const StyledCheckIcon = styled(CheckIcon)({
  color: "#E6E6E6",
  background: '#FEFEFE',
  paddingRight: '20px',
  fontSize: "2.5rem",
});

const TodoInput: React.FC = () => {
  const [task, setTask] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        placeholder="What needs to be done?"
        variant="outlined"
        value={task}
        onChange={handleChange}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <StyledCheckIcon />
            </InputAdornment>
          ),
          style: { paddingLeft: "20px", background: '#FEFEFE',  color: "#4D4D4D",},
        }}
      />
    </form>
  );
};

export default TodoInput;