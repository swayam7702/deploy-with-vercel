import React from 'react'


// let data = "Teks";
const Child = ({name,location,address,type}) => {
  console.log(name)
  console.log(location)
  console.log(address)
  console.log(type)
  return (
    <div className='card'>
        <h1>Company Name : {name}</h1>
        <i>Company Addres: {address}</i>
        <p>Company Location: {location}</p>
        <b>company Type: {type}</b>
    </div>
 
  )
}

export default Child
