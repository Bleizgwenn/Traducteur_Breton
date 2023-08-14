import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import Loader from '@/components/Loader'

//Fonctions de contrôle

import controlEmail from '@/functions/control/login/controlEmail'
import controlPassword from '@/functions/control/login/controlPassword'
import controlPseudo from '@/functions/control/login/controlPseudo'
import controlName from '@/functions/control/login/controlName'

export default function Home() {

  const [co, setCo] = useState(false)
  const [loader1, setLoader1] = useState(false)
  const [loader2, setLoader2] = useState(false)

  //Valeurs d'inscription et de connexion
  
  //Communes
  const [pseudo, setPseudo] = useState('')
  const [passwd, setPasswd] = useState('')

  //Inscription
  const [passwdConfirm, setPasswdConfirm] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')

  //Tentative d'inscription

  useEffect(()=>{

  },[loader1])

  //Tentative de connexion

  useEffect(()=>{

  },[loader2])

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
    
                        <button className='flex flex-row gap-2.5 text-xs text-gray-500 bg-black/50 px-4 py-2.5 rounded-full items-center' onClick={()=>{setCo(!co)}} disabled={loader1}>
                            
                            <p>J&apos;ai déjà un compte</p>

                            <svg fill="rgb(107 114 128)" className="h-3 w-3" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                            </svg>

                        </button>
    
                    </div>
                
                    <div className='flex flex-row'>
                    
                        <div className='flex flex-row items-center bg-black/50 rounded-l-lg px-4'>

                            <input type='text' value={name} onChange={(e)=>{setName(e.target.value.replaceAll(' ',''))}} className='flex flex-row bg-transparent focus:outline-none py-2.5 w-full' placeholder='Nom'/>

                        </div>
                        
                        <div className='flex flex-row items-center bg-black/50 rounded-r-lg px-4'>

                            <input type='text' value={surname} onChange={(e)=>{setSurname(e.target.value.replaceAll(' ',''))}}  className='flex flex-row bg-transparent focus:outline-none py-2.5 w-full' placeholder='Prénom'/>

                        </div>

                    </div>
                    
                    <div className='flex flex-row items-center bg-black/50 rounded-lg px-4'>
                        
                        <p>@</p>

                        <input type='text' value={pseudo} maxLength={20} onChange={(e)=>{setPseudo(e.target.value.replaceAll(' ','').toLowerCase())}} className='flex flex-row bg-transparent focus:outline-none py-2.5 w-full' placeholder='pseudonyme'/>

                    </div>
                    
                    <div className='flex flex-row items-center bg-black/50 rounded-lg px-4'>

                        <input type='text' value={email} onChange={(e)=>{setEmail(e.target.value.replaceAll(' ','').toLowerCase())}} className='flex flex-row bg-transparent focus:outline-none py-2.5 w-full' placeholder='Adresse électronique'/>

                    </div>
                    
                    <div className='flex flex-row items-center bg-black/50 rounded-lg px-4'>

                        <input type='password' value={passwd} onChange={(e)=>{setPasswd(e.target.value.replaceAll(' ','').toLowerCase())}} className='flex flex-row bg-transparent focus:outline-none py-2.5 w-full' placeholder='Mot de passe'/>

                    </div>
                    
                    <div className='flex flex-row items-center bg-black/50 rounded-lg px-4'>

                        <input type='password' value={passwdConfirm} onChange={(e)=>{setPasswdConfirm(e.target.value.replaceAll(' ','').toLowerCase())}} className='flex flex-row bg-transparent focus:outline-none py-2.5 w-full' placeholder='Confirmez le mot de passe'/>

                    </div>

                    <button disabled={loader1} className='flex flex-row bg-black/50 rounded-lg px-4 py-2.5 text-xs items-baseline justify-center' onClick={()=>setLoader1(true)}>Valider</button>

                </section>

                <section className='flex flex-col rounded-lg bg-gray-900 p-4 gap-4 w-[calc(100vw-16px)] h-fit'>
                    
                    <div className='flex fex-row items-center justify-between'>
                        
                        <p className='police2 text-xl'>Connexion</p>
    
                        <button className='flex flex-row gap-2.5 text-xs text-gray-500 bg-black/50 px-4 py-2.5 rounded-full items-center' onClick={()=>{setCo(!co)}} disabled={loader2}>
                            
                            <p>Je n&apos;ai pas de compte</p>

                            <svg fill="rgb(107 114 128)" className="h-3 w-3" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                            </svg>

                        </button>
    
                    </div>
                    
                    <div className='flex flex-row items-center bg-black/50 rounded-lg px-4'>
                        
                        <p>@</p>

                        <input type='text' value={pseudo} maxLength={20} onChange={(e)=>{setPseudo(e.target.value.replaceAll(' ','').toLowerCase())}} className='flex flex-row bg-transparent focus:outline-none py-2.5 w-full' placeholder='pseudonyme'/>

                    </div>
                    
                    <div className='flex flex-row items-center bg-black/50 rounded-lg px-4'>

                        <input type='password' value={passwd} onChange={(e)=>{setPasswd(e.target.value.replaceAll(' ','').toLowerCase())}} className='flex flex-row bg-transparent focus:outline-none py-2.5 w-full' placeholder='Mot de passe'/>

                    </div>

                    <button disabled={loader2} className='flex flex-row bg-black/50 rounded-lg px-4 py-2.5 text-xs items-baseline justify-center' onClick={()=>setLoader2(true)}>Valider</button>

                </section>

            </div>

        </div>

      </div>
    </div>
  )
}

