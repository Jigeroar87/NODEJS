import React, { useEffect, useState} from 'react'

const Promises = () => {
    
    const [loading, setLoading] = useState(false)

    const jugadores = [
        {
            name:'Leo',
            apellido:'Messi'
        },
        {
            name: 'Enzo',
            apellido: 'Fernandez'
        },
        {
            name: 'Angel',
            apellido: 'Dimaria'

        }
    ]

    useEffect(() => {
        
        setLoading(true)
        const tarea = new Promise( (reject,resolve) => {
            
            setTimeout(() => {
                reject(jugadores) 
            }, 2000);
            
              //array de jugadores
        })
        
        tarea.then((res)=> {
            console.log(res)
            setLoading(false)    
        }).catch((err)=>console.log('aca hubo un error, es necesario recargar')) 
      
    }, [])


    return (
    <div>
        <h1>{ loading ? 'Cargando...': 'Content'}</h1>
    </div>
  )
}

export default Promises