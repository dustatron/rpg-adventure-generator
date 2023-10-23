import { Detail } from "../tables"

export const rollDice = (options: Detail[] | string[]) => {

    if (!options) return undefined

    const amount = options.length
    const randomChoice = Math.floor(Math.random() * amount)
    return options[randomChoice]
}