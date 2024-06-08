import { Box, Image, Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";

const TaskMenu = ({
  task,
  onDelete,
  onToggle,
}) => {
  return (
    <Box>
      <Menu>
        <MenuButton
            px={4}
            py={2}
            transition='all 0.2s'
            borderRadius='md'
            borderWidth='1px'
            _hover={{ bg: 'gray.400' }}
            _expanded={{ bg: 'blue.400' }}
            _focus={{ boxShadow: 'outline' }}

          as={Button} rightIcon={<FiMoreVertical style={{ marginRight: "10px" }} />}>
        </MenuButton>
        <MenuList>
          <MenuItem minH="48px"
          onClick={() => onDelete(task.id)} // handleDelete
          >
          <FaTrash  />
            <Box
              color={"black"}
            >Delete</Box>
          </MenuItem>
          <MenuItem minH="40px"
            onClick={() => onToggle(task.id)}

          >
            <Image
              boxSize="2rem"
              borderRadius="full"
              src="https://placekitten.com/120/120"
              alt="Simon the pensive"
              mr="12px"
            />
            <Box
                          color={"black"}

            >Edit</Box>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default TaskMenu;
