import axios from 'axios'
import React from 'react'
import useRollTableData from '../hooks/useRollTableData';
import useElementDetails from '../hooks/useElementDetails';
import kebabcase from 'lodash.kebabcase';

const TableRow = (props) => {
  const { category } = useRollTableData();
  const { details, getDetails } =  useElementDetails();

  return (
    <li>A wild <strong onClick={getDetails}>{props.name}</strong> attacks you!</li>
  )
}

export default TableRow