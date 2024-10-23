import { InputAdornment } from "@mui/material";
import CheckMarkIcon from "./CheckMarkIcon";
import GrayCircleIcon from "./GrayCircleIcon";
import TaskBox from "./TaskBox";

interface TaskItemProps {
  text: string;
  completed: boolean;
  onToggleCompletion: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  text,
  completed,
  onToggleCompletion,
}) => {
  return (
    <TaskBox onClick={onToggleCompletion} completed={completed}>
      <InputAdornment position="start">
        {completed ? <CheckMarkIcon /> : <GrayCircleIcon />}
      </InputAdornment>
      {text}
    </TaskBox>
  );
};

export default TaskItem;
