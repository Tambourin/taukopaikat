import React from "react";

const SearchBox = ({ filter, setFilter }) => {
  const highwaySelected = (event) => { 
    setFilter({ ...filter, highway: event.target.value })
  }

  const setDoesNotBelongToChain = (event) => {    
    setFilter({ ...filter, doesNotBelongToChain: event.target.checked });  
  }  

  const setIsOpenTwentyFourHours = (event) => {
    setFilter({ ...filter, isOpenTwentyFourHours: event.target.checked });
  }
  
  return (
    <div>
      <label htmlFor="highwaySelection">Valtatie:</label>
      <select 
        name="highwaySelection" 
        onChange={highwaySelected}
        defaultValue={filter.highway}>
        <option value="all">Kaikki</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <fieldset>
        <legend>Näiden pitää toteutua</legend>
        <input type="checkbox" name="services" onClick={setDoesNotBelongToChain}/>Ei kuulu ketjuun <br />
        <input type="checkbox" name="services" onClick={setIsOpenTwentyFourHours}/>Auki 24 h <br />
        <input type="checkbox" name="services" />Leikkipaikka <br />
      </fieldset>
    </div>      
  );
}

export default SearchBox;