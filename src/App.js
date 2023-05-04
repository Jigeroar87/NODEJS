import './App.css';
import Card from './Components/Card/Card';
import Contador from './Components/Contador/Contador';
//import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
//import Navbar from './Components/Navbar/Navbar';
import Container from './Layout/Container';
import Contacto from './Pages/Contacto';
import Home from './Pages/Home';
import {AiFillAndroid} from "react-icons/ai"

function App() {

  const contenido= [

    {
      titulo: 'batman',
      descripcion: 'DC'
    },
    {
      titulo: 'superman',
      descripcion: 'marvel',
      imagen: 'https://phantom-elmundo.unidadeditorial.es/606b289a9a8bee7fa0dc2a92bc739063/crop/32x0/686x436/resize/600/f/webp/assets/multimedia/imagenes/2022/12/15/16710955260924.png'
    }
  ]

  return (
    <div className="App">

      <h1><AiFillAndroid/> </h1>

      <Container>
        <Home/>
      </Container>  

      <h1>_________________________</h1>

      <Container>
        <Contacto/>
      </Container>

      <h1>_________________________</h1>

      <Contador initialValue={10}/>
      <Contador/>
      <Contador initialValue={5}/>

    {contenido.map((superheroe,index)=>(
      <Card key={index} titulo={superheroe.titulo} descripcion={superheroe.descripcion} imagen={superheroe.imagen}/>
    )

    )}

    

    </div>



);
}

export default App;
