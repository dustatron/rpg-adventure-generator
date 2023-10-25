
import { locationList } from '../../tables'
import { rollDice } from '../../assets/utils'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Card, CardBody, CardHeader, Heading, Stack, Text } from '@chakra-ui/react'

type Props = {
    location?: string,
    setLocation: (local?: string) => void
}

const Locations = ({ location, setLocation }: Props) => {

    return (
        <Card boxShadow='md' p='6' rounded='md' bg='gray.100' mb='5'>
            <CardHeader p='1'>
                <Heading textAlign={'center'} as='h2' size='sm' mb='1'>Location:</Heading>
            </CardHeader>
            <CardBody>
                <Stack direction={'row'} justifyContent='space-between'>
                    <Box>
                        <Text fontWeight='bolder'>{location}</Text>
                    </Box>
                    <Box>
                        <Button onClick={() => {
                            return setLocation(rollDice(locationList) as string)
                        }} colorScheme='facebook'>Re-roll</Button>
                    </Box>
                </Stack>
            </CardBody>

            <Accordion allowToggle mt='2'>
                <AccordionItem>
                    <AccordionButton background={'white'}>
                        <Box as="span" flex='1' textAlign='left' color="GrayText">
                            Show All Options
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel pb={4}>
                        <Stack direction='row' wrap={'wrap'} p='4'>
                            {locationList.map((local) =>
                                <Button w='30%' colorScheme={local === location ? 'cyan' : 'gray'} key={local} onClick={() => setLocation(local)}> {local} </Button>
                            )}

                        </Stack>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

        </Card >
    )
}

export default Locations