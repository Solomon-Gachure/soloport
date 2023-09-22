import React, {useState} from 'react'
import Profile from "../assets/newpr.jpeg"
import {FaBars,FaTimes} from "react-icons/fa"
import {Link} from 'react-scroll'
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
                
                  <li><Link  to="about"  smooth={true}  duration={500}>
                      About
                  </Link></li>
                  <li><Link  to="skills" smooth={true}  duration={500}>
                      Skills
                  </Link></li>
                  <li><Link to="work" smooth={true}  duration={500}>
                      Work
                  </Link></li>
                  <li><Link  to="contact" smooth={true}  duration={500}>
                      Contact
                  </Link></li>
</ul>
              <div onClick={handleClick} className='md:hidden z-10'>
                  {!nav ? <FaBars /> : <FaTimes />}
              </div>
              <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'} >
                  
                  <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>
                      About
                  </Link></li>
                  <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                      Skills
                  </Link></li>
                  <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500}>
                      Work
                  </Link></li>
                  <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                      Contact
                  </Link></li>
              </ul>
        </div>

    </div>
  );
};

export default Navbar;