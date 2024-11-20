import React, { useState } from 'react'

const DataBinding = () => {
    let [text,updateText] = useState("")
    console.log(text)
   
  return (
    <>
    <input type="text" name="" id="sample" onChange={(e)=>{console.log(e.target.value)}} />
     <div>
     <i>You Entered Data:</i>
        <div className="card">
            <b>Text:</b>
            <p>{text}</p>
        </div>   
     </div>
    </>
  )
}

export default DataBinding
