import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [lista, setLista] = useState([]);
  const [count,setCount] = useState(0)
  // Esse array deve conter dois atributos, [ { id: 1, name: "teste" } ], 
  // o nome deve aparecer na lista e o id deve ser utilizado para deletar e alterar.
  return (
    <body>
      <input type="text" onChange={(event) => setName(event.target.value)} />
      <button onClick={() => {setCount(count+1)
      setLista([...lista, {id:count, name:name}])}
    }>Adicionar</button>
{/* mover lógica do click para uma função externa do render. Isso para todos as ações de click e change. */}
      <ul>
        {lista.map((item, i) => {
          return (
            <li>
              {item.name}
              <button
                onClick={() =>
                  setLista(lista.filter((value, index) => index !== i))
                }
              >
                Remover
              </button>
              <button
                onClick={() =>
                  setLista(
                    lista.map((value, index) => (index !== i ? value : {...lista,name:name}))
                  )
                }
              >
                Alterar
              </button>
            </li>
          );
        })}
      </ul>
    </body>
  );
}

export default App;
