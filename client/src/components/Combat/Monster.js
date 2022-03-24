import React, { useState, useEffect } from "react";
import axios from 'axios';
import Select from 'react-select';

export default function MonsterList () {

  const [monster, setMonster] = useState(null);
//monsters-------------------------------------------------------------
  
 
useEffect(() => {
  axios.get(`https://www.dnd5eapi.co/api/monsters/`)
  .then(res => setMonster([res.data]));
}, []);

function parsedMonster () {
  
  let options = []

  for (let i = 0; i < 332; i++) {
    options.push ({value: monster[0].results[i].name, label: monster[0].results[i].name}) 
  }
  return(<Select options={options}/>)
}

//===============================================-----------------111111111111111111

  return (
    <main>
        {monster !== null && parsedMonster()}
    </main>
  )
}