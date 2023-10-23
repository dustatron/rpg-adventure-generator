import { v4 } from "uuid"

export type Detail = {
    id: string,
    description: string,
    title: string
}

export type Section = { id: string, details: Detail[] }

type AventureOptions = {
    adventureType: Detail[]
    eventsList: Section
    civicList: Section
    employmenList: Section
    explorationList: Section
    characterToSaveList: Section
    oppositionList: Section
    locationList: string[]
}

const eventsId = v4()
const civicId = v4()
const employmentId = v4()
const explorationId = v4()



export const adventureType: Detail[] = [
    {
        id: eventsId,
        description: 'The adventurers are caught up in events outside of their control.',
        title: 'Caught up in events'

    },
    {
        id: civicId,
        description: 'The adventuring party must assist a community.',
        title: 'Civic affair'
    },
    {
        id: employmentId,
        description: 'Employment. The party is hired to perform a task by an employer.',
        title: 'Employment'
    },
    {
        id: explorationId,
        description: 'The heroes must explore an area.',
        title: 'Exploration'
    }
]

export const eventsList: Section = {
    id: eventsId,
    details:
        [
            {
                id: v4(),
                title: "Marked for death",
                description: "Someone wants the party dead or the party must help someone marked for death. If the target is not a party member, roll on the Who table to find their identity. To find out who has ordered the target's death, roll on the Opposition table",
            },
            {
                id: v4(),
                description: " Blackmail",
                title: "A character is blackmailed by an enemy.Roll on the Who table for the identity of the blackmailer.To find out what the character must do, roll on the Employment table",
            },

            { id: v4(), title: "Escape", description: "The party has been captured and must escape or must help someone else escape capture.The characters may have been drugged and held for ransom or they may need to help a kidnapping victim.Roll on the Who table to determine who the party must assist in escaping.To determine the opposition roll on the Opposition table" },

            { id: v4(), title: "Escape", description: " Someone runs up to the party and begs them for help.It could be a thief fleeing the wrath of their guild, or a victim fleeing a kidnapper.To determine who the party needs to help, roll on the Who table.To find out who the opposition is, roll on the Opposition table" },

            {
                id: v4(),
                title: "Magical affliction",
                description: "A character or place is struck down by an enchantment, curse, or magical event.The party must find out who is responsible and stop them before it's too late. To determine who is responsible and roll on the Who table. This person may not have cast the spell directly, but is ultimately responsible for the event. Roll on the Opposition table to determine who is helping them"
            },
            { id: v4(), title: "Witnesses", description: "The party witness a deed that has serious consequences.This could be a kidnapping, a secret meeting, or a hunt for a fugitive.To find out what the player characters see roll on the Employment table.To discover their enemies, roll on the Opposition table" }

        ]
}

