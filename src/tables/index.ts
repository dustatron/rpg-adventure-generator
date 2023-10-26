import { v4 } from "uuid"

export type Detail = {
    id: string,
    description: string,
    title: string
}

export type Section = { id: string, details: Detail[] }

type AventureOptions = {
    adventureType: Detail[]
    civicList: Section
    characterToSaveList: Section
    conspiraciesList: Section
    employmenList: Section
    eventsList: Section
    explorationList: Section
    locationList: string[]
    oppositionList: Section
}

const eventsId = v4()
const civicId = v4()
const employmentId = v4()
const explorationId = v4()
const conspiraciesId = v4()



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
    },
    {
        id: conspiraciesId,
        description: 'The party becomes embroiled in criminal conspiracies, working undercover to dismantle criminal organizations and restore order.',
        title: 'Conspiracies'
    }
]

export const eventsList: Section = {
    id: eventsId,
    details:
        [
            { id: v4(), title: "Marked for death", description: "Someone wants the party dead or the party must help someone marked for death. If the target is not a party member, roll on the Who table to find their identity. To find out who has ordered the target's death, roll on the Opposition table" },
            { id: v4(), title: " Blackmail", description: "A character is blackmailed by an enemy.Roll on the Who table for the identity of the blackmailer.To find out what the character must do, roll on the Employment table" },
            { id: v4(), title: "Escape", description: "The party has been captured and must escape or must help someone else escape capture.The characters may have been drugged and held for ransom or they may need to help a kidnapping victim.Roll on the Who table to determine who the party must assist in escaping.To determine the opposition roll on the Opposition table" },
            { id: v4(), title: "Escape", description: " Someone runs up to the party and begs them for help.It could be a thief fleeing the wrath of their guild, or a victim fleeing a kidnapper.To determine who the party needs to help, roll on the Who table.To find out who the opposition is, roll on the Opposition table" },
            { id: v4(), title: "Magical affliction", description: "A character or place is struck down by an enchantment, curse, or magical event.The party must find out who is responsible and stop them before it's too late. To determine who is responsible and roll on the Who table. This person may not have cast the spell directly, but is ultimately responsible for the event. Roll on the Opposition table to determine who is helping them" },
            { id: v4(), title: "Witnesses", description: "The party witness a deed that has serious consequences.This could be a kidnapping, a secret meeting, or a hunt for a fugitive.To find out what the player characters see roll on the Employment table.To discover their enemies, roll on the Opposition table" }
        ]
}

