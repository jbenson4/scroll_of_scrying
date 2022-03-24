import React, { useState} from "react";
import CombatPlayer from "./CombatPlayer";
import './CombatPlayerList.scss'
import MonsterList from "./Monster";



function CombatPlayerList (props) {

  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [initiative, setInitiative] = useState('');
  const [error, setError] = useState('');
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
  
  

  const reset = () => {
    setName("")
    setHp("")
    setError('')
    setInitiative('')
  }

  function validate () {
     if (name === "") {
       setError("Name can't be empty")
       return;
     } 
     if (hp === "" || hp === 0) {
       setError("Hp can't be empty/zero")
     }
     if (initiative === "" || initiative === 0) {
      setError("Initiative can't be empty/zero")
      } else {
      setError('');
    
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
  }
  
  
  const newPlayerData = playerData.sort(function(a,b) {return b.stats.initiative-a.stats.initiative});
  const parsedPlayers = newPlayerData.map(player => <CombatPlayer key={player.name} {...player}/>)
  
  
return (
  <div className="CombatList">
    <section>
      <form onSubmit={e => e.preventDefault()}>
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
        initiative='initiative'
        type='number'
        placeholder="enter your initiative"
        value={initiative}
        onChange= {e => setInitiative(e.target.value)}/>
      </form>
      </section>
      <section>{error}</section>
      <section>
        <button onClick={validate}>Create</button>
        <button onClick={reset}>Clear</button>
      </section>
      <MonsterList/>
    {parsedPlayers}
  </div>
)
}

export default CombatPlayerList;