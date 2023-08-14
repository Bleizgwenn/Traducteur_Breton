import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import Loader from '@/components/Loader'

export default function Home() {

  const [co, setCo] = useState(false)

  //Valeurs d'inscription

  const [pseudo, setPseudo] = useState('')
  const [passwd, setPasswd] = useState('')
  const [passwdConfirm, setPasswdConfirm] = useState('')

  return (
    <div className='flex flex-col items-center bg-black'>
      <div className='flex flex-col max-w-[1148px] w-full px-4 gap-4'>

        <div className='flex flex-row py-2.5'>
          <p className='police1 text-5xl tracking-wide font-semibold'>deskiñ</p>
        </div>
        
        <div className='flex flex-row gap-4 w-[100vw] overflow-hidden'>
        
            <div className={`flex flex-row gap-4 min-w-[200vw] transition-all duration-300 ease-in-out ${co?'-translate-x-[100vw]':'translate-x-0'}`}>

                <section className='flex flex-col rounded-lg bg-gray-900 p-4 gap-4 w-[calc(100vw-16px)] h-fit'>
                    
                    <div className='flex fex-row items-center justify-between'>
                        
                        <p className='police2 text-xl'>Inscription</p>
    
                        <button className='flex flex-row gap-2.5 text-xs bg-black/50 px-4 py-2.5 rounded-full items-center' onClick={()=>{setCo(!co)}}>
                            
                            <p>J'ai déjà un compte</p>

                            <svg fill="white" className="h-3 w-3" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                            </svg>

                        </button>
    
                    </div>
                
                    <div className='flex flex-row'>
                    
                        <div className='flex flex-row items-center bg-black/50 rounded-l-lg px-4'>

                        <input type='text' className='flex flex-row bg-transparent focus:outline-none py-2.5 w-full' placeholder='Nom'/>

                        </div>
                        
                        <div className='flex flex-row items-center bg-black/50 rounded-r-lg px-4'>

                        <input type='text' className='flex flex-row bg-transparent focus:outline-none py-2.5 w-full' placeholder='Prénom'/>

                        </div>

                    </div>
                    
                    <div className='flex flex-row items-center bg-black/50 rounded-lg px-4'>
                        
                        <p>@</p>

                        <input type='text' className='flex flex-row bg-transparent focus:outline-none py-2.5 w-full' placeholder='pseudonyme'/>

                    </div>
                    
                    <div className='flex flex-row items-center bg-black/50 rounded-lg px-4'>

                        <input type='password' className='flex flex-row bg-transparent focus:outline-none py-2.5 w-full' placeholder='Mot de passe'/>

                    </div>
                    
                    <div className='flex flex-row items-center bg-black/50 rounded-lg px-4'>

                        <input type='password' className='flex flex-row bg-transparent focus:outline-none py-2.5 w-full' placeholder='Confirmez le mot de passe'/>

                    </div>

                    <button className='flex flex-row bg-black/50 rounded-lg px-4 py-2.5 police2 text-sm items-baseline justify-center'>Valider</button>

                </section>

                <section className='flex flex-col rounded-lg bg-gray-900 p-4 gap-4 w-[calc(100vw-16px)] h-fit'>
                    
                    <div className='flex fex-row items-center justify-between'>
                        
                        <p className='police2 text-xl'>Connexion</p>
    
                        <button className='flex flex-row gap-2.5 text-xs bg-black/50 px-4 py-2.5 rounded-full items-center' onClick={()=>{setCo(!co)}}>
                            
                            <p>Je n'ai pas de compte</p>

                            <svg fill="white" className="h-3 w-3" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                            </svg>

                        </button>
    
                    </div>
                    
                    <div className='flex flex-row items-center bg-black/50 rounded-lg px-4'>
                        
                        <p>@</p>

                        <input type='text' className='flex flex-row bg-transparent focus:outline-none py-2.5 w-full' placeholder='pseudonyme'/>

                    </div>
                    
                    <div className='flex flex-row items-center bg-black/50 rounded-lg px-4'>

                        <input type='password' className='flex flex-row bg-transparent focus:outline-none py-2.5 w-full' placeholder='Mot de passe'/>

                    </div>

                    <button className='flex flex-row bg-black/50 rounded-lg px-4 py-2.5 police2 text-sm items-baseline justify-center'>Valider</button>

                </section>

            </div>

        </div>

      </div>
    </div>
  )
}

