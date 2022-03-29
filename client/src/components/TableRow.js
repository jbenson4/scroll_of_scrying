import React, { Fragment } from 'react'
import './TableRow.scss'

const TableRow = (props) => {
  return (
    <Fragment>
      {props.category.index === 'magic-items' && <li className='row-item'>You stumble upon a <strong onClick={props.getDetails} id={'magic-items'}>{props.name}</strong>!</li>}
      {props.category.index === 'monsters' && <li className='row-item'>A wild <strong onClick={props.getDetails} id={'monsters'}>{props.name}</strong> attacks you!</li>}
      {props.category.index === 'np-cs' && <li className='row-item'><strong>{props.npc.character.name}</strong>, {props.npc.race.name}, {props.npc.character.alignment}, {props.npc.character.background}</li>}
    </Fragment>
  )
}

export default TableRow