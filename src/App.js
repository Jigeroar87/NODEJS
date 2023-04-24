import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
    <div className="App">
      <h1 className='text-danger'>Hola Mundo</h1>
      <Navbar items={['Inicio','Categorias','Sobre Nosotros','Contacto']} NavbarLogoCss={'danger'} NavbarLogo={'Coder House'} />
      <Navbar items={['Inicio','Producto1','Producto2','Producto3']} className={"navbar navbar-expand-lg navbar-light bg-warning"} NavbarLogo={'Mercado Libre'}  />
    </div>

);
}

export default App;
