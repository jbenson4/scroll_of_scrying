import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  {value:'blinded', label:'Blinded'},
  {value:'charmed', label:'Charmed'},
  {value:'deafened', label:'Deafened'},
  {value:'exhaustion', label:'Exhaustion'},
  {value:'frightened', label:'Frightened'},
  {value:'grappled', label:'Grappled'},
  {value:'incapacitated', label:'Incapacitated'},
  {value:'invisible', label:'Invisible'},
  {value:'paralyzed', label:'Paralyzed'},
  {value:'petrified', label:'Petrified'},
  {value:'poisoned', label:'Poisoned'},
  {value:'prone', label:'Prone'},
  {value:'restrained', label:'Restrained'},
  {value: 'stunned', label:'Stunned'},
  {value: 'unconcious', label:'Unconcious'}

]



const Edit = (props) => {
  const { back, stats, conditions, setConditions, PlayerId } = props;
  
  const parseConditions = (conditions) => {
    const parsedConds = conditions.map(condition =>{return {label:`${condition.name}`, value:`${condition.index}`}});
    return parsedConds;
  }
  
  function updateConditions(prevConditions, newConditions, PlayerId) {
    const conditionsToPush = newConditions.filter(condition => {
      return !prevConditions.has(condition);
    })
    console.log(PlayerId, conditionsToPush);
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
      <form>
        <Select options={options} isMulti defaultValue={ parseConditions(conditions) }/>
        <button onClick={back}>cancel</button>
        <button onClick={back}>submit</button>
      </form>
    </div>
  )
}

export default Edit