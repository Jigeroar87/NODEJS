import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/Navbar/Navbar';

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
      <h1 className='text-light bg-primary'>Funnybox regalo divertido para niños</h1>
      <Navbar items={['Inicio','Productos','Sobre Nosotros','Zonas de Reparto','Contáctanos']} NavbarLogoCss={'white'} NavbarLogo={'Funnybox'} />
      <ItemListContainer greeting='Funnybox regalo divertido para niños'/>
    </div>



);
}

export default App;
