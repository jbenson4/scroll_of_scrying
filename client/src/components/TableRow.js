import axios from 'axios'
import React, { Fragment } from 'react'
import useRollTableData from '../hooks/useRollTableData';
import useElementDetails from '../hooks/useElementDetails';
import kebabcase from 'lodash.kebabcase';

const TableRow = (props) => {
  const { category } = useRollTableData();
  const { details, getDetails } =  useElementDetails();

  return (
    <Fragment>
      {category.index === 'magic-items' && <li>You stumble upon a <strong onClick={getDetails}>{props.name}</strong>!</li>}
      {category.index === 'monsters' && <li>A wild <strong onClick={getDetails}>{props.name}</strong> attacks you!</li>}
    </Fragment>
  )
}

export default TableRow