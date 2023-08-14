import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import Loader from '@/components/Loader'

export default function Home() {

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

        <section className='flex flex-col rounded-lg bg-gray-900 w-full p-4 gap-4'>
          
          <p className='police2 text-xl'>Inscription</p>
          
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

        <section className='flex flex-col rounded-lg bg-gray-900 w-full p-4 gap-4'>
          
          <p className='police2 text-xl'>Connexion</p>
          
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
  )
}

