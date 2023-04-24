
import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {

  const arr = [1,2,3,4]

  return (
    <div className="App">
      <h1 className='text-danger'>Hola Mundo</h1>
      <Navbar NavbarLogoCss={'danger'} NavbarLogo={'Coder House'} array={arr} />
      <Navbar className={"navbar navbar-expand-lg navbar-light bg-warning"} NavbarLogo={'Mercado Libre'}  />
    </div>

);
}

export default App;
