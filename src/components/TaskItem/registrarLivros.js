import React, { useState } from "react";
// import PropTypes from "prop-types";
import "./task-item.css";

export default function registrarLivros() {
    return (
        <div className="task-item">
            <input type="text" name="titulo" placeholder="Título" className="register-input" />
            <input type="text" name="autor" placeholder="Autor" className="register-input" />
            <input type="date" name="data-inicio" placeholder="Data de hoje" className="register-input" />
            <input type="date" name="data-final" placeholder="Data conclusão" className="register-input" />
            <input type="text" name="nota" placeholder="Nota" className="register-input" />
            <input type="text" name="autor" placeholder="Status" className="register-input" />
            <button className="register-button">Cadastrar Livro</button>
        </div>
    );
}