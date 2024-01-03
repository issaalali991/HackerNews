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
        
        <div className='flex flex-col mt-4 w-full px-4'> {/* Container für Newsfeed */}
          <div className="flex flex-row justify-between items-center mb-4 border p-2 shadow-md"> {/* Container für einzelne News mit Img in selber Reihe */}
            <div className='flex flex-col justify-start items-start'> {/* Container für Title und Infos */}
              <h4 className='text-lg font-bold font-Poppins'>Title</h4>
              <small className='text-xs text-gray-600 font-Poppins'>5 min ago | by Dumpfbacke | 13 comments</small>
            </div>
            <div> {/* Image Container */}
              <img src="https://fakeimg.pl/90x60" alt="" />
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
