import React, {useState} from 'react'
import Profile from "../assets/newpr.jpeg"
import {FaBars,FaTimes} from "react-icons/fa"
const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClick=()=>setNav(!nav)
  return (
    
      <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300'>
       <div>
        <img className='w-10 h-12  rounded-full'src={Profile} alt="My profile"></img>
       </div>
        <div>
              <ul className='hidden md:flex'>
                <li>Home</li>
                  <li>About</li>
                  <li>Skills</li>
                  <li>Work</li>
                  <li>Contact</li>
</ul>
              <div onClick={handleClick} className='md:hidden z-10'>
                  {!nav ? <FaBars /> : <FaTimes />}
              </div>
              <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'} >
                  <li>Home</li>
                  <li>About</li>
                  <li>Skills</li>
                  <li>Work</li>
                  <li>Contact</li>
              </ul>
        </div>

    </div>
  );
};

export default Navbar;