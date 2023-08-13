import Image from 'next/image'
import { useState } from 'react'
import Loader from '@/components/Loader'

export default function Home() {

  const [lang, setLang] = useState(true)
  const [page, setPage] = useState(0)
  const [input, setInput] = useState('')

  return (
    <div className='flex flex-col items-center bg-black'>
      <div className='flex flex-col max-w-[1148px] w-full px-4'>

        <div className='flex flex-row py-2.5'>
          <p className='police1 text-5xl tracking-wide font-semibold'>deskiñ</p>
        </div>

        <section className='flex flex-col rounded-lg bg-gray-900 w-full'>
          
          <p>Apprendre le Breton</p>

        </section>

      </div>
    </div>
  )
}
