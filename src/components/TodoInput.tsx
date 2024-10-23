import { useState, ChangeEvent, FormEvent } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Footer from "./Footer";
import StyledCheckIcon from "./StyledCheckIcon";
import TaskItem from "./TaskItem";

interface Task {
  text: string;
  completed: boolean;
}

const TodoInput: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([
    { text: "Тестовое задание", completed: false },
    { text: "Прекрасный код", completed: true },
    { text: "Покрытие тестами", completed: false },
  ]);

  const [filter, setFilter] = useState<string>("all");

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

  const leftTasksCount = tasks.filter((task) => !task.completed).length;

  const filteredTasks =
    filter === "active"
      ? tasks.filter((task) => !task.completed)
      : filter === "completed"
        ? tasks.filter((task) => task.completed)
        : tasks;

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
      {filteredTasks.map((t, index) => (
        <TaskItem
          key={index}
          text={t.text}
          completed={t.completed}
          onToggleCompletion={() => toggleTaskCompletion(index)}
        />
      ))}
      <Footer
        leftTasksCount={leftTasksCount}
        filter={filter}
        setFilter={setFilter}
        clearCompleted={() => setTasks(tasks.filter((task) => !task.completed))}
      />
    </>
  );
};

export default TodoInput;
