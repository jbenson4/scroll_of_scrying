import React, { useState, useEffect } from 'react'
import TableRow from './TableRow'
import axios from 'axios';

const Tables = () => {
  const [ categoryItems, setCategoryItems ] = useState();
  const num = 10;
  useEffect(() => {

    axios.get('https://www.dnd5eapi.co/api/monsters')
    .then((res) => {
      // console.log('res: ', res.data)
      const array = res.data.results;
      const items = [];
      const tableLength = num;
      while (items.length < tableLength) {
        const randomElement = array[Math.floor(Math.random() * array.length)]
        items.push(randomElement);
      }
      const itemsArray = items.map((item) => (
        <TableRow name={item.name} />
        ))
        setCategoryItems(itemsArray);
      })
      .catch((err) => console.log(err))
    }, []);
  return (
    <div>
      Tables
      <ul>
      {categoryItems}
      </ul>
    </div>
  )
}

export default Tables