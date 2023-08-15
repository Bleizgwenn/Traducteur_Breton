import {useState,useEffect} from 'react'
import randomize from '@/functions/tableaux/randomize'

export default function Ordonner(motsOrdre){

    // Les variables affichées

    const [motsDesordre,setMotsDesordre] = useState(motsOrdre.motsOrdre)
    const [motsGuest,setMotsGuest] = useState([])

    const [listeMotsGuest,setListeMotsGuest] = useState()
    const [listeMotsDisorder,setListeMotsDisorder] = useState()

    function addDisorderWord(mot){

        motsGuest.push(mot)
        setListeMotsGuest(motsGuest.map((mot, index) => {return(<button key={`${mot}_guest`} id={`${mot}_guest`} className='flex flex-col p-2.5 police2 h-[50px] items-center justify-center w-fit border-2 border-gray-900 rounded-lg' onClick={()=>{addOrderWord(mot)}}>{mot}</button>)}))

        motsDesordre.splice(motsDesordre.indexOf(mot),1)
        setListeMotsDisorder(motsDesordre.map((mot, index) => {return(<button key={`${mot}_disorder`} id={`${mot}_disorder`} className='flex flex-col p-2.5 police2 h-[50px] items-center justify-center w-fit border-2 border-gray-900 rounded-lg' onClick={()=>{addDisorderWord(mot)}}>{mot}</button>)}))

    }

    function addOrderWord(mot){

        motsDesordre.push(mot)
        setListeMotsDisorder(motsDesordre.map((mot, index) => {return(<button key={`${mot}_disorder`} id={`${mot}_disorder`} className='flex flex-col p-2.5 police2 h-[50px] items-center justify-center w-fit border-2 border-gray-900 rounded-lg' onClick={()=>{addDisorderWord(mot)}}>{mot}</button>)}))

        motsGuest.splice(motsGuest.indexOf(mot),1)
        setListeMotsGuest(motsGuest.map((mot, index) => {return(<button key={`${mot}_guest`} id={`${mot}_guest`} className='flex flex-col p-2.5 police2 h-[50px] items-center justify-center w-fit border-2 border-gray-900 rounded-lg' onClick={()=>{addOrderWord(mot)}}>{mot}</button>)}))

    }


    function verifExercice(){
        motsOrdre.setAnswer({answer:{initial:motsOrdre.motsOrdre,final:motsGuest},error:!(JSON.stringify(motsOrdre.motsOrdre)===JSON.stringify(motsGuest))})
        {JSON.stringify(motsOrdre.motsOrdre)===JSON.stringify(motsGuest)?motsOrdre.setFautes(motsOrdre.fautes):motsOrdre.setFautes(motsOrdre.fautes+1)}
        motsOrdre.setModalAnswer(true)
    }

    return(
        <>
        
            <div className='flex flex-col w-full h-full bg-transparent rounded-lg items-center gap-8 text-base'>
                <h1 className='police2 text-xl'>Ordonnez la phrase</h1>
                                
                <div className='flex flex-col gap-4 w-full h-full'>
                    
                    <div className='p-4 bg-transparent border-2 border-gray-900 rounded-lg w-full h-full'>

                        <p className='flex flex-row police2 gap-1'>
                            {motsOrdre.motsTraduction.map((mot,index)=>{
                                return(
                                    <span key={`${mot}_mot`} className='underline'>{mot}</span>
                                )
                            })}
                        </p>

                        <div id={`orderGuestContainer`} className='flex flex-row border-b-2 border-gray-900 py-2.5 h-[72px] gap-2.5'>
                            
                            {listeMotsGuest}

                        </div>

                    </div>
                    
                    <div className='flex flex-row w-full h-fit gap-2.5'>
                        
                        {randomize(motsDesordre).map((mot, index) => {
                            return(
                                <button key={`${mot}_disorder`} id={`${mot}_disorder`} className='flex flex-col p-2.5 police2 h-[50px] items-center justify-center w-fit border-2 border-gray-900 rounded-lg' onClick={()=>{addDisorderWord(mot)}}>{mot}</button>
                            )
                        })}

                    </div>

                </div>

            </div>

            <button className='flex flex-row px-4 py-2.5 bg-gray-500 w-full items-center justify-center rounded-lg' onClick={()=>{verifExercice()}}>Valider</button>

        </>
    )
}