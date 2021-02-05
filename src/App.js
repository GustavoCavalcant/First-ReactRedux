import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Menu from './components/menu';

function App() {
  const [inputFrutas, setInputFrutas] = React.useState("");
  const [inputTitulo, setInputTitulo] = React.useState("");

  const frutas = useSelector((state) => state.frutasReducer.frutas);

  const stateTitulo = useSelector((state) => state.tituloReducer.titulo);
  
  const dispatch = useDispatch();

  function adicionarFrutas(event) {
    event.preventDefault();

    const objFruta = {
      nome: inputFrutas
    }

    dispatch( {type: "ADICIONAR", value: objFruta})
  }

  function alterarTitulo(event) {
    setInputTitulo(event.target.value);
    dispatch({type: "ALTERAR", value: event.target.value});
  }

  return (
    <div className="container jumbotron">
      <h1 class="display-3">React Redux!</h1>
      <p class="lead">Este é um simples projeto utilizando o redux, obdecendo os devidos requisitos pedidos no "AVA"</p>
      <hr class="my-4"></hr>
      <p>Neste primeiro input podemos perceber que ele acompanha a sua digitação em tempo real.</p>
      <Menu />
      <form className="form-group">
        <label>Titulo</label>
        <input className="form-control" placeholder="Digite o Titulo..." value={inputTitulo} onChange={alterarTitulo} />
      </form>
      
      <h1>{stateTitulo}</h1>
      
      <form onSubmit={adicionarFrutas}>
        <p>Aqui podemos adicionar um fruta por vez, formando uma lista. </p>
        <input className="form-control"
          placeholder="Digite uma Fruta..."
          value={inputFrutas}
          onChange={(event) => setInputFrutas(event.target.value)}
        />

        <button className="btn btn-outline-success btn-block">Adicionar</button>
      </form>
      {
        frutas.map((fruta, index) => {
          return(
            <li key={index}>{fruta.nome}</li>
          )
        })
      }
    </div>
  );
}

export default App;
