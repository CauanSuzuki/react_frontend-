import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [lista, setLista] = useState([]);
  const [count, setCount] = useState(0);
  const funcaoAdicionar = () => {
    setCount(count + 1);
    setLista([...lista, { id: count, name: name }]);
  };

  const funcaoDeletar = () => {
    setLista(lista.filter((value, index) => index !== i));
  };

  const funcaoAlterar = () => {
    setLista(
      lista.map((value, index) =>
        index !== i ? value : { ...lista, name: name }
      )
    );
  };

  return (
    <body>
      <input type="text" onChange={(event) => setName(event.target.value)} />
      <button
        onClick={() => {
          funcaoAdicionar;
        }}
      >
        Adicionar
      </button>
      <ul>
        {lista.map((item, i) => {
          return (
            <li>
              {item.name}
              <button onClick={() => funcaoDeletar}>Remover</button>
              <button onClick={() => funcaoAlterar}>Alterar</button>
            </li>
          );
        })}
      </ul>
    </body>
  );
}

export default App;
