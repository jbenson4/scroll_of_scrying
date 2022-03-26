import React from 'react';
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
  
  const parseConditions = (conditions) => {
    const parsedConds = conditions.map(condition => 
      {return {label:`${condition.name}`, value:`${condition.index}`, description:`${condition.description}`}
  });
    return parsedConds;
  }
  
  function updateConditions(options) {
    setConditions(options.map(option => {
      return {name: option.label, index: option.value}
    }))
    console.log(conditions);
    console.log(playerId);
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
        <Select options={options} isMulti defaultValue={ parseConditions(conditions) } onChange={updateConditions}/>
        <button onClick={back}>cancel</button>
        <button onClick={back}>submit</button>
      </form>
    </div>
  )
}

export default Edit