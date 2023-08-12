import Image from 'next/image'
import { useState } from 'react'

export default function Home() {

  const [lang, setLang] = useState(true)

  return (
    <div className='flex flex-col items-center bg-black'>
      <div className='flex flex-col max-w-[1148px] w-full gap-4'>

        <div className='flex flex-row px-4 py-2.5'>
          <p className='police1 text-5xl tracking-wide font-semibold'>treiñ</p>
        </div>

        <section className='flex flex-col gap-4'>

          <div className='flex flex-row gap-4 text-xs overlow-hidden overflow-x-scroll container-snap'>

            <div className='flex flex-col bg-gray-900 w-fit px-4 py-2.5 rounded-lg whitespace-nowrap	'>
              <p>Testenn</p>
            </div>

            <div className='flex flex-col bg-gray-900 w-fit px-4 py-2.5 rounded-lg whitespace-nowrap	'>
              <p>Skeudenn</p>
            </div>

            <div className='flex flex-col bg-gray-900 w-fit px-4 py-2.5 rounded-lg whitespace-nowrap	'>
              <p>Teul</p>
            </div>

            <div className='flex flex-col bg-gray-900 w-fit px-4 py-2.5 rounded-lg whitespace-nowrap	'>
              <p>Lec'hienn Genrouedad</p>
            </div>

          </div>

          <div className='flex flex-col rounded-lg bg-gray-900 w-full h-[300px] border border-gray-700'>

            <div className='flex flex-row items-stretch justify-between border-b border-gray-700 overflow-hidden'>

              <button className={`flex flex-col rounded-lg w-full items-center justify-start`} onClick={()=>{setLang(!lang)}}>
                
                <div className={`flex flex-col items-center justify-start max-h-[56px] transition-all duration-300 ease-in-out ${lang?'translate-y-0':'-translate-y-[56px]'}`}>

                  <p className='h-[56px] flex p-4'>Brezhoneg</p>

                  <p className='h-[56px] flex p-4'>Français</p>

                </div>

              </button>

              <button className={`flex flex-col p-4 rounded-full items-center justify-center transition-all duration-300 ease-in-out ${lang?'rotate-180':''}`} onClick={()=>{setLang(!lang)}}>

                <svg fill="white" className="h-4 w-4" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
                </svg>
                
              </button>

              <button className={`flex flex-col rounded-lg w-full items-center justify-end`} onClick={()=>{setLang(!lang)}}>
                
                <div className={`flex flex-col justify-end items-center max-h-[56px] transition-all duration-300 ease-in-out ${lang?'translate-y-0':'translate-y-[56px]'}`}>

                  <p className='h-[56px] flex p-4'>Breton</p>

                  <p className='h-[56px] flex p-4'>Galleg</p>

                </div>
                
              </button>

            </div>

            <div>

              <div>

              </div>

              <div>

              </div>

            </div>

          </div>

        </section>

        <section className='flex flex-col rounded-lg bg-gray-900'>

          <button className={`flex flex-col rounded-lg w-full items-start justify-start overflow-hidden`} onClick={()=>{setLang(!lang)}}>
            
            <div className={`flex flex-col items-center justify-start max-h-[56px] transition-all duration-300 ease-in-out ${lang?'translate-y-0':'-translate-y-[56px]'}`}>

              <p className='h-[56px] flex p-4'>Geriadur</p>

              <p className='h-[56px] flex p-4'>Dictionnaire</p>

            </div>

          </button>

        </section>

      </div>
    </div>
  )
}
