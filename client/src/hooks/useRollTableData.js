import { useState, useEffect } from "react";
import axios from "axios";
import kebabcase from 'lodash.kebabcase';


// Custom hook for handling state between different roll table categories
export default function useRollTableData() {
  const [category, setCategory ] = useState();
  const [categoryItems, setCategoryItems] = useState();
  const [details, setDetails] = useState();

  const setContext = (event) => {
    const uri = kebabcase(event.target.innerText);
    setCategory(uri);
  };
  
  const num = 10;
  
  useEffect(() => {
    
    axios.get(`https://www.dnd5eapi.co/api/${category}`)
    .then((res) => {
      const array = res.data.results;
      const items = [];
      const tableLength = num;
      while (items.length < tableLength) {
        const randomElement = array[Math.floor(Math.random() * array.length)]
        items.push(randomElement);
      }
      setCategoryItems(items);
      })
      .catch((err) => console.log(err))
    }, [category]);

  return { category, categoryItems, setContext };
}