export const conspiraciesList: Section = {
    id: conspiraciesId,
    details: [
        { id: v4(), title: "Shadows of the Council", description: "A secret council manipulates political affairs, and the party is drawn into their schemes. To uncover the truth, the party must infiltrate the council and reveal their hidden agendas." },
        { id: v4(), title: "Cult of the Void", description: "A mysterious cult worships an otherworldly entity, seeking to bring it into the material realm. The party must investigate the cult's activities, deciphering ancient texts to thwart their ritual." },
        { id: v4(), title: "The Puppetmaster's Web", description: "Powerful individuals are being controlled like puppets, affecting kingdom decisions. The party must track down the puppetmaster, discovering their mind-control methods and freeing the influential victims." },
        { id: v4(), title: "The Clockwork Conspiracy", description: "A technomagical cabal constructs clockwork automatons to replace key figures in society. The party must dismantle this conspiracy, finding the secret workshop and preventing the automatons' deployment." },
        { id: v4(), title: "Whispers from the Grave", description: "Deceased souls are being bound to serve a necromancer's bidding, disrupting the peace of the afterlife. The party must investigate these restless spirits, unearthing the necromancer's lair and stopping the dark ritual." },
        { id: v4(), title: "The Phantom Thief", description: "An impostor emulates a legendary thief, systematically pilfering treasures from high society elites. Elusive clues draw the party into a trap orchestrated by a secret thieves' guild. Unmasking the impostor reveals a startling truth: the impostor, the thieves' guild, and the elite society members are all the same individuals. The party, ensnared in this web of deception, must unravel the truth while escaping the entanglement of lies." },
        { id: v4(), title: "The Alchemist's Elixir", description: "In the clandestine laboratory of the renowned alchemist, the party unravels a twisted conspiracy. Victims, ensnared in the alchemist's experiments, are transformed into mindless minions. The elixir's creation is part of a grand design to amass an army of loyal followers. The party, racing against time, delves into the alchemist's dark past, unearths a vengeful motive: the alchemist was once betrayed and seeks to rebuild a shattered empire of his own, using his enslaved victims as pawns. Now, the party must not only halt the elixir's distribution but break the curse that enslaves the alchemist's victims. The truth behind the elixir reveals a tragic tale of betrayal and revenge, where the line between villain and victim blurs." },
        { id: v4(), title: "Coven of the Moon", description: "In the heart of the enchanted forest, a coven of witches masquerades as guardians of natural balance, while secretly harnessing lunar energy for nefarious ends. Under the guise of protective spells, they craft a web of deceit around their moonlit ceremonies. The party, lured by their feigned innocence, must navigate the tangled illusions, decipher the witches' true intentions, and thwart their scheme. Unraveling the conspiracy reveals a shocking twist: the witches seek not just power, but to reshape reality itself, plunging the world into an eternal night where their darkness reigns supreme." },
        { id: v4(), title: "The Astral Gatekeepers", description: "A secretive group guards ancient portals to other realms, but their intentions are unclear. The party must confront the gatekeepers, exploring the interplanar hubs and uncovering their motives, which might involve saving or dooming worlds." },
        { id: v4(), title: "The Song of the Sirens", description: "Coastal towns shiver under the deceitful allure of supposed sirens, leading sailors into fake sea caves with tales of hidden treasures. Illusionist tricksters, not mythical beings, orchestrate this scheme. The party's mission: unveil the deception, navigate illusory traps, and expose the sinister plot behind the sailors' capture, all while averting a looming dark ritual." }
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
        { id: v4(), title: 'Technological Advancement', description: "A city or community is on the brink of a technological revolution, and the heroes are called upon to aid in the implementation and protection of these advancements." },
        { id: v4(), title: 'Environmental Crisis', description: "The natural environment of a region is in peril, whether it's due to pollution, deforestation, or other factors. The party is tasked with restoring the balance of nature." },
        { id: v4(), title: 'Ethnic Tensions', description: "Different ethnic or racial groups within a city are in conflict, and the players are asked to mediate, prevent violence, or uncover the root cause of the tensions." },
        { id: v4(), title: 'Artistic Renaissance', description: "A cultural renaissance is occurring, with art, music, and literature flourishing. However, someone or something is threatening the artists and their creations, and the players must protect the creative spirit." },
        { id: v4(), title: 'Trade Disruption', description: "A vital trade route or resource is disrupted, causing economic turmoil in the region. The adventurers are tasked with reopening the route or finding alternative solutions." },
        { id: v4(), title: 'Curse Reversal', description: "A curse has befallen a prominent figure, causing misfortune for the entire community. The party must find the source of the curse and lift it to restore prosperity." },
        { id: v4(), title: 'Technomagical Marvel', description: "A brilliant inventor has created a groundbreaking technomagical device that could revolutionize the world. The players are asked to protect the inventor and their invention from those who seek to steal or destroy it." },
        { id: v4(), title: 'Educational Reform', description: "A visionary educator is introducing new teaching methods or knowledge that challenges the existing norms. The party is tasked with protecting the school and its teachers from conservative opposition." },
        { id: v4(), title: 'Mysterious Artifacts', description: "Ancient artifacts of unknown origin are discovered in the region, and they hold immense power. The heroes must prevent these artifacts from falling into the wrong hands or being misused." },
        { id: v4(), title: 'Technological Sabotage', description: "Saboteurs are disrupting the advancement of technology in the city. The party is hired to uncover the culprits and their motives, preventing further damage." },
        { id: v4(), title: 'Civic Corruption', description: "Corruption has infiltrated the city's government, leading to injustices and unrest. The players are tasked with exposing the corrupt officials and restoring law and order." },
        { id: v4(), title: 'Heirloom Restoration', description: "A prominent family's heirloom, vital to the city's history, has been stolen. The party must track down the thieves, recover the heirloom, and restore it to its rightful place." },
        { id: v4(), title: 'Cultural Exchange', description: "A cultural exchange program is being threatened by radicals who oppose the mingling of cultures. The heroes must ensure the success of the program and foster understanding between different communities." },
        { id: v4(), title: 'Aquatic Menace', description: "A powerful aquatic creature, be it a sea serpent, kraken, or other, is threatening coastal cities and trade routes. The adventurers are hired to eliminate the menace and ensure safe maritime travel." },
        { id: v4(), title: 'Heritage Preservation', description: "Historical sites and relics are in danger due to neglect or exploitation. The party is entrusted with preserving these heritage sites, guarding them against treasure hunters and ensuring their cultural significance is respected." },
        { id: v4(), title: 'Resource Disappearance', description: "A vital natural resource, such as a magical herb or mineral, has suddenly vanished, causing economic distress. The players must investigate the disappearance and find alternative sources to sustain the community." },
        { id: v4(), title: 'Botanical Anomaly', description: "Unusual and dangerous plants are spreading rapidly, threatening farmlands and communities. The party is called upon to investigate the anomaly and prevent its expansion, discovering its origins in the process." },
        { id: v4(), title: 'Cultural Integration', description: "Two distinct cultural or racial groups are being forcibly integrated, causing tensions. The players must facilitate understanding and harmony between the groups, dealing with resistance from both sides." },
        { id: v4(), title: 'Unstable Portal', description: "A magical portal has appeared, connecting the city to unknown realms. The party is tasked with exploring the other side, dealing with any threats, and ensuring the portal's safe use." },
        { id: v4(), title: 'Technological Competition', description: "A rival city is rapidly advancing in technology, leading to a competition for resources and influence. The heroes are enlisted to ensure their city's innovations stay ahead, facing industrial espionage and sabotage." }
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
        { id: v4(), title: "Bounty Hunt", description: "The party is hired to track down and capture or eliminate a dangerous criminal or monster, with a reward offered for their capture." },
        { id: v4(), title: "Artifact Retrieval", description: "Adventurers are employed to recover a powerful or valuable artifact from a remote or guarded location, facing traps and guardians in the process." },
        { id: v4(), title: "Sabotage", description: "The party is tasked with sabotaging a rival organization, enemy camp, or magical device to disrupt their plans or operations." },
        { id: v4(), title: "Ransom", description: "A notable person has been captured, and the party is hired to deliver a ransom or rescue them from their captors, facing dangers along the way." },
        { id: v4(), title: "Bodyguard", description: "The heroes are employed to protect an important figure, such as a diplomat, noble, or scholar, from potential assassins or threats during a crucial event or journey." },
        { id: v4(), title: "Crisis Mediation", description: "The party is called upon to mediate a conflict between two factions, races, or nations, preventing a full-scale war through diplomacy, negotiation, or strategic compromise." },
        { id: v4(), title: "Cursed Object Removal", description: "Adventurers are hired to locate and remove a cursed object or artifact that brings misfortune or supernatural threats to those around it." },
        { id: v4(), title: "Reputation Restoration", description: "A person or group's reputation has been tarnished by false accusations or rumors. The party is hired to uncover the truth and restore their honor." },
        { id: v4(), title: "Magical Beast Extermination", description: "A dangerous magical creature is threatening a town or region. The adventurers are employed to track it down and eliminate the threat." },
        { id: v4(), title: "Secret Society Infiltration", description: "The party is tasked with infiltrating a secretive organization to gather intelligence, disrupt their plans, or unveil their hidden agendas." }
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
        { id: v4(), title: "Relic Hunt", description: "The adventurers are on a quest to find a specific ancient artifact, often with mystical or legendary properties." },
        { id: v4(), title: "Beast Mastery", description: "The party is tasked with taming or capturing a rare and dangerous creature for a nobleman's menagerie or a wizard's magical experiments." },
        { id: v4(), title: "Elemental Nexus", description: "Exploring an area to harness the power of elemental forces, either for defensive purposes or to enhance magical abilities." },
        { id: v4(), title: "Forbidden Knowledge", description: "The party seeks forbidden or lost knowledge, delving into ancient tomes or deciphering cryptic runes to uncover secrets best left forgotten." },
        { id: v4(), title: "Exotic Flora and Fauna", description: "Exploring unknown lands to catalogue rare plants and creatures, either for scientific study, alchemical purposes, or for exotic pets." },
        { id: v4(), title: "Dimensional Anomalies", description: "Investigating strange dimensional rifts or anomalies that have appeared, often leading to parallel worlds, alternate realities, or even time travel." },
        { id: v4(), title: "Starfall Phenomenon", description: "Exploring the aftermath of a rare celestial event, where fallen stars or meteorites bring with them unique properties or magical resources." },
        { id: v4(), title: "Dreamscape Quest", description: "Venturing into the dreamscape realm, exploring the dreams of a powerful seer or tapping into collective unconsciousness for valuable insights." },
        { id: v4(), title: "Lost Civilization", description: "The adventurers are on a quest to rediscover a once-great civilization thought to be lost to time, uncovering their advanced technology, culture, and perhaps, their downfall." },
        { id: v4(), title: "Ethereal Nexus", description: "A mysterious ethereal nexus has appeared, connecting different planes of existence. The party must explore these surreal realms, facing otherworldly challenges and retrieving valuable artifacts." },
        { id: v4(), title: "Lost Arcane City", description: "Legends speak of an ancient city hidden in the depths of enchanted forests. The adventurers are tasked with finding this city, navigating magical traps, and uncovering forgotten spells of immense power." },
        { id: v4(), title: "Celestial Observatory", description: "A fabled observatory floating amidst the clouds holds the key to cosmic secrets. The party embarks on a skyward journey, facing aerial challenges and celestial guardians to unveil the mysteries of the stars." },
        { id: v4(), title: "Forgotten Elemental Realms", description: "The elemental planes are leaking into the material realm, causing havoc. The party must journey into these elemental realms, mastering their unique challenges and restoring the balance between the elements." },
        { id: v4(), title: "Enchanted Isles", description: "A chain of mystical islands has been discovered, each infused with a different type of magic. The adventurers must explore these isles, harnessing their magical properties and uncovering ancient sorceries." },
        { id: v4(), title: "Realm of Dreams", description: "An ethereal realm accessible only through dreams holds secrets of reality and illusion. The party enters this dream world, facing surreal challenges and deciphering cryptic visions to understand its true nature." },
        { id: v4(), title: "Timeless Library", description: "A vast library outside of time and space contains knowledge from every era. The adventurers must explore this timeless repository, solving riddles and challenges to gain access to unparalleled wisdom." },
        { id: v4(), title: "Planar Confluence", description: "Multiple planes of existence are colliding, creating a chaotic and ever-shifting landscape. The party explores this confluence, navigating through merging realities and battling creatures born from the fusion of worlds." },
        { id: v4(), title: "Starfall Enigma", description: "Mysterious fragments from falling stars hold cosmic energies. The adventurers embark on a quest to collect these starfall remnants, encountering celestial guardians and deciphering their ancient prophecies." },
        { id: v4(), title: "Astral Labyrinth", description: "An astral labyrinth, rumored to hold the secrets of the multiverse, has appeared. The party delves into its shifting passages, facing mind-bending puzzles and cosmic entities to unravel its enigmatic purpose." }
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
        { id: v4(), title: "Lost Child", description: "A young child who got separated from their family during a chaotic event and is now alone and scared." },
        { id: v4(), title: "Wounded Knight", description: "A brave knight injured in battle, seeking aid to heal their wounds and continue their noble quest." },
        { id: v4(), title: "Elderly Herbalist", description: "A wise herbalist with vast knowledge of plants and remedies, invaluable for healing and crafting potions." },
        { id: v4(), title: "Imprisoned Mage", description: "A powerful mage held captive by an evil sorcerer, needing rescue to prevent their magical knowledge from being misused." },
        { id: v4(), title: "Enchanted Beast", description: "A creature cursed by dark magic, longing to be freed from their monstrous form and return to their true self." },
        { id: v4(), title: "Cursed Bard", description: "A talented bard cursed to silence, seeking help to break the curse and regain their voice and music." },
        { id: v4(), title: "Mysterious Oracle", description: "A seer with cryptic visions, offering valuable guidance to the party in their quest, but needing protection from those who fear their powers." },
        { id: v4(), title: "Trapped Explorer", description: "An adventurer trapped in a collapsing cave, requiring assistance to escape and share their knowledge of hidden treasures." },
        { id: v4(), title: "Haunted Spirit", description: "A restless spirit seeking closure for unfinished business, aiding the party with valuable information in exchange for resolving their past." },
        { id: v4(), title: "Doomed Scholar", description: "A scholar cursed with forbidden knowledge, pursued by dark entities. Protecting them might unveil ancient secrets or bring danger to the party." },
        { id: v4(), title: "Fey Sprite", description: "A mischievous sprite from the Feywild, in need of protection from hunters who seek their magical essence." },
        { id: v4(), title: "Forgotten Guardian", description: "A guardian of an ancient relic, now weakened and vulnerable, seeking help to safeguard the artifact from falling into wrong hands." },
        { id: v4(), title: "Cursed Blacksmith", description: "A skilled blacksmith cursed to craft malevolent weapons, needing assistance to break the curse and restore their honorable craft." },
        { id: v4(), title: "Ethereal Dancer", description: "A spectral dancer cursed to perform in eternal darkness, seeking aid to find the light and peace to move on." },
        { id: v4(), title: "Guardian Golem", description: "A sentient stone golem programmed to protect a hidden vault, now deactivated and needing reactivation to fulfill its duty." },
        { id: v4(), title: "Stellar Navigator", description: "An alien navigator from a distant starship stranded on Earth, seeking help to repair their ship and return home." },
        { id: v4(), title: "Plague Survivor", description: "A survivor of a devastating plague, holding the key to an ancient remedy that could save others, but needing assistance to reach its location." },
        { id: v4(), title: "Whispering Ghost", description: "A benevolent ghost with important information, seeking aid to deliver a message or complete an unfinished task." },
        { id: v4(), title: "Guardian Sphinx", description: "An ancient sphinx guarding a sacred temple, requiring assistance to answer its riddles and gain access to the temple's secrets." },
        { id: v4(), title: "Lost Astronomer", description: "An astronomer lost in a labyrinthine observatory, needing help to escape and share their astronomical discoveries." },
        { id: v4(), title: "Weeping Banshee", description: "A banshee cursed to weep eternally, seeking aid to lift the curse and find peace for her tormented soul." },
        { id: v4(), title: "Spectral Alchemist", description: "A ghostly alchemist seeking rare ingredients in the living world, but unable to interact with physical objects without help from the living." },
        { id: v4(), title: "Enchanted Puppet", description: "A sentient puppet animated by magic, seeking assistance to break free from its strings and explore the world." },
        { id: v4(), title: "Moonlit Fae Queen", description: "A fae queen cursed to eternal moonlight, needing help to lift the curse and restore balance to her fae realm." },
        { id: v4(), title: "Guardian Treant", description: "A wise treant protecting an ancient forest, seeking assistance to heal the forest from a blight caused by dark magic." },
        { id: v4(), title: "Tomb Guardian", description: "A spectral guardian of a long-forgotten tomb, requiring help to prevent grave robbers from desecrating the resting place of ancient kings." },
        { id: v4(), title: "Cursed Siren", description: "A siren cursed to lure ships to their doom, seeking aid to break the curse and use her enchanting voice for good." },
        { id: v4(), title: "Eldritch Scholar", description: "A scholar delving into forbidden knowledge, now pursued by eldritch horrors, needing protection in exchange for arcane secrets." },
        { id: v4(), title: "Guardian Djinn", description: "A benevolent djinn bound to a magical artifact, seeking assistance to fulfill three wishes and gain freedom from the artifact's confinement." },
        { id: v4(), title: "Time-Weaver Oracle", description: "An oracle with the ability to manipulate time, needing help to stabilize temporal anomalies and prevent a catastrophic time rift." }
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
        { id: v4(), title: "Cultists", description: "Cultists are adherents to forces of a dark or dangerous nature. However, not all cults are created equal. Roll a 1d6 to determine the relative strength of the cult that opposes the party." },
        { id: v4(), title: "Shadow Assassins", description: "Masters of stealth and subterfuge, these assassins move like shadows in the night, striking their targets with deadly precision." },
        { id: v4(), title: "Chimera", description: "A mythical beast with the body and heads of multiple animals. Each head possesses a different elemental breath attack." },
        { id: v4(), title: "Sorceress of the Abyss", description: "A powerful sorceress who draws her magic from the depths of the abyss, capable of summoning nightmarish creatures and casting curses." },
        { id: v4(), title: "Grave Warden", description: "Undead guardians of ancient tombs and burial grounds. They wield ancient weapons and possess an unyielding determination to protect their resting places." },
        { id: v4(), title: "Fire Elemental Lord", description: "A colossal being made entirely of living flames. Its touch sears the flesh, and its fiery attacks can engulf entire areas in flames." },
        { id: v4(), title: "Venomous Medusa", description: "A snake-haired creature with a gaze that turns living beings into stone. Additionally, her venomous arrows strike with deadly accuracy." },
        { id: v4(), title: "Ice Lich", description: "An undead sorcerer who commands the power of ice and frost. His spells freeze the air itself, and he can summon blizzards and ice golems at will." },
        { id: v4(), title: "Thunderous Storm Giant", description: "A colossal giant with control over thunder and lightning. His footsteps shake the earth, and his lightning strikes can level entire mountains." },
        { id: v4(), title: "Cursed Banshee", description: "A vengeful spirit with a mournful wail that can shatter steel and bone. Those who hear her scream are cursed to a fate worse than death." },
        { id: v4(), title: "Lycanthropic Werewolves", description: "A leader of a fearsome pack of werewolves, possessing immense strength and agility under the light of the full moon." },
        { id: v4(), title: "Dread Necromancer", description: "A master of death magic, capable of raising legions of undead and wielding dark spells that drain life from the living." },
        { id: v4(), title: "Gorgon Titan", description: "A gargantuan creature with a body of stone and snakes for hair. Its gaze can turn living beings to solid stone statues." },
        { id: v4(), title: "Mindflayer Overlord", description: "An intelligent and psychic alien creature with octopus-like tentacles, capable of manipulating thoughts and extracting knowledge from minds." },
        { id: v4(), title: "Infernal Succubus", description: "A seductive demoness skilled in illusion and charm. She lures victims into her grasp before revealing her true, monstrous form." },
        { id: v4(), title: "Terrorizing Poltergeist", description: "A mischievous spirit capable of moving objects and creating terrifying illusions, haunting homes and driving occupants to madness." },
        { id: v4(), title: "Swamp Hag", description: "A wicked crone living in the depths of a murky swamp. She brews potions and casts curses, controlling the creatures of the swamp to do her bidding." },
        { id: v4(), title: "Clockwork Behemoth", description: "A massive, steam-powered construct with gears and pistons. Its metal limbs crush everything in its path, and it emits scalding steam as a weapon." },
        { id: v4(), title: "Plaguebearer Warlock", description: "A dark spellcaster wielding diseases as weapons. He spreads pestilence and decay, with the power to wither crops and bring illness to entire villages." },
        { id: v4(), title: "Abyssal Aberration", description: "A creature from the depths of the abyss, its form constantly shifting and warping reality. It defies comprehension and possesses alien powers beyond mortal understanding." }
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
    "Acient Ruines",
    "Castle in the sky",
    "Mountain fortress",
    "City of Gears",
    "City of Ice",
    "Isle of History",
    "The Hidden Village",
    "The Invisible Lake",
    "Village on a giant creature",
    "dragon graveyard",
    "The Shadow lands",
    "Haunted hill",
    "The Lost Library",
    "Ship Graveyard",
    "A Forgotten Amusement parks",
    "The wasteland",
    "Petrified forest",
    "Mystic Waterfall",
    "Forgotten Catacombs",
    "Enchanted Forest",
    "Haunted Castle Ruins",
    "Lost Desert Oasis",
    "Ethereal Moors",
    "Shadowy Marshlands",
    "Dragon's Lair",
    "Whispering Caves",
    "Abandoned Lighthouse",
    "Ancient Observatory",
    "Sorcerer's Tower",
    "Ghost Town",
    "Cursed Mines",
    "Witch's Hut",
    "Vampire's Crypt",
    "Celestial Observatory",
    "Troll Bridge",
    "Mermaid's Cove",
    "Temple of the Moon",
    "Ruins of Eldoria",
    "Phoenix Roost",
    "Goblin Market",
    "Oracle's Chamber",
    "Pirate's Cove",
    "Time-Traveling Portal",
    "Frost Giant's Fortress",
    "Djinn's Mirage",
    "Siren's Reef",
    "Kraken's Abyss",
    "Chimera's Den",
    "Gargoyle's Perch",
    "Minotaur's Maze",
    "Banshee's Hollow",
    "Feywild Glade",
    "Werewolf's Woods",
    "Griffin's Aerie",
    "Lich's Crypt",
    "Centaur's Savannah",
    "Satyr's Grove",
    "Basilisk's Lair",
    "Necromancer's Sanctum",
    "Yeti's Peak",
    "Elemental Nexus",
    "Titan's Forge"

]

const adventureOptions: AventureOptions = {
    adventureType,
    eventsList,
    conspiraciesList,
    characterToSaveList,
    civicList,
    employmenList,
    explorationList,
    locationList,
    oppositionList
}

export default adventureOptions