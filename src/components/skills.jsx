import React from 'react';
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import Reactimg from "../assets/react.png";
import Tailwindcss from "../assets/tailwind.png";
import Github from "../assets/github.png";
import Next from "../assets/nextjsimg.jpg"
import Figma from "../assets/figmaimg.png"
import Python from "../assets/pythonimg.jpg"

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-black'>
          <div className='max-w-[1000px] flex flex-col justify-center px-8 mx-auto'>
<h1 className='text-6xl text-gray-300 font-bold inline border-b-2 border-yellow-300'>Skills</h1>
<p class='text-gray-300 py-2'>As a Software Craftsman the following are my tools for work:</p>
</div>
          <div class='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
    <div class='hover:scale-110 duration-500'>
        <img className='w-20 mx-auto ' src={HTML} alt="Html icon"></img>
        <p class='text-gray-300 my-4'>HTML</p>
    </div>
              <div class='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto ' src={CSS} alt="CSS icon"></img>
                  <p class='text-gray-300 my-4'>CSS</p>
              </div>
              <div class='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto ' src={Javascript} alt="Javascript icon"></img>
                  <p class='text-gray-300 my-4'>Javascript</p>
              </div>
              <div class='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto ' src={Reactimg} alt="React icon"></img>
                  <p class='text-gray-300 my-4'>React</p>
              </div>
              <div class='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto ' src={Tailwindcss} alt="Tailwindcss icon"></img>
                  <p class='text-gray-300 my-4'>Tailwindcss</p>
              </div>
              <div class='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto ' src={Python} alt="Python icon"></img>
                  <p class='text-gray-300 my-4'>Python</p>
              </div>
              <div class='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto ' src={Next} alt="Next icon"></img>
                  <p class='text-gray-300 my-4'>NextJS</p>
              </div>
              <div class='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto ' src={Figma} alt="Figma icon"></img>
                  <p class='text-gray-300 my-4'>Figma</p>
              </div>
              <div class='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto ' src={Github} alt="Github icon"></img>
                  <p class='text-gray-300 my-4'>Github</p>
              </div>

</div>
    </div>
  )
}

export default Skills