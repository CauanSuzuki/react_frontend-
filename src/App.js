import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [lista, setLista] = useState([]);

  const funcaoAdicionar = () => {
    setLista([...lista, { id: Math.random(), name: name }]);
  };

  const funcaoDeletar = (id) => {
    setLista(lista.filter((value, index) => value.id !== id));
  };

  const funcaoAlterar = (id) => {
    setLista(
      lista.map((value, index) =>
        value.id === id ? { id: value.id, name: name } : value
      )
    );
  };

  return (
    <body>
      <input type="text" onChange={(event) => setName(event.target.value)} />
      <button onClick={funcaoAdicionar}>Adicionar</button>
      {console.log(lista)}
      <ul>
        {lista.map((item, i) => {
          return (
            <li>
              {item.name}
              <button onClick={() => funcaoDeletar(item.id)}>Remover</button>
              <button onClick={() => funcaoAlterar(item.id)}>Alterar</button>
            </li>
          );
        })}
      </ul>
    </body>
  );
}

export default App;
