import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
    let [isLogIn, setIsLogIn] = useState(true) 
  return (
    <>
        <div className="nav">
            <div className="logo">
                <img src={Logo}  width="200px" alt="" />
            </div>
            <div className="links">
                <ul>
                    <li>
                        <NavLink className='link' to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='link' to='about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink className='link' to='contact'>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink className='link' to='products'>Products</NavLink>
                    </li>
                </ul>
            </div>

            {
                (isLogIn)&&( <div className="spl">
                    <button onClick={()=>setIsLogIn(false)}>LogOut <i className="fa-solid fa-right-from-bracket"></i></button>
                    <button>Profile <i class="fa-solid fa-user"></i></button>
                    <button>Dashboard <i class="fa-solid fa-chart-line"></i></button>
                </div>)
                
            }
           
           
        </div> 
    </>
  )
}

export default Navbar
