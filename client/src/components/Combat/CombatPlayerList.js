import React, { useState, useEffect, useContext } from "react";
import CombatPlayer from "./CombatPlayer";
import './CombatPlayerList.scss'
import axios from 'axios';
import Select from 'react-select';
import { PartyContext } from '../../providers/PartyProvider';




function CombatPlayerList (props) {

  const { state } = useContext(PartyContext);
  const [monster, setMonster] = useState(null);
  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [dexterity, setDexterity] = useState('');
  const [dnd_class, setDnDClass] = useState('');
  const [playerData, setPlayerData] = useState(state.players);

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
  
  console.log(state.players)
  
  
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
      
    {state.players !== undefined && parsedPlayers}
  </div>
)
}

export default CombatPlayerList;