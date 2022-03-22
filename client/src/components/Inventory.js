import React from 'react';
import Item from './Item';

const itemsData = [
  {index: 'adamantine-armor', name: 'Adamantine Armor'},
  {index: 'crystal-ball', name: 'Crystal Ball'},
  {index: 'goggles-of-night', name: 'Goggles of Night'},
  {index: 'ring-of-invisibility', name: 'Ring of Invisibility'}
]

const parsedItems = itemsData.map(item => <Item key={item.name} {...item}/>)

const Inventory = () => {
  return (
    <>
      { parsedItems }
    </>
  )
}

export default Inventory