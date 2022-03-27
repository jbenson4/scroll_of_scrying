import React, { useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

const options = [
  {value:'blinded', label:'Blinded', conditionId: 1},
  {value:'charmed', label:'Charmed', conditionId: 2},
  {value:'deafened', label:'Deafened', conditionId: 3},
  {value:'exhaustion', label:'Exhaustion', conditionId: 4},
  {value:'frightened', label:'Frightened', conditionId: 5},
  {value:'grappled', label:'Grappled', conditionId: 6},
  {value:'incapacitated', label:'Incapacitated', conditionId: 7},
  {value:'invisible', label:'Invisible', conditionId: 8},
  {value:'paralyzed', label:'Paralyzed', conditionId: 9},
  {value:'petrified', label:'Petrified', conditionId: 10},
  {value:'poisoned', label:'Poisoned', conditionId: 11},
  {value:'prone', label:'Prone', conditionId: 12},
  {value:'restrained', label:'Restrained', conditionId: 13},
  {value: 'stunned', label:'Stunned', conditionId: 14},
  {value: 'unconcious', label:'Unconcious', conditionId: 15}

]



const Edit = (props) => {
  const { back, stats, conditions, setConditions, playerId } = props;

  function handleConditions(condition) {
    if (conditions.some(cond => cond.name === condition.label)) {
      return
    } else {
      const newConditions = [...conditions, {name: condition.label, index: condition.value}]
      axios.post(`/players/conditions/${playerId}/${condition.value}`)
      .then(setConditions(newConditions))
    }
  }

  return (

    <div>
        <table>
        <thead>
          <tr>
            <th>STR</th>
            <th>DEX</th>
            <th>CON</th>
            <th>INT</th>
            <th>WIS</th>
            <th>CHA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{stats.strength}</td>
            <td>{stats.dexterity}</td>
            <td>{stats.constitution}</td>
            <td>{stats.intelligence}</td>
            <td>{stats.wisdom}</td>
            <td>{stats.charisma}</td>
          </tr>
        </tbody>
      </table>
        <Select options={options}  onChange={handleConditions} isClearable={false}/>
        <button onClick={back}>close</button>
    </div>
  )
}

export default Edit