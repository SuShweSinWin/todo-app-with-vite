import { Flex, Heading } from "@chakra-ui/react"
import ToDoHero from "./ToDoHero"

const Header = () => {
    
  return (
    <Flex justifyContent={'space-between'} mb={2}>
      <Heading as="h2" size="xl" color="gray" letterSpacing={'.5em'}>
        TODO
      </Heading>
      <ToDoHero />
    </Flex>
  )
}

export default Header
