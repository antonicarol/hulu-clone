import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Results from './components/Results';
import requests from './db/requests';

function App() {

  const[selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="app">
     
     <Header />

     <Navbar setSelectedOption={setSelectedOption} />

     <Results selectedOption={selectedOption} />

    </div>
  );
}

export default App;
