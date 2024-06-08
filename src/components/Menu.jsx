import { Box, Image, Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";

const TaskMenu = () => {
  return (
    <Box>
      <Menu>
        <MenuButton as={Button} rightIcon={<FiMoreVertical style={{ marginRight: "10px" }} onClick={() => onToggle(task.id)} />}>
        </MenuButton>
        <MenuList>
          <MenuItem minH="48px">
          <FaTrash onClick={() => onDelete(task.id)} />
            <span>Fluffybuns the Destroyer</span>
          </MenuItem>
          <MenuItem minH="40px">
            <Image
              boxSize="2rem"
              borderRadius="full"
              src="https://placekitten.com/120/120"
              alt="Simon the pensive"
              mr="12px"
            />
            <span>Simon the pensive</span>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default TaskMenu;
