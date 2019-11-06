import React from "react";
import { Dropdown } from "semantic-ui-react";


const highwayOptions = [
  { value: "all", text:"Kaikki" },
  { value: 1, text:"1 / E18" },
  { value: 2, text:"2" },
  { value: 3, text:"3 / E12" },
  { value: 4, text:"4 / E75" },
  { value: 5, text:"5 / E63" }
]

const ChooseHighWay = ({ highway, setHighway }) => {
  return (
    <>
      <label htmlFor="highwayFilterDropdown">Valtatie</label>        
      <Dropdown
        id="highwayFilterDropdown"        
        className="icon"
        icon="road"     
        labeled        
        button        
        fluid
        floating         
        options={highwayOptions}
        value={highway}
        onChange={(event, data) => setHighway(data.value)}
      />
    </>
  )
}

export default ChooseHighWay;