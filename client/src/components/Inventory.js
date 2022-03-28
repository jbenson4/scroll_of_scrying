import React, { useContext } from 'react';
import Item from './Item';
import './Inventory.scss';
import { PartyContext } from '../providers/PartyProvider';

const itemsData = [
  {index: 'adamantine-armor', name: 'Adamantine Armor'},
  {index: 'crystal-ball', name: 'Crystal Ball'},
  {index: 'goggles-of-night', name: 'Goggles of Night'},
  {index: 'ring-of-invisibility', name: 'Ring of Invisibility'}
]

const parsedItems = itemsData.map(item => <Item key={item.name} {...item}/>)

const Inventory = (props) => {
  const { state } = useContext(PartyContext);

  return (
    <div>
      <span className='inventoryHeader'>Inventory</span>
      <div className="inventory">
        { state.items.map(item => <Item key={item.name} getDetails={props.getDetails} {...item}/>) }
      </div>
    </div>
  )
}

export default Inventory