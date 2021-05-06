import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [lista, setLista] = useState([]);
  return (
    <body>
      <input type="text" onChange={(event) => setName(event.target.value)} />
      <button onClick={() => setLista([...lista, name])}>Adicionar</button>

      <ul>
        {lista.map((item, i) => {
          return (
            <li>
              {item}
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
                    lista.map((value, index) => (index !== i ? value : name))
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

    /* <button
onClick={() => {
  // name !== "" ? setName("") : setName("Frango")
  aberto === true ? setAberto(false) : setAberto(true);
}}
>
{aberto === true ? "Desaparece" : "Aparece"}
</button>
<p> {aberto === true ? "frango" : ""} </p> */

    // <div>
    //   <form>
    //     <label>
    //     <p>Contador: {name} </p>
    //       <input type="text" onChange={(event) => setName(event.target.value)} />
    //     </label>
    //   </form>
    // </div>
  );
}

export default App;
