import './App.css';
import Contador from './Components/Contador/Contador';
//import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
//import Navbar from './Components/Navbar/Navbar';
import Container from './Layout/Container';
import Contacto from './Pages/Contacto';
import Home from './Pages/Home';

function App() {

  return (
    <div className="App">
      <Container>
        <Home/>
      </Container>  

      <h1>_________________________</h1>

      <Container>
        <Contacto/>
      </Container>

      <h1>_________________________</h1>

      <Contador/>
      <Contador/>
      <Contador/>

    </div>



);
}

export default App;