export const civicList: Section = {
    id: civicId,
    details: [
        { id: v4(), title: 'Plague', description: "A disease is spreading through an area and the heroes must find a cure. The disease could be as simple as a seasonal flu or a terrible plague of arcane origin." },
        { id: v4(), title: 'Natural disaster', description: "A fire, earthquake, flood or other natural disaster has claimed a settlement. The players must deal with the disaster and aid those in need." },
        { id: v4(), title: 'Revolution', description: "A tyrannical leader is being overthrown and the heroes are involved in the events. Alternatively, the players are asked to restore the rightful ruler to the throne.." },
        { id: v4(), title: 'Criminal gangs', description: "Brigands, bandits, and other criminal gangs are terrorizing a community. The players need to drive out the gangs and find out who's behind them." },
        { id: v4(), title: 'Mystical threat', description: "A community is under threat from a spell, curse, or ritual gone awry. The players must lift the spell to save them." },
        { id: v4(), title: 'New religion/cult', description: "A new cult has emerged in a town or city and the party must investigate it. It could be the religion of a newly risen deity or the machinations of evil entities." },
        { id: v4(), title: 'A valuable resource runs out', description: "Food, medicine or any other vital resource has run out and the heroes must retrieve some for the community. Roll on the Opposition table to see who wants to prevent the party from gaining the resources." },
        { id: v4(), title: 'Political upheaval', description: "A major political upheaval is taking place and the heroes become involved. It could be the assassination of a king, a war among heirs, or a political movement seeking power." },
        { id: v4(), title: 'Foreign threat', description: "A community is threatened by hostile outsiders. The threat can range from a hostile neighboring kingdom to a group of creatures out for destruction." },


    ]
}
export const employmenList: Section = {
    id: employmentId,
    details: [
        { id: v4(), title: "Escort", description: "The party is hired to escort a person or object to another location. Roll on the Who table for the employer. To find out who opposes the party, roll on the Opposition table. To determine the final location, consult a map of your setting, make a list of possible locations and select one at random." },

        { id: v4(), title: "Missing person", description: "A person has gone missing and the heroes have been asked to find them. This could be a lost child, a kidnapped council member or any other missing person. Roll on the Who table to determine who has gone missing and roll on the Opposition table to find out who was behind the disappearance." },

        { id: v4(), title: "Harm (or Kill)", description: "The player characters are hired to harm/kill someone or something. This includes monsters and other creatures. To find out who opposes the party roll on the Opposition table." },

        { id: v4(), title: "Kidnap", description: "The heroes must kidnap someone. This can range from a malicious kidnapping to saving someone from a evil cult. Roll on the Who table to determine whom the party must kidnap. Then roll on the Opposition table to determine who opposes the adventurers." },

        { id: v4(), title: "Manhunt", description: "A person is on the run and the party is hired to bring them back. Possibilities can range from a prisoner on the run from the law, to an heir fleeing his family responsibilities. To determine who is on the run, roll on the Who table. To determine the fugitive's loyalties or those helping them escape, roll on the Opposition table." },

        { id: v4(), title: "Guard duty", description: "The heroes are hired to protect a person, object or place. Roll on the Who to determine their employer. Then roll on the Opposition table to determine their enemies." },

        { id: v4(), title: "Spying. ", description: "The adventurers must gather information about a person or group and return with information. The task can be as simple as following a person to infiltrating a powerful organization. Roll on the Who table to determine the employer. Then roll on the Opposition table to discover who they are spying on." },

        { id: v4(), title: "Steal/Recover", description: "The characters have been hired by their employer to steal an object. To find out who they are to steal from, roll on the Opposition table. Alternatively, the party's been hired to recover stolen property from a thief. Roll on the Opposition table to find out who committed the theft." },

        { id: v4(), title: "Courier", description: "The characters are hired to deliver a package.To find out who opposes them and wants to prevent the delivery, roll on the Opposition table." },

        { id: v4(), title: "Infiltrate", description: "A group or organization has set a hideout or stronghold in an area. The adventurers must infiltrate the organization and possibly destroy it. Roll on the Who table for the employer. Then roll on the Opposition table to determine the target. To determine the strength or influence of the target, roll a 1d6." },

        { id: v4(), title: "Diplomacy", description: "Two or more factions are engaging in a war or rivalry. To prevent things from escalating, the heroes are needed to smooth things over. To determine who the aggrieved party is, roll on the Opposition table." },

    ]
}
export const explorationList: Section = {
    id: explorationId,
    details: [
        { id: v4(), title: "Knowledge.", description: "The adventurers are looking for knowledge. This knowledge could be the answer to a mystery, the location of a treasure, or mystical knowledge." },
        { id: v4(), title: "Contact", description: "The purpose behind exploring the area is to establish contact with a reclusive group such as a tribe or other isolated community. The party's employer may wish to trade with them or contact them for some other purpose." },
        { id: v4(), title: "Scouting", description: "The heroes are sent on a mission to find information about the location. This can include maps, military intelligence or the location of important people. Roll on the Opposition table to find out who the party's adversaries are." },
        { id: v4(), title: "Person", description: "The party must find a person at the location. It could be a thief in hiding, a kidnapped friend/loved one or any other person of importance." },
        { id: v4(), title: "Lair", description: "The heroes must locate the hideout of a group or creature. They may have to infiltrate the group or slay any creature they find. If the enemy isn't a creature, roll on the Opposition table to see who the party must find." },
        { id: v4(), title: "Creature", description: "The party's been sent to kill or capture a creature. It may be a dragon guarding a hoard or a unicorn for a nobleman's collection." },
        { id: v4(), title: "Lost treasure", description: "The heroes or their employers have uncovered rumors of a treasure or artifact at the location. The adventurers must locate the treasure or escort their patron to its location." },
        { id: v4(), title: "Supernatural site", description: "The party must locate a place of supernatural power. It could be a lost city, mystic portal, or any other site of spiritual or magical power." },

    ]
}

