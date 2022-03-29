import React from 'react';
import './Item.scss';


const Item = (props) => {
  const { name } = props;
  return (
    <div className="Magic-Item">
      <h2 id='magic-items' onClick={props.getDetails}> { name } </h2>
    </div>
  )
}

export default Item