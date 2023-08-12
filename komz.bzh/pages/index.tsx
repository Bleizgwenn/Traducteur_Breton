import Image from 'next/image'
import { useState } from 'react'

export default function Home() {

  const [lang, setLang] = useState(true)
  const [page, setPage] = useState(0)

  return (
    <div className='flex flex-col items-center bg-black'>
      <div className='flex flex-col max-w-[1148px] w-full px-4'>

        <div className='flex flex-row py-2.5'>
          <p className='police1 text-5xl tracking-wide font-semibold'>treiñ</p>
        </div>

        <section className='flex flex-col gap-4'>

          <div className='flex flex-row gap-4 text-xs overflow-x-scroll container-snap pt-4'>

            <button className={`flex flex-row border transition-all duration-300 ease-in-out relative bg-gray-900 w-fit px-4 py-2.5 gap-2.5 items-center justify-center rounded-lg whitespace-nowrap ${page==0?'border-gray-700':'border-gray-900'}`} onClick={()=>{setPage(0)}}>

              <div className={`absolute right-[-6px] top-[-6px] transition-all duration-300 ease-in-out ${page==0?'opacity-100':'opacity-0'}`}>

                <svg fill="rgb(55 65 81)" className="h-4 w-4" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>

              </div>
            
              <svg fill="currentColor" className="h-4 w-4" viewBox="0 0 16 16">
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm7.194 2.766a1.688 1.688 0 0 0-.227-.272 1.467 1.467 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 5.734 4C4.776 4 4 4.746 4 5.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.461 2.461 0 0 0-.227-.4zM11 7.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.466 2.466 0 0 0-.228-.4 1.686 1.686 0 0 0-.227-.273 1.466 1.466 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 10.07 4c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z"/>
              </svg>

              <p>{lang?'Testenn':'Texte'}</p>

            </button>

            <button className={`flex flex-row border transition-all duration-300 ease-in-out relative bg-gray-900 w-fit px-4 py-2.5 gap-2.5 items-center justify-center rounded-lg whitespace-nowrap ${page==1?'border-gray-700':'border-gray-900'}`} onClick={()=>{setPage(1)}}>

              <div className={`absolute right-[-6px] top-[-6px] transition-all duration-300 ease-in-out ${page==1?'opacity-100':'opacity-0'}`}>

                <svg fill="rgb(55 65 81)" className="h-4 w-4" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>

              </div>
            
              <svg fill="currentColor" className="h-4 w-4" viewBox="0 0 16 16">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
              </svg>

              <p>{lang?'Skeudenn':'Images'}</p>

            </button>

            <button className={`flex flex-row border transition-all duration-300 ease-in-out relative bg-gray-900 w-fit px-4 py-2.5 gap-2.5 items-center justify-center rounded-lg whitespace-nowrap ${page==2?'border-gray-700':'border-gray-900'}`} onClick={()=>{setPage(2)}}>

              <div className={`absolute right-[-6px] top-[-6px] transition-all duration-300 ease-in-out ${page==2?'opacity-100':'opacity-0'}`}>

                <svg fill="rgb(55 65 81)" className="h-4 w-4" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>

              </div>
            
              <svg fill="currentColor" className="h-4 w-4" viewBox="0 0 16 16">
                <path d="M7.5 5.5a.5.5 0 0 0-1 0v.634l-.549-.317a.5.5 0 1 0-.5.866L6 7l-.549.317a.5.5 0 1 0 .5.866l.549-.317V8.5a.5.5 0 1 0 1 0v-.634l.549.317a.5.5 0 1 0 .5-.866L8 7l.549-.317a.5.5 0 1 0-.5-.866l-.549.317V5.5zm-2 4.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
              </svg>

              <p>{lang?'Teul':'Document'}</p>

            </button>

            <button className={`flex flex-row border transition-all duration-300 ease-in-out relative bg-gray-900 w-fit px-4 py-2.5 gap-2.5 items-center justify-center rounded-lg whitespace-nowrap ${page==3?'border-gray-700':'border-gray-900'}`} onClick={()=>{setPage(3)}}>

              <div className={`absolute right-[-6px] top-[-6px] transition-all duration-300 ease-in-out ${page==3?'opacity-100':'opacity-0'}`}>

                <svg fill="rgb(55 65 81)" className="h-4 w-4" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>

              </div>
            
              <svg fill="currentColor" className="h-4 w-4" viewBox="0 0 16 16">
                <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                <path d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z"/>
              </svg>

              <p>{lang?"Lec'hienn Genrouedad":'Site Internet'}</p>

            </button>

          </div>

          <div className='flex flex-col rounded-lg bg-gray-900 w-full h-full border border-gray-700'>

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

        {/* <section className='flex flex-col rounded-lg bg-gray-900 w-full'>

          <button className={`flex flex-col rounded-lg w-full items-start justify-start overflow-hidden`} onClick={()=>{setLang(!lang)}}>

            <p className='p-4'>{lang?'Geriadur':'Dictionnaire'}</p>

          </button>

        </section> */}

      </div>
    </div>
  )
}
