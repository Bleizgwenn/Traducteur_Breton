import {useState,useEffect} from 'react'

export default function Ordonner(){

    const motsOrdre = ['Demat', '!']

    // Les variables affichées

    const [motsDesordre,setMotsDesordre] = useState(['!', 'Demat'])
    const [motsGuest,setMotsGuest] = useState([])

    const [listeMotsGuest,setListeMotsGuest] = useState()
    const [listeMotsDisorder,setListeMotsDisorder] = useState()

    function addDisorderWord(mot){

        motsGuest.push(mot)
        setListeMotsGuest(motsGuest.map((mot, index) => {return(<button id={`${mot}_guest`} className='flex flex-col p-2.5 police2 h-[50px] items-center justify-center w-fit border-2 border-gray-900 rounded-lg' onClick={()=>{addOrderWord(mot)}}>{mot}</button>)}))

        motsDesordre.splice()

    }

    function addOrderWord(mot){

        console.log(motsDesordre)

    }

    return(
        <>
            <h1 className='police2 text-xl'>Traduire la phrase</h1>
                            
            <div className='flex flex-col gap-4 w-full h-full'>
                
                <div className='p-4 bg-transparent border-2 border-gray-900 rounded-lg w-full h-full'>

                    <p className='police2'><span className='underline'>Bonjour</span> !</p>

                    <div id={`orderGuestContainer`} className='flex flex-row border-b-2 border-gray-900 py-2.5 h-[72px] gap-2.5'>
                        
                        {listeMotsGuest}

                    </div>

                </div>
                
                <div className='flex flex-row w-full h-fit gap-2.5'>
                    
                    {motsDesordre.map((mot, index) => {
                        return(
                            <button id={`${mot}_disorder`} className='flex flex-col p-2.5 police2 h-[50px] items-center justify-center w-fit border-2 border-gray-900 rounded-lg' onClick={()=>{addDisorderWord(mot)}}>{mot}</button>
                        )
                    })}

                </div>

            </div>
        </>
    )
}