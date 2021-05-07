import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [name, setName] = useState("");
  const [lista, setLista] = useState([]);
  const funcaoAdicionar = () => {
    setLista([...lista, { id: Math.random(), name: name, riscado: false }]);
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
  const funcaoRiscar = (id) => {
    setLista(
      lista.map((item) => {
        if (item.id === id) {
          return {
            id: item.id,
            name: item.name,
            riscado: !item.riscado,
          };
        }
        return item;
      })
    );
  };
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <login />
            <input
                // type="text"
                placeholder = "Escreva seu e-mail"
                onChange={(event) => setName(event.target.value)}
              />
              <input
                // type="text"
                placeholder = "Escreva senha"
                onChange={(event) => setName(event.target.value)}
              />
              {/* <button onClick={funcaoValidacao}>Enviar</button> */}
              <button>Enviar</button> 
          </Route>

          <Route path="/">
            <Home />
            <body>
              <input
                type="text"
                onChange={(event) => setName(event.target.value)}
              />
              <button onClick={funcaoAdicionar}>Adicionar</button>
              {console.log(lista)}
              <ul>
                {lista.map((item) => {
                  return (
                    <li
                      style={{
                        textDecoration:
                          item.riscado === true ? "line-through" : "none",
                      }}
                    >
                      {item.name}
                      <button onClick={() => funcaoDeletar(item.id)}>
                        Remover
                      </button>
                      <button onClick={() => funcaoAlterar(item.id)}>
                        Alterar
                      </button>
                      <button onClick={() => funcaoRiscar(item.id)}>
                        Riscar
                      </button>
                    </li>
                  );
                })}
              </ul>
            </body>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Login() {
  return <h2>Login</h2>;
}
export default App;