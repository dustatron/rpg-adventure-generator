import { rollDice } from '../../assets/utils'
import { Detail } from '../../tables'

type Props = { details: Detail[], title: string, setState: (detail: Detail) => void, selected?: Detail }

function Sections({ details, title, setState, selected }: Props) {

    return (
        <article style={{ padding: '35px', marginBottom: '5px' }}>
            <details >
                <summary >
                    <h4>{title}:</h4>
                    <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center", padding: '10px' }}>
                        <div style={{ padding: '10px', border: '1px solid white', borderRadius: '5px', width: "65%", textAlign: "left" }}>
                            <div style={{ fontWeight: "bolder", marginBottom: "5px" }}>{selected ? selected.title : <>Not Selected</>}</div>
                            <div>{selected ? selected.description : <></>}</div>
                        </div>
                        <div style={{ width: "10%" }}>
                            <button onClick={() => setState(rollDice(details) as Detail)}>Re-roll</button>
                        </div>
                    </div>
                </summary>
                <ul>
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-start", padding: "5px" }}>

                        {details.map((type) => <button style={{ marginLeft: '10px', width: "30%", display: "flex", justifyContent: "flex-start", flexDirection: "column" }} onClick={() => setState(type)} key={type.id}>
                            <div style={{ textAlign: "left", fontWeight: 'bold' }}>
                                {type.title}
                            </div>
                            <div style={{ textAlign: "left" }}>
                                {type.description}
                            </div>
                        </button>)}
                    </div>
                </ul>
            </details>



        </article >

    )
}

export default Sections