import React from 'react'
import TableRow from './TableRow'

const Tables = (props) => {

  return (
    <div>
      <button onClick={props.setTableCategory}>Monsters</button>
      <button onClick={props.setTableCategory}>Magic Items</button>
      <button onClick={props.setTableCategory}>NPCs</button>
      <br></br>
      <label htmlFor='roll-length'>Table Length:</label>
      <br></br>
      <input id='roll-length' type='number' defaultValue='10' onChange={props.setTableLength}></input>
      <br></br>
      <button onClick={props.setTableCategory}>Roll Again</button>
      <br></br>
      <br></br>

      <ol>

      {props.categoryItems !== undefined && props.category.index !=='np-cs' && props.categoryItems.map((item) => <TableRow key={item.index} name={item.name} getDetails={props.getDetails} category={props.category} />)}
      {props.category.index === 'np-cs' && props.categoryItems.map((item) => <TableRow key={item.name} npc={item} getDetails={props.getDetails} category={props.category} />)}
      </ol>
    </div>
  )
}

export default Tables