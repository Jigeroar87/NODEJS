import {useState, useEffect, useRef} from 'react'

const Contador = (props) => {
    
    //Ciclo de vida
    //Mount
    //Change
    //Dismount

    //Mount(0)=> Change=> Dismount => Mount(1) ? 
    
    // Hook=> son métodos que nos provee React para solucionar cosas
    //PD => todos los hooks arrancan con la palabra "use"
    //1. state 
    // > se define con corchetes el array
    // > el valor y la funcion que va a cambiar el valor
    // > cual va a ser su valor inicial

    const{initialValue} = props

    const [numero, setNumero] = useState(initialValue||0)
    //const [nombre, setNombre] = useState('')
    //const [darkmode, setDarmode] = useState(false)
    const [limitado, setLimitado] = useState(false)

    const titleDivRef = useRef('')

    const handleTitleAdd=()=>{
        titleDivRef.current.innerHTML='Nuevo Titulo'
    }

    useEffect(() => {
      //first //=>Mount
        console.log('Se consulto el valor del numero')
        if (numero>=10 ) {
            setLimitado(true)
        }

      return () => {
        //second // => Dismount
        setLimitado(false)
        //setNumero(0)
      }
    }, [
        //third // Cambios
        numero
    ])
    

    const sumar = () => {
        setNumero(numero + 1)
    }
    const restar = () => {
        setNumero(numero - 1)
    }

    const resetear = () => {
        setNumero(0)
    }

  return (
    <div className={ ` ${limitado ? 'bg-danger':''} 'd-flex justify-around' `}  >
        <div ref={titleDivRef}> </div>
        <button onClick={handleTitleAdd} >Agregar un titulo</button>
        <div>
            <button onClick={restar} >Restar</button>
        </div>
            <h3 className='text-center'>Numero actual es: {numero}</h3>
        <div>
            <button disabled={limitado} onClick={sumar}>Sumar</button>
        </div>
        <div>
            <button onClick={resetear}>Resetar</button>
        </div>
    </div>
  )
}

export default Contador