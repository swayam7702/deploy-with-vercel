import React, { useEffect, useState } from 'react'
import 'aos/dist/aos.css'

import Aos from 'aos'



const Products = () => {

const [data,setData] =  useState([])
const [search, setSearch] =  useState("")
const [filter, setFilter] =  useState([])

useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/posts")
.then(Response=>Response.json())
.then(posts=>setFilter(posts))
},[])


useEffect(() => {
  Aos.init({
    duration: 600,
    easing: "ease-out-cubic",
  });
}, []);




  const handleSearch=()=>{
    const filteredData =  data.filter(item => item.body.toUpperCase().includes(search.toUpperCase())|| item.title.toUpperCase().includes(search.toUpperCase()))

    setFilter(filteredData)

  }


  return (
      <>
        <div className="title">
          <h1>I'm Products Page</h1>
          <div className="input-form">
            <input type="text" name="userinput" placeholder='Search By Title......' id="" onChange={(e)=>{setSearch(e.target.value)}} value={search}/>
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
        <div className='parent'>
            {
              (filter.length > 0 ) ? (
                filter.map((post)=>{
                  return(
                      <div className="card" key={post.id} data-aos="fade-up">
                        <b className='num'>{post.id}</b>
                          <h3>{post.title}</h3>
                          <p>{post.body}</p>
                      </div>
                  )
                })
              ):(
                 <div className="error-div">
                   <h2>No Maching Data Found!</h2>
                   <video src="https://cdn.pixabay.com/video/2016/07/25/4001-176277735_tiny.mp4" width={700} autoPlay loop></video>
                 </div>
              )

            }




        </div> 
      </>
  )
}

export default Products


