import React from 'react';
import TableRow from './TableRow';
import './Tables.scss';

const Tables = (props) => {

  return (
    <div>
      <div className='button-group'>
        <button className='table-category' onClick={props.setTableCategory}>Monsters</button>
        <button className='table-category' onClick={props.setTableCategory}>Magic Items</button>
        <button className='table-category' onClick={props.setTableCategory}>NPCs</button>
      <br></br>
      <label htmlFor='roll-length'>Table Length:</label>
      <br></br>
      <input id='roll-length' type='number' defaultValue='10' onChange={props.setTableLength}></input>
      <br></br>
      <button className='table-category' onClick={props.rollFunction}>Roll</button>
      </div>
      <br></br>
      <br></br>
      <div className='table-rows'>
        <ol>
          {props.monsters !== undefined && props.category.index === 'monsters' && props.monsters.map((item) => <TableRow key={item.index} name={item.name} getDetails={props.getDetails} category={props.category} />)}
          {props.items !== undefined && props.category.index === 'magic-items' && props.items.map((item) => <TableRow key={item.name} name={item.name} getDetails={props.getDetails} category={props.category} />)}
          {props.npcs !== undefined && props.category.index === 'np-cs' && props.npcs.map((item) => <TableRow key={() => props.npcs.indexOf(item)} npc={item} getDetails={props.getDetails} category={props.category} />)}
        </ol>
      </div>
    </div>
  )
}

export default Tables