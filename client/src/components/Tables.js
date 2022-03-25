import React from 'react'
import TableRow from './TableRow'
import useRollTableData from '../hooks/useRollTableData';

const Tables = () => {
  const { categoryItems, setContext } = useRollTableData();

  return (
    <div>
      <button onClick={setContext}>Monsters</button>
      <button onClick={setContext}>Magic Items</button>
      <button onClick={setContext}>NPCs</button>
      {categoryItems !== undefined && categoryItems.map((item) => <TableRow key={item.id} name={item.name} />)}
    </div>
  )
}

export default Tables