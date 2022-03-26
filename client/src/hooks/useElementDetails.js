import { useState, useEffect } from "react";
import axios from "axios";
import kebabcase from 'lodash.kebabcase';


// Custom hook for handling state between different roll table categories
export default function useElementDetails() {
  const [details, setDetails] = useState({
    show: false,
    data: {}
  });

  const hideModal = () => {
    setDetails((prev) => ({
      ...prev,
      show: !details.show
    }));
  };
  
  const getDetails = (event) => {
    const uriCategory = event.target.id;
    // Takes click target inner text value and strips "Form" from it to handle edge cases of DnD API URIs (eg. Werebear, Bear Form requires a URI of ./werebear-bear)
    const name = event.target.innerText.replace('Form', '');
    // Format name variable to the required kebab case for DnD API
    const index = kebabcase(name);
    axios.get(`https://www.dnd5eapi.co/api/${uriCategory}/${index}`)
    .then((res) => {
      setDetails((prev) => ({
        ...prev,
        data: res.data,
        show: !details.show
        }));
        // alert(res.data.name)
      })
  }

  return { details, getDetails, hideModal };
}