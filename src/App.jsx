import './App.css'
import { Box, Text } from '@chakra-ui/react'
import Header from './components/Header'
import AddTask from './components/AddTask'
import { v4 as uuidv4 } from 'uuid';
import Tasks from './components/Tasks';
import { useEffect, useState } from 'react';
uuidv4();

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const id = tasks.length + 1;

    const newTask = { id, ...task };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    console.log("delete", id);
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const editTask = (id) => {
    console.log("edit", id);
    const editedTasks = tasks.map((task) => task.id == id);
    const updatedTask = {id, ...task};
    const updatedTasks = [id, updatedTask];
    setTasks(updatedTasks);
  }
  return (
    <>
    <Box>
        <Header />
        <AddTask onAdd={addTask}/>
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={editTask} />
        ) : (
          <Text color={"#4fb9fc"} fontWeight={'bolder'} fontSize={'larger'} mt={5}>
            Nothing to do ☕
          </Text>
        )}
    </Box>
    </>
  )
}

export default App
