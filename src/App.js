import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
    <div className="App">
      <h1 className='text-light bg-primary'>Funnybox regalo divertido para niños</h1>
      <Navbar items={['Inicio','Productos','Sobre Nosotros','Zonas de Reparto','Contáctanos']} NavbarLogoCss={'white'} NavbarLogo={'Funnybox'} />
      <ItemListContainer greeting='Funnybox regalo divertido para niños'/>
    </div>

);
}

export default App;
