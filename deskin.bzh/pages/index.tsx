import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import Loader from '@/components/Loader'
import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter()

  const [lang, setLang] = useState(true)
  const [page, setPage] = useState(0)
  const [input, setInput] = useState('')

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
          
          <p className='police2 text-xl'>Vous n'êtes pas connecté</p>

          <button className='flex flex-row bg-black/50 rounded-lg px-4 py-2.5 police2 text-sm items-baseline justify-center' onClick={()=>{router.push('/login?q=inscription')}}>Connexion</button>

        </section>

      </div>
    </div>
  )
}
