import { Box, Checkbox, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import TaskMenu from "./Menu";

const Task = ({ task, onDelete, onChange, onToggle, editingId , onUpdateTaskText}) => {
    const { isChecked } = task;
  const handleCheckbox = (e) => {
      onChange(task.id, e.target.checked);
  };

  return (
    <Box
    textAlign={'left'}
      border={'1px solid #113f67'}
      borderRadius={"5px"}
      m={6}
      p={["10px", "20px"]}
      cursor="pointer"
      sx={{
        "&:hover": {
          bgColor: "#38598b",
          transition: "transform 0.8s ease",
          transform: "translateY(-5px)",
        },
      }}
      style={{ textDecoration: isChecked ? "line-through" : "none" }}
    >
      <Text
       color={'gray'}
        fontWeight="bold"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        _hover={{
            color:'#ffff'
        }}
      >
        <Checkbox
        defaultChecked
          mr="4"
          isChecked={isChecked}
          onChange={handleCheckbox}
        />

        {
          editingId === task.id ? (
            <InputText task={task}
            onUpdateTaskText={onUpdateTaskText}
            />
          ) : (
            <Box position={"relative"} flex="2">
            {task.task}
          </Box>
          )
        }
        <TaskMenu
          onDelete={onDelete}
          onToggle={onToggle}
          task={task}
        />
      </Text>
    </Box>
  );
};

const InputText = ({ task, onUpdateTaskText }) => {
  const [text, setText] = useState(task.task);
  return (
    <Input
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onUpdateTaskText(task.id, text)
        }
      }}
    />
  );
};

export default Task;
