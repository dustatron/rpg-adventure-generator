import AdventureGen from './containers/AdventureGen'
import { ChakraProvider, Container } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Container maxW={'container.lg'}>
        <AdventureGen />
      </Container>
    </ChakraProvider>)
}

export default App
