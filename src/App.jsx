import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Routes from './Routes';
import Provider from './hooks/context/Context';
import './App.css'


function App() {

  return (
    <div className="App">
      <Provider>
        <Router>
            <Routes />
        </Router>
      </Provider>
    </div>
  )
}

export default App
