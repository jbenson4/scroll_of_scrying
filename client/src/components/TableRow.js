import axios from 'axios'
import React, { useState, useEffect } from 'react'
import kebabcase from 'lodash.kebabcase';

const TableRow = (props) => {
  // Strips "Form" from props name value to handle edge cases of DnD API URIs (eg. Werebear, Bear Form requires a URI of ./werebear-bear)
  const name = props.name.replace('Form', '');
  // Format name variable to the required kebab case for DnD API
  const index = kebabcase(name);
  
  axios.get(`https://www.dnd5eapi.co/api/monsters/${index}`)
    .then((res) => {
      // alert(res)
      console.log(res.data)
    })
  return (
    <li>A wild <strong>{props.name}</strong> attacks you!</li>
  )
}

export default TableRow