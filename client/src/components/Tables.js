import React from 'react'
import TableRow from './TableRow'
import useRollTableData from '../hooks/useRollTableData';

const Tables = () => {
  const { categoryItems, setTableCategory, setTableLength } = useRollTableData();

  return (
    <div>
      <button onClick={setTableCategory}>Monsters</button>
      <button onClick={setTableCategory}>Magic Items</button>
      <button onClick={setTableCategory}>NPCs</button>
      <label for='roll-length'>Table Length:</label>
      <input id='roll-length' type='number' defaultValue='10' onChange={setTableLength}></input>

      {categoryItems !== undefined && categoryItems.map((item) => <TableRow key={item.id} name={item.name} />)}
    </div>
  )
}

export default Tables