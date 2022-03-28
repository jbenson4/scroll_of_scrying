import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Item.scss';


const Item = (props) => {
  const { index, name } = props;
  const [item, setItem] = useState(null);
  
  useEffect(() => {
    axios.get(`https://www.dnd5eapi.co/api/magic-items/${index}`)
    .then(res => setItem(res.data));
  }, []);

  return (
    <div className="Magic-Item">
      <h2 id='magic-items' onClick={props.getDetails}> { name } </h2>
    </div>
  )
}

export default Item