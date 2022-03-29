import React from 'react';
import TableRow from './TableRow';
import './Tables.scss';

const Tables = (props) => {

  return (
    <div>
      <div className='category-group'>
        <button className='table-category' onClick={props.setTableCategory}>MONSTERS</button>
        <button className='table-category' onClick={props.setTableCategory}>MAGIC ITEMS</button>
        <button className='table-category' onClick={props.setTableCategory}>NPCs</button>
      </div>
      <button className='table-category roll' onClick={props.rollFunction}>ROLL</button>
      <div className='table-length'>
        <label htmlFor='roll-length'>
          <h4>Table Length</h4>
        </label>
        <input id='roll-length' type='number' defaultValue='10' onChange={props.setTableLength}></input>
      </div>
      <ol className='ol-table table-rows'>
        {props.monsters !== undefined && props.category.index === 'monsters' && props.monsters.map((item) => <TableRow key={item.index} name={item.name} getDetails={props.getDetails} category={props.category} />)}
        {props.items !== undefined && props.category.index === 'magic-items' && props.items.map((item) => <TableRow key={item.name} name={item.name} getDetails={props.getDetails} category={props.category} />)}
        {props.npcs !== undefined && props.category.index === 'np-cs' && props.npcs.map((item) => <TableRow key={() => props.npcs.indexOf(item)} npc={item} getDetails={props.getDetails} category={props.category} />)}
      </ol>
    </div>
  )
}

export default Tables