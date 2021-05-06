import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [lista, setLista] = useState(['a']);

  const funcaoAdicionar = () => {
    setLista([...lista, { name: name }]);
  };

  const funcaoDeletar = () => {
    setLista(lista.filter((value, index) => index !== lista.indexOf('a')));
  };

  const funcaoAlterar = () => {
    setLista(
      lista.map((value, index) =>
        index !== lista.indexOf(value) ? value : { ...lista, name: name }
      )
    );
  };

  return (
    <body>
      <input type="text" onChange={(event) => setName(event.target.value)} />
      <button onClick={() => funcaoAdicionar ()}>Adicionar</button>
      {console.log(lista)}
      <ul>
        {lista.map((item, cte) => {
          return (
            <li>
              {item.name}
              <button onClick={() => funcaoDeletar()}>Remover</button>
              <button onClick={() => funcaoAlterar()}>Alterar</button>
            </li>
          );
        })}
      </ul>
    </body>
  );
}

export default App;
