import myImg1 from './assets/openg_soon.png'
import "./App.css"
import Child from './Components/Child';
import { useState } from 'react';
import About from './Components/About'
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ErrorComp from './Components/ErrorComp';
import StyledComp from './Components/StyledComp';
import Products from './Components/Products';
import DataBinding from './Components/DataBinding';
import FormValidation from './Components/FormValidation';
let companies = [
    {id:1, name:"Teks Academy", address:"Hyderabad", location:"Hi-Tech City",  type:"Edu Tech"},
    {id:2, name:"InfozIT ", address:"Hyderabad", location:"Seccundrabad",  type:"Software"},
    {id:3, name:"Kapil IT", address:"Hyderabad", location:"Nanakramguda",  type:"IT & Software"},
    {id:4, name:"Solutions", address:"Hyderabad", location:"Vizag",  type:"Edu Tech"},
    {id:5, name:"Teks Academy", address:"Hyderabad", location:"Hi-Tech City",  type:"Edu Tech"},
    {id:6, name:"InfozIT ", address:"Hyderabad", location:"Seccundrabad",  type:"Software"},
    {id:7, name:"Kapil IT", address:"Hyderabad", location:"Nanakramguda",  type:"IT & Software"},
    {id:8, name:"Solutions", address:"Hyderabad", location:"Vizag",  type:"Edu Tech"},
    {id:9, name:"Teks Academy", address:"Hyderabad", location:"Hi-Tech City",  type:"Edu Tech"},
    {id:10, name:"InfozIT ", address:"Hyderabad", location:"Seccundrabad",  type:"Software"},
    {id:11, name:"Kapil IT", address:"Hyderabad", location:"Nanakramguda",  type:"IT & Software"},
    {id:12, name:"Solutions", address:"Hyderabad", location:"Vizag",  type:"Edu Tech"}
]

let name = "Teks Academy!";
function App(){
    
    return(
       <>
       <Navbar/>
         <Routes>
               <Route path='' element={<Home/>}/>
               <Route path='about' element={<About/>}/>
               <Route path='contact' element={<Contact/>}/>
               <Route path='products' element={<Products/>}/>
               <Route path='*' element={<ErrorComp/>}/>
               <Route path='test' element={<DataBinding/>}/>
               <Route path='form' element={<FormValidation/>}/>
        </Routes>
        <Footer/>
       </>
    )
}

export default App




















// import React, { useEffect } from 'react';
// import './App.css';
// import { useState } from 'react';

// const  App=() => {
//   let [data, setData]=useState([]);
//   let [search,setSearch]=useState("");
//   let [filtered,setFiltered]=useState([]);
  
//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(Response=>Response.json())
//     .then(posts=>{
//       setData(posts); 
//       setFiltered(posts);
//     });
//   },[])

//   const handleSearch = () => {
//     const filteredData = data.filter((item) =>
//       item.title.toLowerCase().includes(search.toLowerCase())
//     );
//     setFiltered(filteredData);
//   };



//   return (
//       <>
//         <div className='title'>
//             <h1>Products Page</h1>
//             <input type='text' name='usertext' placeholder='Search By Title...' onChange={(e)=>{setSearch(e.target.value)}} value={search}/>
//             <button type='button' onClick={handleSearch}> Search </button>
//         </div>
//         <div id='box'>
//         {
//           (filtered.length > 0) ? (
//               filtered.map((post)=>{
//                 return( 
//                         <div className='card' key={post.id}>
//                             <h3>{post.id}</h3>
//                             <h2>{post.title}</h2>
//                             <p>{post.body}</p>
//                         </div>
//                 )
//               })
//           ):(
//             <div className='err-div'>
//               <p>Your search - {search} - did not match any title.</p>
//               <video src='https://videocdn.cdnpk.net/videos/17956495-da2e-515b-8a8d-50bba3965852/horizontal/previews/clear/small.mp4?token=exp=1730905060~hmac=866330e982327995dc68cb0fce982e32871b17ecfb012bff7ebaf38bfa8f5189' width={900} autoPlay></video>
//             </div>
//           )
//         }
//       </div>
//       </>
//   ) 
// }

// export default App;













