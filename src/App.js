import './App.css';
// import React, { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Sexo from "./components/TaskItem/registrarLivros";

function App() {
  return (
    <div className="App-container">
      <Navbar />
      
      <div className="registrar-livros">
      <Sexo />
      </div>
    </div>
  );
}

export default App;
