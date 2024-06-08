import { Box, Checkbox, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";

const Task = ({ task, onDelete, onChange, onToggle }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = (e) => {
    if (e.key === "Enter") {
      onChange(task.id, e.target.checked);
    }
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
          onChange={(e) => setIsChecked(e.currentTarget.checked)}
          onKeyUp={handleCheckbox}
        />
        <Box position={"relative"} flex="2">
          {task.task}
        </Box>
        <FiMoreVertical style={{ marginRight: "10px" }} onClick={() => onToggle(task.id)} />
        <FaTrash onClick={() => onDelete(task.id)} />
      </Text>
    </Box>
  );
};

export default Task;
