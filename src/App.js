import React from 'react';
import App from './App';
import ComputerClock from '.Componentes/Clock/ComputerClock';
import WorldClock from './Componentes/Clock/ComputerClock'


function App(props) {
  return (<div>
    <h1>exemplo de acesso a API externo</h1>
    <CoumputerClock />
    <WorldClock />
  </div>);
}

export default App;