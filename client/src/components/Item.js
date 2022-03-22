import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Item = (props) => {
  const { index, name } = props;
  const [item, setItem] = useState(null);
  
  useEffect(() => {
    axios.get(`https://www.dnd5eapi.co/api/magic-items/${index}`)
    .then(res => setItem(res.data));
  }, []);

  return (
    <div>
      <h2> { name } </h2>
      {/* <p>{ item.desc }</p> */}
    </div>
  )
}

export default Item