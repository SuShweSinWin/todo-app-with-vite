import { Box } from "@chakra-ui/react";
import Task from "./Task";

const Tasks = ({ tasks, onDelete }) => {
  return (
    <Box>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </Box>
  );
};

export default Tasks;
