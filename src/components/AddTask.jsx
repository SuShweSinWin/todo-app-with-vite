import { Flex, Input } from '@chakra-ui/react'
import React, { useState } from 'react'


const AddTask = ({ onAdd }) => {
    const [text, setText] = useState("");
  
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && text !== "") {
        onAdd({ task: text });
        setText('');
      }
    };
  

  return (
    <Flex>
        <Input variant='outline' placeholder="What's the task today?"onChange={(e) => setText(e.target.value)} onKeyDown={handleKeyDown}/>
    </Flex>
  )
}

export default AddTask
