import { Box } from "@chakra-ui/react";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle, onChange, editingId, onUpdateTaskText }) => {
  return (
    <Box>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} onChange={onChange}
          editingId={editingId}
          onUpdateTaskText={onUpdateTaskText}
        />
      ))}
    </Box>
  );
};

export default Tasks;