export const characterToSaveList: Section = {
    id: v4(),
    details: [
        { id: v4(), title: "Foreigner", description: "This person is from a distant land. They might be a diplomat on official business, an agent traveling incognito, or a villain enacting a dark plan." },
        { id: v4(), title: "Ordinary person", description: "An ordinary person like a farmer, tradesman, or any other regular member of society. This also includes informal community leaders who don't hold political office." },
        { id: v4(), title: "Friend or lover", description: "A friend or lover of a party member, or a friend lover of the employer." },
        { id: v4(), title: "Group or organization", description: "A person that represents a group of people or an organization. This can be a legal guild, such as a tradesmen's guild, or a more clandestine organization." },
        { id: v4(), title: "Family member", description: "The family of a party member or their employer is involved.." },
        { id: v4(), title: "Mysterious figure", description: "No one knows who this individual is, and they are involved in the adventure for mysterious reasons.They could be a prince from another land, an agent in exile, or a powerful being walking among mortals." },
        { id: v4(), title: "Religious figure", description: "A priest, preacher or religious leader is involved in the adventure. They might be a servant of the light or a corrupt cult leader." },
        { id: v4(), title: "Magic user", description: "A magic user is involved. It can be a wizard, cleric, druid, or any other spellcaster, regardless of class. This includes magic users who are good and upstanding as well as evil and tainted." },
        { id: v4(), title: "Noble", description: "A member of the ruling class is involved. To find out how influential the noble is roll a 1d6. A result of 1 might indicate a baron with almost no influence, while a result of 6 might be a queen or empress." },
        { id: v4(), title: "Government officials", description: "This person works for the government. Roll a 1d6 to find out how powerful the official is. A roll of 1 indicates a small-town official, while a roll of 6 indicates a very powerful individual." },
        { id: v4(), title: "Military", description: "The character works for the military. To discover how much military power the individual wields, roll a 1d6. A result of 1 indicates a simple soldier serving in the army, while a result of 6 is a general or commander-in-chief." },

    ]
}

export const oppositionList: Section = {
    id: v4(),
    details: [
        { id: v4(), title: "Cultists", description: "Cultists are adherents to forces of a dark or dangerous nature. However, not all cults are created equal. Roll a 1d6 to determine the relative strength of the cult that opposes the party." },
        { id: v4(), title: "Mercenaries", description: "Mercenaries are swords for hire that serve the highest bidder. The mercenaries might be a small band or a massive mercenary company. To discover the strength and influence of the mercenaries opposing the adventurers roll a 1d6." },
        { id: v4(), title: "Brigands Gangs", description: "Brigands and gangs control an area through violence and fear. The brigands can range from humans and similar races to creatures such as goblins and orcs.." },
        { id: v4(), title: "Noble", description: "A noble or group of nobles oppose the adventurers in reaching their objective. Roll a 1d6 to determine the power and influence the noble wields" },
        { id: v4(), title: "Group/Organization", description: "A group or organization opposes the heroes or their employer. Roll a 1d6 to determine the power and influence of the organization opposing the party." },
        { id: v4(), title: "Magic user", description: "A wizard, sorcerer, cleric, or any other suitable magic user opposes the party. This also includes groups of magic users such as schools and covens." },
        { id: v4(), title: "Creature", description: "An intelligent creature opposes the party in their quest. The creature might be working alone or be working with others." },
        { id: v4(), title: "Mystical entity", description: "A god, demon or any other mystical entity opposes the heroes in their task. To discover the amount of power the entity wields, roll a 1d6." },

    ]
}


export const locationList: string[] = [
    "Ruin",
    "Mine",
    "Tomb",
    "Cave",
    "Sacred location",
    "Hideout",
    "Underground vault",
    "Forest",
    "Desert",
    "Prison",
    "Fort",
    "Tower",
    "Mountain pass",
    "Small town",
    "Mystical site",
    "Location",
    "Encampment",
    "Swamp",
    "Island",
    "City sewer",
    "Graveyard",
    "Temple",
    "Coastal area",
    "Mansion",
    "Cove",
    "Tower",
    "Battlefield",
    "Magical laboratory",
    "Subterranean cavern",
    "Lost City",
    "Ancient castle",
]

const adventureOptions: AventureOptions = {
    adventureType,
    eventsList,
    characterToSaveList,
    civicList,
    employmenList,
    explorationList,
    locationList,
    oppositionList
}

export default adventureOptions