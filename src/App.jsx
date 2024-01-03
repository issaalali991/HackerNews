import { useState } from 'react'
import './App.css'
import { UilSearch } from '@iconscout/react-unicons'
import Logo from './assets/Logo.png'



function App() {


  return (
    <>
      <div className='flex flex-col justify-center items-center'>  {/* Main Container der alles andere beinhalten wird */}

        <div className=' w-full h-[120px] lg:h-[150px] flex justify-center'> {/* Header Container für Logo / Name */}
          <img src={Logo} alt="Logo" className='w-[300px] h-[120px]' />
        </div>
        <div className='flex flex-row items-center'> {/* Container für Suche */}
        <input id="search" type="text" class="h-10 w-3/4 md:w-96 pr-8 pl-5 z-0 outline-1 outline outline-gray-300 focus:shadow focus:outline-none rounded-full" placeholder="Search anything..." />
        <UilSearch size="35" className="ml-3" />
        </div>
        
        <div className='flex flex-col mt-4 w-full px-4 md:px-10 lg:px-12'> {/* Container für Newsfeed */}
          <div className="flex flex-row justify-between items-center mb-4 border p-2 shadow-md lg:p-4 lg:shadow-lg lg:mb-8"> {/* Container für einzelne News mit Img in selber Reihe */}
            <div className='flex flex-col justify-start items-start'> {/* Container für Title und Infos */}
              <h4 className='text-lg font-bold font-Poppins md:text-2xl'>Title</h4>
              <p className='lg:hidden text-sm py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, obcaecati</p>
              <p className='hidden lg:block py-4 max-w-[800px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, obcaecati maxime, optio eos deserunt corrupti pariatur voluptatem veniam, officia nisi in at ipsam nulla deleniti praesentium cupiditate blanditiis quod natus.
              Molestiae, explicabo sint dignissimos esse natus repellat alias, earum aliquid, similique officiis illum. Assumenda hic expedita aspernatur in ut magnam nostrum repudiandae a cumque dignissimos, quibusdam beatae blanditiis neque tempora!
              Modi incidunt quibusdam quo accusantium ipsum rem et sint dolore reprehenderit iure cupiditate magnam blanditiis doloribus eligendi pariatur optio atque aliquam totam facilis quam possimus velit sequi, voluptatem maiores. Tempore!
              Ex, libero autem cupiditate magni modi sint placeat nostrum nihil facere cumque pariatur culpa officia vel tenetur aperiam rerum eos? Tempora sed quae id nulla quam quia eaque iste facilis.
           </p>
              <small className='text-xs text-gray-600 font-Poppins lg:text-sm'>5 min ago | by Dumpfbacke | 13 comments</small>
            </div>
            <div className='flex justify-center items-center lg:w-[250px]'> {/* Image Container */}
              <img src="https://fakeimg.pl/90x60" alt="" className='lg:hidden'/>
              <img src="https://fakeimg.pl/210x150" alt="" className='hidden lg:block'/>
            </div> 
          </div>

         

         
        </div>

        <div>
          <small>1 | 2 | 3 | 4 | 5 | 6
            
          </small>
        </div>
      </div>

    </>
  )
}

export default App
