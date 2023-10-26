import { useState } from 'react'
import adventureOptions, { Detail } from '../tables'
import Section from '../components/Section'
import { rollDice } from '../assets/utils'
import Location from "../components/Locations"
import { Button, Heading, Stack } from '@chakra-ui/react'
import Summary from '../components/Summary/Summary'

type Props = {}

function AdventureGen({ }: Props) {
    const [adventureSelected, setAdventureSelected] = useState<Detail>()
    const [stepTwo, setStepTwo] = useState<Detail>()
    const [stepThree, setStepThree] = useState<Detail>()
    const [stepFour, setStepFour] = useState<Detail>()
    const [location, setLocation] = useState<string>()


    const {
        adventureType,
        civicList,
        employmenList,
        conspiraciesList,
        eventsList,
        explorationList,
        locationList,
        oppositionList,
        characterToSaveList
    } = adventureOptions

    const getSectionTwoList = (sectionId?: string) => {
        switch (sectionId) {
            case civicList.id:
                return civicList.details;
            case employmenList.id:
                return employmenList.details;
            case eventsList.id:
                return eventsList.details
            case explorationList.id:
                return explorationList.details
            case conspiraciesList.id:
                return conspiraciesList.details
            default:
                return null
        }
    }

    const handleSelectAdventure = (type: Detail) => {
        setAdventureSelected(type)
        const stepTwo = getSectionTwoList(type.id)
        setStepTwo(rollDice(stepTwo || []) as Detail)

    }

    const sectionTwoSelection = getSectionTwoList(adventureSelected?.id)

    const handleFullRandom = () => {
        const stepOne = rollDice(adventureType) as Detail
        const stepTwo = getSectionTwoList(stepOne.id)
        setAdventureSelected(stepOne)
        setStepTwo(rollDice(stepTwo || []) as Detail)
        setStepThree(rollDice(characterToSaveList.details) as Detail)
        setStepFour(rollDice(oppositionList.details) as Detail)
        setLocation(rollDice(locationList) as string)
    }

    const handleClear = () => {
        setAdventureSelected(undefined)
        setStepTwo(undefined)
        setStepThree(undefined)
        setStepFour(undefined)
        setLocation(undefined)
    }


    return (
        <>
            <Stack spacing={2} p='5' m='3'>
                <Heading as='h2' size='2xl' mb={2}>Adventure Generator</Heading>
                <Heading as='h5' size='sm'>
                    Quickly inspire a one off DnD game session.
                </Heading>
            </Stack>
            <Stack direction="row" justifyContent="space-between" spacing={10} m='3'>
                <Button w='30%' onClick={() => handleClear()} colorScheme='gray'>Clear</Button>
                <Button w='30%' onClick={() => handleFullRandom()} colorScheme='facebook'>Full Random</Button>
            </Stack>

            {adventureSelected && (
                <Summary adventure={adventureSelected} stepTwo={stepTwo} stepThree={stepThree} stepFour={stepFour} location={location} />
            )}

            <Section
                title={"Adventure Type"}
                details={adventureType}
                selected={adventureSelected}
                setState={handleSelectAdventure}
            />

            {adventureSelected && sectionTwoSelection && (
                <Section
                    title={`${adventureSelected.title}`}
                    details={sectionTwoSelection}
                    selected={stepTwo}
                    setState={setStepTwo}
                />
            )}
            {adventureSelected && sectionTwoSelection && (
                <Section
                    title={`Characte To Save`}
                    details={characterToSaveList.details}
                    selected={stepThree}
                    setState={setStepThree}
                />
            )}
            {adventureSelected && sectionTwoSelection && (
                <Section
                    title={`The Opposition`}
                    details={oppositionList.details}
                    selected={stepFour}
                    setState={setStepFour}
                />
            )}

            {adventureSelected && (
                <Location location={location} setLocation={setLocation} />
            )
            }
        </>
    )
}

export default AdventureGen