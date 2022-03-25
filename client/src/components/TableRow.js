import React, { Fragment } from 'react'
import useRollTableData from '../hooks/useRollTableData';
import useElementDetails from '../hooks/useElementDetails';

const TableRow = (props) => {
  const { details, getDetails } =  useElementDetails();
  console.log('props: ', props)
  return (
    <Fragment>
      {props.category.index === 'magic-items' && <li>You stumble upon a <strong onClick={props.getDetails}>{props.name}</strong>!</li>}
      {props.category.index === 'monsters' && <li>A wild <strong onClick={props.getDetails}>{props.name}</strong> attacks you!</li>}
      {props.category.index === 'np-cs' && <li>{props.npc}</li>}
    </Fragment>
  )
}

export default TableRow