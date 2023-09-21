import React from 'react'
import Newp from "../assets/newp.png"
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const About = () => {
  return (
    <div name='home' className='bg-black w-full h-full'>
          <div className='py-40 h-full mx-auto px-8'>
              <div className='flex justify-center py-4 '>
                  <img className='rounded-full' src={Newp} alt="Profile" style={{ width: '20%', height: '50%' }} />
              </div>
              <div className=' flex  pt-3 justify-center' >
                  <ul className='list-none flex space-x-0  '>
                      <li className='hover:scale-90' >
                          <a className=' text-gray-300  hover:text-blue-500'
                              href="https://www.linkedin.com/in/solomon-gachure" target="_blank" rel="noreferrer">
                               <FaLinkedin size={30} />
                          </a>
                      </li>
                      <li  className='hover:scale-90 hover:text-gray-200'>
                          <a className=' text-gray-300'
                              href="https://github.com/Solomon-Gachure" target="_blank" rel="noreferrer">
                               <FaGithub size={30} />
                          </a>
                      </li>
                      <li className='hover:scale-90'>
                          <a className=' text-gray-300  hover:text-red-600'
                              href="mailto:gachuresolomon64@gmail.com" target="_blank" rel="noreferrer">
                               <HiOutlineMail size={30} />
                          </a>
                      </li>
                      <li  className='hover:scale-90'>
                          <a className='  text-gray-300 hover:text-blue-500'
                              href="https://twitter.com/i/flow/login" target="_blank" rel="noreferrer">
                               <FaTwitter size={30} />
                          </a>
                      </li>
                  </ul>
              </div>
              <div className='flex justify-center pt-4'>
                <div className='flex '>
                      <button className='text-gray-300 flex space-x-1 rounded-full px-4 py-3 hover:bg-green-800'>
                        <span className='flex items-center font-bold'>Download Resume</span> 
                        <a className='text-gray-300' href="/"><BsFillPersonLinesFill size={20} /></a>
                        </button>
                      
                </div>
              </div>
              <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                  <h1 className='text-6xl  inline border-b-2 border-yellow-400 text-gray-200 font-bold'>About</h1>

                  <p className='text-2xl text-orange-400 py-2'>Hello there my name is,</p>
                  <p className='text-4xl text-green-500 font-bold'>Solomon Gachure</p>
                  <p className='text-gray-300 max-w-[1000px] py-4'>And I am a Software Engineer majoring with Frontend category. <br />
                      My thirst to solve real world problems through code gave me a great passion in software engineering.
                      I am a dedicated frontend developer, driven by a deep passion for crafting user-friendly and visually captivating web interfaces. <br />
                       My commitment to teamwork and collaboration is evident in my ability to seamlessly integrate with cross-functional teams to deliver exceptional results. <br />
                        Beyond coding, I find solace and inspiration in art and music, channeling creativity during my free time. 
                        I also take pride in my culinary skills, as I enjoy experimenting in the kitchen and whipping up delicious dishes. <br />
                      My multifaceted interests and strong work ethic define my holistic approach to life and work.
                       </p>
              </div>
          </div>
          </div>
  )
}

export default About