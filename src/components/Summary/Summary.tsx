import { Box, Card, Stack, Text } from "@chakra-ui/react"
import { Detail } from "../../tables"

type Props = {
    adventure?: Detail
    stepTwo?: Detail
    stepThree?: Detail
    stepFour?: Detail
    location?: string
}

function Summary({ adventure, location, stepFour, stepThree, stepTwo }: Props) {
    return (
        <Card background='gray.100' mb='3' p='2'>
            <Text fontWeight={'bolder'} pl='3' mb='1'>
                Mission:
            </Text>
            <Stack px='12'>
                {adventure && (
                    <Stack direction='row' justifyContent='space-between'>
                        <Box>
                            <Text mb='1'>
                                {adventure?.title}: {stepTwo?.title}
                            </Text>
                            <Text mb='1'>
                                Save {stepThree?.title} from {stepFour?.title}
                            </Text>
                        </Box>
                        <Box>
                            <Text mb='1'>
                                Environment type: {location}
                            </Text>
                        </Box>
                    </Stack>
                )}
            </Stack>
        </Card>
    )

}

export default Summary