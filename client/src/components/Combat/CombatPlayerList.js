import React, { useState, useEffect } from "react";
import CombatPlayer from "./CombatPlayer";
import './CombatPlayerList.scss'
import axios from 'axios';
import Select from 'react-select';



function CombatPlayerList (props) {

  const [monster, setMonster] = useState(null);
  const [currentMonster, setCMonster] = useState(null);
  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [initiative, setInitiative] = useState('');
  const [playerData, setPlayerData] = useState([
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
  ]);

  //monster ======================================================
  useEffect(() => {
    axios.get(`https://www.dnd5eapi.co/api/monsters/`)
    .then(res => setMonster([res.data]));
  }, []);

  const changeInput = (res) => {
    setName(res.data.name)
    setHp(res.data.hit_points)
    setInitiative(res.data.dexterity)
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
    setName("")
    setHp("")
    setInitiative('')
  }

  function validate () {

    
     
      let result = {
        name,
        stats: {
          hp,
          initiative
        }
      };
      setPlayerData([...playerData, result]);
      reset();
    
  }
  
  // console.log('selected', currentMonster)
  
  const newPlayerData = playerData.sort(function(a,b) {return b.stats.initiative-a.stats.initiative});
  const parsedPlayers = newPlayerData.map(player => <CombatPlayer key={player.name} {...player}/>)
  
  
return (
  <div className="CombatList">
    <section>
      <h3>Create Your Own Character</h3>
      <form onSubmit={e => e.preventDefault()}>
        <input 
        id="name"
        name="name"
        type='text'
        placeholder="enter your name"
        value={name}
        onChange= {e => setName(e.target.value)}/>
        <input 
        id="hp"
        hp='hp'
        type='number'
        placeholder="enter your health"
        value={hp}
        onChange= {e => setHp(e.target.value)}/>
        <input
        id="dex"
        initiative='initiative'
        type='number'
        placeholder="enter your initiative"
        value={initiative}
        onChange= {e => setInitiative(e.target.value)}/>
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