import { useState, useEffect } from "react";
import axios from "axios";
import kebabcase from 'lodash.kebabcase';
import dnd from 'dnd-npc';

// Custom hook for handling state between different roll table categories
export default function useRollTableData() {
  // Category state handler
  const [category, setCategory] = useState({
    index: '',
    tableLength: 10
  });
  const [roll, setRoll] = useState({
    roll: true
  })
  // Table content state handlers
  const [monsters, setMonsters] = useState([]);
  const [items, setItems] = useState([]);
  const [npcs, setNPCs] = useState([]);

  const setTableCategory = (event) => {
    const uri = kebabcase(event.target.innerText);
    setCategory((prev) => ({
      ...prev,
      index: uri,
    }));
  };

  const rollFunction = () => {
    setRoll((prev) => ({
      roll: true
    }))
  } 

  const setTableLength = (event) => {
    const length = Number(event.target.value);
    setCategory((prev) => ({
      ...prev,
      tableLength: length
    }));
  };

  // API and library calls to generate roll table content
  useEffect(() => {
    if (category.index === 'np-cs') {
    const items = [];
      while (items.length < category.tableLength) {
        const npc = new dnd.npc().generate();
        items.push(npc);
      }
      setNPCs(items);
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
        if (category.index === 'monsters') {
          setMonsters(items);
        } else if (category.index === 'magic-items') {
          setItems(items);
        }
      })
      .catch((err) => console.log(err))
    }
  }, [roll]);

  return { category, setCategory, setTableCategory, setTableLength, monsters, items, npcs, rollFunction };
}