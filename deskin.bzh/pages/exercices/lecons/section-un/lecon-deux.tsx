import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import Loader from '@/components/Loader'
import { useRouter } from 'next/router'

export default function Lesson() {

    const router = useRouter()
    const numberSections = 4
    const [segment, setSegment] = useState(0)
    const [answer, setAnswer] = useState({answer:['caca','pipi']})

    //Fermeture et ouverture des modales
    const [modalLeave, setModalLeave] = useState(false)
    const [modalAnswer, setModalAnswer] = useState(false)

    function verifExercice(segment:number,answer:object){
        setModalAnswer(true)
    }


  return (
    <div className='flex flex-col bg-black h-[100vh]'>
        
        <nav className='flex flex-row justify-between items-center w-full sticky top-0 bg-black h-[60px]'>
            
            <div className='bg-black p-4'>
                <svg fill="black" className="h-4 w-4" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </div>

            <div className='w-full items-center justify-center px-4'>
                <div className='h-4 w-full bg-gray-500 rounded-full'>
                    <div style={{"width" : `${(segment/(numberSections-1))*100}%`}} className='h-4 bg-gray-300 rounded-full transition-all duration-300 ease-in-out'>

                    </div>
                </div>
            </div>
            
            <button className='p-4' onClick={()=>{segment+1==numberSections?router.push('/exercices'):setModalLeave(true)}}>
                <div className='flex flex-col bg-gray-700 p-1 rounded-full'>
                    <svg fill="white" className="h-4 w-4" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                </div>
            </button>

        </nav>

        <div className='flex flex-col w-[100vw] h-[calc(100vh-60px)] overflow-x-hidden'>
            <div style={{"width" : `${numberSections}00vw`}} className={`flex flex-row h-full transition-all duration-500 ease-in-out ${segment==0?'translate-x-0':segment==1?'-translate-x-[100vw]':segment==2?'-translate-x-[200vw]':segment==3?'-translate-x-[300vw]':'translate-x-0'}`}>
                <div className='flex flex-col h-full w-[100vw] items-center p-4 gap-4'>

                    <div className='flex flex-col w-full h-full bg-gray-500 rounded-lg p-4 items-center'>

                        Leçon : dire bonjour en breton
                    
                    </div>                    

                    <button className='flex flex-row px-4 py-2.5 bg-gray-500 w-full items-center justify-center rounded-lg' onClick={()=>{verifExercice(segment,answer)}}>Valider</button>

                </div>
                <div className='flex flex-col h-full w-[100vw] items-center p-4 gap-4'>

                    <div className='flex flex-col w-full h-full bg-gray-500 rounded-lg p-4 items-center'>

                        Exrecice : le bonjour en breton
                    
                    </div>                    

                    <button className='flex flex-row px-4 py-2.5 bg-gray-500 w-full items-center justify-center rounded-lg' onClick={()=>{verifExercice(segment,answer)}}>Valider</button>

                </div>
                <div className='flex flex-col h-full w-[100vw] items-center p-4 gap-4'>

                    <div className='flex flex-col w-full h-full bg-gray-500 rounded-lg p-4 items-center'>

                        Contenu de la leçon n°2
                    
                    </div>                    

                    <button className='flex flex-row px-4 py-2.5 bg-gray-500 w-full items-center justify-center rounded-lg' onClick={()=>{verifExercice(segment,answer)}}>Valider</button>

                </div>
                <div className='flex flex-col h-full w-[100vw] items-center p-4 gap-4'>

                    <div className='flex flex-col w-full h-full bg-gray-500 rounded-lg p-4 items-center'>

                        <p>Vous avez complété la leçon !</p>
                    
                    </div>                    

                    <button className='flex flex-row px-4 py-2.5 bg-gray-500 w-full items-center justify-center rounded-lg' onClick={()=>{router.push('/exercices/lecons/section-un/lecon-deux')}}>Leçon suivante</button>

                </div>
            </div>
        </div>

        <nav className={`flex flex-col w-full fixed bottom-0 bg-gray-900 rounded-t-lg p-4 items-center justify-center gap-4 transition-all duration-300 ease-in-out ${modalAnswer?'translate-y-0':'translate-y-full'}`}>

            Error : Voila l'erreur effectuée

            <button className='flex flex-row px-4 py-2.5 bg-green-900 w-full items-center justify-center rounded-lg' onClick={()=>{setSegment(segment+1),setModalAnswer(false)}}>Continuer</button>

        </nav>

        <nav className={`flex flex-col w-full fixed bottom-0 bg-gray-900 rounded-t-lg p-4 items-center justify-center gap-4 transition-all duration-300 ease-in-out ${modalLeave?'translate-y-0':'translate-y-full'}`}>
            
            <div className='flex flex-row justify-between w-full'>

                <p>Quitter ?</p>
            
                <button className='bg-gray-700 p-1 rounded-full' onClick={()=>{setModalLeave(false)}}>
                    <svg fill="white" className="h-4 w-4" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                </button>
            </div>

            Voulez-vous vraiment quitter la leçon ? Vous perdrez votre progression

            <button className='flex flex-row px-4 py-2.5 bg-red-900 w-full items-center justify-center rounded-lg' onClick={()=>{router.push('/exercices')}}>Quitter</button>

        </nav>

    </div>
  )
}