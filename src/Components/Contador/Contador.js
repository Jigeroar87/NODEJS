import {useState} from 'react'

const Contador = () => {
    // Hook=> son métodos que nos provee React para solucionar cosas
    //PD => todos los hooks arrancan con la palabra "use"
    //1. state 
    // > se define con corchetes el array
    // > el valor y la funcion que va a cambiar el valor
    // > cual va a ser su valor inicial

    const [numero, setNumero] = useState(0)

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
    <div className='d-flex justify-around'>
        <div>
            <button onClick={restar} >Restar</button>
        </div>
            <h3 className='text-center'>Numero actual es: {numero}</h3>
        <div>
            <button onClick={sumar}>Sumar</button>
        </div>
        <div>
            <button onClick={resetear}>Resetar</button>
        </div>
    </div>
  )
}

export default Contador