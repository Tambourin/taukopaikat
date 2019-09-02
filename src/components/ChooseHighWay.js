import React from "react";
import { Dropdown } from "semantic-ui-react";


const highwayOptions = [
  { value: "all", text:"Kaikki" },
  { value: "1", text:"1" },
  { value: "2", text:"2" },
  { value: "3", text:"3" },
  { value: "4", text:"4" },
  { value: "5", text:"5" }
]

const ChooseHighWay = ({ highway, setHighway }) => {
  return (    
      <Dropdown        
        className='icon'
        icon='road'
        labeled
        button        
        fluid
        floating
        selection 
        options={highwayOptions}
        value={highway}
        onChange={(event, data) => setHighway(data.value)}
      />
  )
}

export default ChooseHighWay;