import React, { Fragment } from 'react'
import useRollTableData from '../hooks/useRollTableData';
import useElementDetails from '../hooks/useElementDetails';

const TableRow = (props) => {
  return (
    <Fragment>
      {props.category.index === 'magic-items' && <li>You stumble upon a <strong onClick={props.getDetails} id={'magic-items'}>{props.name}</strong>!</li>}
      {props.category.index === 'monsters' && <li>A wild <strong onClick={props.getDetails} id={'monsters'}>{props.name}</strong> attacks you!</li>}
      {props.category.index === 'np-cs' && <li>{props.npc.character.name}, {props.npc.race.name}, {props.npc.character.alignment}, {props.npc.character.background}</li>}
    </Fragment>
  )
}

export default TableRow