import './App.css';
// import React, { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Livros from "./components/TaskItem/registrarLivros";

function App() {
  return (
    <div className="App-container">
      <Navbar />
      <div className="registrar-livros">
        <div className="ajuste">
        <Livros />
        </div>
      </div>
    </div>
  );
}

export default App;
