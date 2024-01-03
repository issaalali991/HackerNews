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
              <p className='hidden lg:block py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, obcaecati maxime, optio eos deserunt corrupti pariatur voluptatem veniam, officia nisi in at ipsam nulla deleniti praesentium cupiditate blanditiis quod natus.
              Molestiae, explicabo sint dignissimos esse natus repellat alias, earum aliquid, similique officiis illum. Assumenda hic expedita aspernatur in ut magnam nostrum repudiandae a cumque dignissimos, quibusdam beatae blanditiis neque tempora!
              Modi incidunt quibusdam quo accusantium ipsum rem et sint dolore reprehenderit iure cupiditate magnam blanditiis doloribus eligendi pariatur optio atque aliquam totam facilis quam possimus velit sequi, voluptatem maiores. Tempore!
              Ex, libero autem cupiditate magni modi sint placeat nostrum nihil facere cumque pariatur culpa officia vel tenetur aperiam rerum eos? Tempora sed quae id nulla quam quia eaque iste facilis.
              Voluptas enim, quos rerum tempore assumenda similique sunt eius possimus adipisci perspiciatis quam rem, pariatur dolorem beatae expedita odit porro quasi quae dolorum doloremque cum eligendi nulla. Aspernatur, a quaerat?
              Inventore laudantium possimus perspiciatis molestias quae non id voluptas nobis. Quam molestias veniam velit eum dolore, harum ducimus, quo sunt neque iste dolores ad, exercitationem odit vel quod aperiam sapiente.
              Esse sequi deserunt odio error minima unde nesciunt ratione, ipsum quod reprehenderit voluptas natus vel soluta consequatur illum fuga, dicta voluptates aspernatur culpa eveniet eligendi, dolor quia quo hic. Non!
              Mollitia voluptatibus recusandae explicabo est minus sequi nemo adipisci maxime soluta doloribus, totam autem odit a facilis itaque necessitatibus maiores perferendis, dolores animi at in cumque! Cumque, doloremque ex! Iusto?
              Cupiditate fugit saepe beatae quo laudantium cum possimus repellendus blanditiis ullam impedit unde, quam dolores atque quibusdam sequi modi. Magni sapiente amet tenetur similique? Fugiat hic facilis maiores iste doloribus.
              Culpa reiciendis sunt alias repellendus dolorum consequatur neque a unde, fugiat eligendi ipsum voluptatem. Vitae debitis obcaecati aliquid nisi dicta assumenda, eligendi totam excepturi omnis laboriosam aliquam in sunt architecto.</p>
              <small className='text-xs text-gray-600 font-Poppins lg:text-sm'>5 min ago | by Dumpfbacke | 13 comments</small>
            </div>
            <div> {/* Image Container */}
              <img src="https://fakeimg.pl/90x60" alt="" className='lg:hidden'/>
              <img src="https://fakeimg.pl/180x120" alt="" className='hidden lg:block'/>
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
