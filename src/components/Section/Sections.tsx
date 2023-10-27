import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Card, CardBody, CardHeader, Heading, Stack } from '@chakra-ui/react'
import { rollDice } from '../../assets/utils'
import { Detail } from '../../tables'

type Props = { details: Detail[], title: string, setState: (detail: Detail) => void, selected?: Detail, id?: string }

function Sections({ details, title, setState, selected, id }: Props) {

    return (
        <Card id={id} boxShadow='md' p='1' rounded='md' bg='gray.100' mb='5'>
            <CardHeader p='1'>
                <Heading textAlign={'center'} as='h2' size='sm' mb='1'>{title}:</Heading>
            </CardHeader>
            <CardBody>
                <Stack direction={'row'} justifyContent='space-between'>

                    <Box>
                        <div style={{ fontWeight: "bolder", marginBottom: "5px" }}>{selected ? selected.title : <>Not Selected</>}</div>
                        <div>{selected ? selected.description : <></>}</div>
                    </Box>
                    <Box>
                        <Button onClick={() => setState(rollDice(details) as Detail)} colorScheme='facebook'>Re-roll</Button>
                    </Box>
                </Stack>

                <Accordion allowToggle mt='2'>
                    <AccordionItem>
                        <AccordionButton background={'white'}>
                            <Box as="span" flex='1' textAlign='left' color='gray.700'>
                                Show All Options
                            </Box>
                            <AccordionIcon color='gray.700' />
                        </AccordionButton>

                        <AccordionPanel pb={4}>
                            <Stack direction='row' wrap={'wrap'} p='4'>

                                {details.map((type) =>
                                    <Card w='45%' p='2' cursor={'pointer'} onClick={() => setState(type)} key={type.id} background={type.id === selected?.id ? 'blue.200' : 'white'}>
                                        <div style={{ textAlign: "left", fontWeight: 'bold' }}>
                                            {type.title}
                                        </div>
                                        <div style={{ textAlign: "left" }}>
                                            {type.description}
                                        </div>
                                    </Card>)}
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </CardBody>


        </Card >

    )
}

export default Sections