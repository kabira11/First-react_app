import React from 'react'
//Type rfce for import react class component

function FunctionClick() {

    //In js it is possible a function inside function
   function ClickHandler(){
        console.log("button clicked")
    }
    
  return (
    <div>
      <button onClick = {ClickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
