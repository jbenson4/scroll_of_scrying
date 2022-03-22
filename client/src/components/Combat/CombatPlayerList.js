import React from "react";
import CombatPlayer from "./CombatPlayer";
import './CombatPlayerList.scss'

const playerData = [
  {
    name: 'Lezana Carlucci',
    race: 'human',
    dnd_class: 'paladin',
    stats: {
      initiative: 15,
      hp: 1
    },
    condition_id: 1,
    level: 8
  },
  {
    name: 'Rorin Grimleeper',
    race: 'dwarf',
    dnd_class: 'fighter',
    stats: {
      initiative: 20,
      hp: 100
    },
    condition_id: 2,
    level: 9
  },
  {
    name: 'Halyassa Diltheth',
    race: 'dragonborn',
    dnd_class: 'barbarian',
    stats: {
      initiative: 25,
      hp: 50
    },
    condition_id: 3,
    level: 5
  },
  {
    name: 'Nym Silveroak',
    race: 'elf',
    dnd_class: 'ranger',
    stats: {
      initiative: 1,
      hp: 25
    },
    condition_id: 4,
    level: 5
  },
  {
    name: 'Flambard Kaese',
    race: 'halfling',
    dnd_class: 'wizard',
    stats: {
      initiative: 30,
      hp: 75
    },
    condition_id: 5,
    level: 6
  },
  {
    name: 'Marlypsis Grantham',
    race: 'tiefling',
    dnd_class: 'druid',
    stats: {
      initiative: 10,
      hp: 10
    },
    condition_id: 6,
    level: 7
  }
];


const newPlayerData = playerData.sort(function(a,b) {return b.stats.initiative-a.stats.initiative});
const parsedPlayers = newPlayerData.map(player => <CombatPlayer key={player.name} {...player}/>)

function CombatPlayerList () {
return (
  <div className="CombatList">
    {parsedPlayers}
  </div>
)
}

export default CombatPlayerList;