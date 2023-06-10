import { useEffect, useState } from 'react';
import './App.css';
import Rutas from './Routes/Rutas';

import {collection, getDocs} from 'firebase/firestore'
import {db} from './firebase.config'

function App() {

  
  


  return (
    <div className="App">
      <Rutas/>
    </div>

);
}

export default App;
