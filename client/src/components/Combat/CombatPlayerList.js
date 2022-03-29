import React, { useState, useEffect, useContext } from "react";
import CombatPlayer from "./CombatPlayer";
import { DiceRoll } from '@dice-roller/rpg-dice-roller';
import './CombatPlayerList.scss'
import axios from 'axios';
import Select from 'react-select';
import { PartyContext } from '../../providers/PartyProvider';

function CombatPlayerList (props) {
  //states
  const { state, setState } = useContext(PartyContext);
  const [monster, setMonster] = useState(null);
  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [dexterity, setDexterity] = useState('');
  const [dnd_class, setDnDClass] = useState('');
  const [playerData, setPlayerData] = useState(newArr() || []);
  const [id, setID] = useState(0);
  const [active, setActive] = useState(false);
  const [error, setError] = useState();

  //monster ======================================================
  
  //grab every monster name from this api
  useEffect(() => {
    axios.get(`https://www.dnd5eapi.co/api/monsters/`)
    .then(res => setMonster([res.data]));
  }, []);

  //based on the data pulled from api, and set it as state
  const changeInput = (res) => {
    setID(playerData.length + 1)
    setDnDClass('monster')
    setName(res.data.name)
    setHp(res.data.hit_points)
    setDexterity(res.data.dexterity)
  }
  
  //the selected name will be pass in here and pull the data from api
  const fetchingMonster = (monName) => {
   
    return (axios.get(`https://www.dnd5eapi.co/api/monsters/${monName}`)
    // .then(res => setCMonster(res.data)))
    .then (res => changeInput(res)))
    .catch(err => console.log(err))
  }
  
  //Create options in drop down-list using react select
  function parsedMonster () {
  
    let options = []
  
    for (let i = 0; i < 332; i++) {
      options.push ({
        value: monster[0].results[i].index,
        label: monster[0].results[i].name }) 
    }
  
    return(
      <div style={{marginLeft: "10%", width: '80%'}}>
        <Select
        onChange={(value) => fetchingMonster(value.value)}
        options={options}/>
      </div>)
  }
  
//==========================================================================
// change dexterity to modifier for initiative
  function dexToMod (dex) {
  switch(dex) {
    case 1:
      return -5
      break;
    case 2:
    case 3:
      return -4
      break;
    case 4:
    case 5:
      return -3
      break;
    case 6:
    case 7:
      return -2
      break;
    case 8:
    case 9:
      return -1
      break;
    case 10:
    case 11:
      return 0
      break;
    case 12:
    case 13:
      return 1
      break;
    case 14:
    case 15:
      return 2
      break;
    case 16:
    case 17:
      return 3
      break;
    case 18:
    case 19:
      return 4
      break;
    case 20:
    case 21:
      return 5
      break;
    case 22:
    case 23:
      return 6
      break;
    case 24:
    case 25:
      return 7
      break;
    case 26:
    case 27:
      return 8
      break;
    case 28:
    case 29:
      return 9
      break;
    case 30:
      return 10
      break;
    default:
      console.log('dexless');
      break;
  }
   
  }

//resets the input log for name hp dex and class
  const reset = () => {
    setDnDClass('')
    setName("")
    setHp("")
    setDexterity('')
    setError('')
  }

  //adding new chara(object) into playerData array
  function validate () {
      if (!name) {
        setError('Please enter a name');
        return;
      } 
      if(!hp) {
        setError('Please enter a health');
        return;
      }
      if(!dexterity) {
        setError('Please enter dex');
        return;
      }

      setError('');
      let result = {
        id,
        dnd_class,
        name,
        stats: {  
          hp: Number(hp),
          dexterity: Number(dexterity)
        }
      };
      setState({...state, monsters:[...state.monsters, result]})
      setPlayerData([...playerData, result]);
      reset();
  }  
  
  //sorts players by initiative, and render them through CombatPlayer
  const newPlayerData = playerData.sort(function(a,b) {return b.stats.initiative-a.stats.initiative});
  const parsedPlayers = newPlayerData.map(player => <CombatPlayer changeHealth={changeHealth} onDelete={onDelete} id={playerData.id} getDetails={props.getDetails} key={player.name} monsters={state.monsters} {...player}/>)
  
  //Rolls a D20 dice with the dex modifier for all players in playerData and add initiative to each players' stats
  function ClickAllBtn () {

    let result = 0
    if (state.monsters.length > 0) {
      for (let i = 0; i < state.monsters.length; i++) {
        result = new DiceRoll ('d20')
        state.monsters[i].stats.initiative = (result.total + dexToMod(state.monsters[i].stats.dexterity))
      };
    }
    for (let i = 0; i < state.players.length; i++) {
      result = new DiceRoll ('d20')
      state.players[i].stats.initiative = (result.total + dexToMod(state.players[i].stats.dexterity))
    }
    setPlayerData([...playerData])
  };

  //function to delete a player in playerData
  function onDelete (arrID) {
    for (var i = 0; i < state.monsters.length; i++)
    {
      if (state.monsters[i].id === arrID) {
        playerData.splice(playerData.indexOf(state.monsters[i]),1)
        state.monsters.splice(state.monsters.indexOf(state.monsters[i]),1)
      }
    }
    setPlayerData([...playerData])
  }

  //function for change health of each player
  function changeHealth (arrID, newHealth) {
    for (var i = 0; i < playerData.length; i++) {
      if (playerData[i].id === arrID) {
        playerData[i].stats.hp = newHealth;
      }
    }
    setPlayerData([...playerData])
  }
  //function for combining monsters and players array from state
  function newArr () {
    let result = [];
    
    for(let player of state.players) {
      result.push(player)
    }
    for (let monster of state.monsters) {
      result.push(monster)
    }
    return result;
  }

  function toggleCustom () {
    setActive(!active)
  }
return (
  <div className="CombatList">
      <button className="addBtn" onClick={toggleCustom}>ADD CUSTOM</button>
    <section className={active ? 'null' : 'addList'}>

      <h3 className="subTitle">Create Your Own Character</h3>
  <div className="forms">
    <form onSubmit={e => e.preventDefault()}>
      
      <div className="inputAll">

        <div className="inputClass">
          <h4>Class</h4>
          <input
          dnd_class='dnd_class'
          type='text'
          placeholder='Enter your class'
          value={dnd_class}
          onChange= {e => setDnDClass(e.target.value)}
          />
        </div>

        <div className="inputHp">
          <h4>Health</h4>
          <input 
          hp='hp'
          type='number'
          placeholder="Enter your health"
          value={hp}
          onChange= {e => setHp(e.target.value)}/>
        </div>
        
        <div className="inputDex">
          <h4>Dexterity</h4>
          <input
          dexterity='dexterity'
          type='number'
          placeholder="Enter your dexterity"
          min={1}
          max={30}
          value={dexterity}
          onChange= {e => setDexterity(e.target.value)}/>
        </div>
      </div>

        <div className="inputName">
          <h4>Name</h4>
          <input 
          name="name"
          type='text'
          placeholder="Enter your name"
          value={name}
          onChange= {e => setName(e.target.value)}/>
        </div>
    </form>
  </div>

      <h3 className="subTitle">Pick a Monster</h3>
      {monster !== null && parsedMonster()}
      <section className="error">{error}</section>
      <section className="createNclear">
        <button onClick={validate}>Create</button>
        <button onClick={reset}>Clear</button>
      </section>
      </section>


      <button className='rollInitiate' onClick={ClickAllBtn}>ROLL INITIATIVE</button>
    {state.players !== undefined && parsedPlayers}
  </div>
)
}

export default CombatPlayerList;