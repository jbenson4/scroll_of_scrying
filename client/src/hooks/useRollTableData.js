import { useState, useEffect } from "react";
import axios from "axios";
import kebabcase from 'lodash.kebabcase';
import dnd from 'dnd-npc';



// Custom hook for handling state between different roll table categories
export default function useRollTableData() {
  const [category, setCategory ] = useState({
    index: '',
    tableLength: 10
  });
  const [categoryItems, setCategoryItems] = useState([]);

  const setTableCategory = (event) => {
    if (event.target.innerText === "Roll Again") {
      setCategory((prev) => ({
        ...prev,
      }));
    } else {
      const uri = kebabcase(event.target.innerText);
      setCategory((prev) => ({
        ...prev,
        index: uri,
      }));
    }
  };

  const setTableLength = (event) => {
    const length = Number(event.target.value);
    setCategory((prev) => ({
      ...prev,
      tableLength: length
    }));
  };

  
  useEffect(() => {
    if (category.index === 'np-cs') {
    const items = [];
      while (items.length < category.tableLength) {
        const npc = new dnd.npc().generate();
        items.push(npc);
      }
      setCategoryItems(items);
    } else if (category.index !== '') {
      axios.get(`https://www.dnd5eapi.co/api/${category.index}`)
      .then((res) => {
        const array = res.data.results;
        const items = [];

        while (items.length < category.tableLength) {
          const randomElement = array[Math.floor(Math.random() * array.length)];
          if (!items.includes(randomElement)) {
            items.push(randomElement);
          }
        }
        
        setCategoryItems(items);
      })
      .catch((err) => console.log(err))
    }
  }, [category]);

  return { category, setCategory, categoryItems, setTableCategory, setTableLength };
}