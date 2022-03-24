import React, { useState, useEffect } from "react";
import axios from 'axios';
import Select from 'react-select';

export default function MonsterList (props) {

  const [monster, setMonster] = useState(null);
  const [currentMonster, setCMonster] = useState(null);
  const [name, setName] = useState(props.name)
  const [hp, setHp] = useState(props.hp)
  const [initiative, setInitiative] = useState(props.initiative)
  
 
useEffect(() => {
  axios.get(`https://www.dnd5eapi.co/api/monsters/`)
  .then(res => setMonster([res.data]));
}, []);

  const fetchingMonster = (monName) => {
    
  return (axios.get(`https://www.dnd5eapi.co/api/monsters/${monName}`)
  .then(res => setCMonster(res.data)))
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

  
  
  console.log('selected',currentMonster)

  return (
    <main>
        {monster !== null && parsedMonster()}
    </main>
  )
}