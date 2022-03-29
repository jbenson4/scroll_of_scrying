import React, { useContext } from 'react';
import Item from './Item';
import './Inventory.scss';
import { PartyContext } from '../providers/PartyProvider';

const Inventory = (props) => {
  const { state } = useContext(PartyContext);

  return (
    <div>
      <button className='diceBtn'>ADD NEW ITEM</button>
      <span className='inventoryHeader'>Inventory</span>
      <div className="inventory">
        { state.items.map(item => <Item key={item.name} getDetails={props.getDetails} {...item}/>) }
      </div>
    </div>
  )
}

export default Inventory