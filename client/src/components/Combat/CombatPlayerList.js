import React, { useState, useEffect } from "react";
import CombatPlayer from "./CombatPlayer";
import './CombatPlayerList.scss'
import axios from 'axios';
import Select from 'react-select';



function CombatPlayerList (props) {

  const [monster, setMonster] = useState(null);
  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [dexterity, setDexterity] = useState('');
  const [dnd_class, setDnDClass] = useState('');
  const [playerData, setPlayerData] = useState([{
    name: 'Lezana Carlucci',
    race: 'human',
    dnd_class: 'paladin',
    stats: {
      strength: 14,
      dexterity: 10,
      constitution: 16,
      intelligence: 10,
      wisdom: 12,
      charisma: 18,
      hp: 81
    },
    condition_id: 1,
    level: 8,
    conditions: [
      {
        index: 'blinded',
        name: 'Blinded'
      },
      {
        index: 'poisoned',
        name: 'Poisoned'
      }
    ]
  },
  {
    name: 'Rorin Grimleeper',
    race: 'dwarf',
    dnd_class: 'fighter',
    stats: {
      strength: 16,
      dexterity: 12,
      constitution: 14,
      intelligence: 16,
      wisdom: 18,
      charisma: 12,
      hp: 90
    },
    condition_id: 2,
    level: 9,
    conditions: []
  },
  {
    name: 'Halyassa Diltheth',
    race: 'dragonborn',
    dnd_class: 'barbarian',
    stats: {
      strength: 15,
      dexterity: 13,
      constitution: 14,
      intelligence: 14,
      wisdom: 14,
      charisma: 14,
      hp: 53
    },
    condition_id: 3,
    level: 5,
    conditions: []
  },
  {
    name: 'Nym Silveroak',
    race: 'elf',
    dnd_class: 'ranger',
    stats: {
      strength: 14,
      dexterity: 16,
      constitution: 14,
      intelligence: 14,
      wisdom: 15,
      charisma: 16,
      hp: 58
    },
    condition_id: 4,
    level: 5,
    conditions: [
      {
        index: 'invisible',
        name: 'Invisible'
      }
    ]
  },
  {
    name: 'Flambard Kaese',
    race: 'halfling',
    dnd_class: 'wizard',
    stats: {
      strength: 12,
      dexterity: 12,
      constitution: 16,
      intelligence: 18,
      wisdom: 18,
      charisma: 13,
      hp: 61
    },
    condition_id: 5,
    level: 6,
    conditions: [
      {
        index: 'exhaustion',
        name: 'Exhaustion'
      },
      {
        index: 'restrained',
        name: 'Restrained'
      }
    ]
  },
  {
    name: 'Marlypsis Grantham',
    race: 'tiefling',
    dnd_class: 'druid',
    stats: {
      strength: 14,
      dexterity: 13,
      constitution: 14,
      intelligence: 15,
      wisdom: 16,
      charisma: 14,
      hp: 75
    },
    condition_id: 6,
    level: 7
  }]);

  //monster ======================================================
  useEffect(() => {
    axios.get(`https://www.dnd5eapi.co/api/monsters/`)
    .then(res => setMonster([res.data]));
  }, []);

  const changeInput = (res) => {
    setDnDClass('monster')
    setName(res.data.name)
    setHp(res.data.hit_points)
    setDexterity(res.data.dexterity)
  }
  const fetchingMonster = (monName) => {
   
    return (axios.get(`https://www.dnd5eapi.co/api/monsters/${monName}`)
    // .then(res => setCMonster(res.data)))
    .then (res => changeInput(res)))
    .catch(err => console.log(err))
 
  }
  
  function parsedMonster () {
  
    let options = []
  
    for (let i = 0; i < 332; i++) {
      options.push ({
        value: monster[0].results[i].index,
        label: monster[0].results[i].name }) 
    }
  
    return(<Select
      onChange={(value) => fetchingMonster(value.value)}
      options={options}/>)
  }
  
//==========================================================================
 
  const reset = () => {
    setDnDClass('')
    setName("")
    setHp("")
    setDexterity('')
  }

  function validate () {

      let result = {
        dnd_class,
        name,
        stats: {
          hp,
          dexterity: dexterity
        }
      };
      setPlayerData([...playerData, result]);
      reset();
    
  }
  
  // console.log('selected', currentMonster)
  
  const newPlayerData = playerData.sort(function(a,b) {return b.stats.dexterity-a.stats.dexterity});
  const parsedPlayers = newPlayerData.map(player => <CombatPlayer key={player.name} {...player}/>)
  
  
return (
  <div className="CombatList">
    <section>
      <h3>Create Your Own Character</h3>
      <form onSubmit={e => e.preventDefault()}>
        <input
        dnd_class='dnd_class'
        type='text'
        placeholder='enter your class'
        value={dnd_class}
        onChange= {e => setDnDClass(e.target.value)}
        />
        <input 
        name="name"
        type='text'
        placeholder="enter your name"
        value={name}
        onChange= {e => setName(e.target.value)}/>
        <input 
        hp='hp'
        type='number'
        placeholder="enter your health"
        value={hp}
        onChange= {e => setHp(e.target.value)}/>
        <input
        dexterity='dexterity'
        type='number'
        placeholder="enter your dexterity"
        value={dexterity}
        onChange= {e => setDexterity(e.target.value)}/>
      </form>
      </section>

      <h3>Pick a Monster</h3>
      {monster !== null && parsedMonster()}

      <section>
        <button onClick={validate}>Create</button>
        <button onClick={reset}>Clear</button>
      </section>
      
    {parsedPlayers}
  </div>
)
}

export default CombatPlayerList;