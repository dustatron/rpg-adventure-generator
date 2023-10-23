import './App.css'
import { useState } from "react"
import adventureOptions, { Detail } from './tables'
import Section from './components/Section'
import { rollDice } from './assets/utils'

function App() {
  const [adventureSelected, setAdventureSelected] = useState<Detail>()
  const [stepTwo, setStepTwo] = useState<Detail>()
  const [stepThree, setStepThree] = useState<Detail>()
  const [stepFour, setStepFour] = useState<Detail>()
  const [location, setLocation] = useState<string>()

  const {
    adventureType,
    civicList,
    employmenList,
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
      <h1>Adventure Generator</h1>
      <p>Quickly inspire a one off DnD game session.</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={() => handleClear()}>Clear</button>
        <button onClick={() => handleFullRandom()}>Full Random</button>
      </div>
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
        <article >
          <details>
            <summary className="contrast">
              <h4>Location:</h4>
              <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center", padding: '10px' }}>
                <div style={{ padding: '10px', border: '1px solid white', borderRadius: '5px', width: "65%", textAlign: "left" }}>
                  <div>{location}</div>
                </div>
                <div style={{ display: "flex", justifyContent: 'center', width: "10%" }}>
                  <button onClick={() => setLocation(rollDice(locationList) as string)}> Re-Roll </button>
                </div>
              </div>
            </summary>
            <div>
              <div style={{ display: 'flex', flexDirection: "row", width: '100%', flexWrap: "wrap" }}>
                {locationList.map((local) =>
                  <button style={{ width: '19%', margin: '5px', height: '70px' }} key={local} onClick={() => setLocation(local)}> {local} </button>
                )}
              </div>

            </div>
          </details>



        </article >
      )
      }
    </>
  )
}

export default App
