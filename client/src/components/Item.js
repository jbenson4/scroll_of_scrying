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
      <h2> { name } </h2>
      <p>{item !== null && item.desc }</p>
    </div>
  )
}

export default Item