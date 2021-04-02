import React from "react";


function EnterName({ onChange }){
  return(
    <label>
      Enter your name:
      <input type="text" placeholder="Name" onChange={(event)=> onChange(event.target.value)}/>
    </label>
  )
}
export default EnterName
