import { React, useEffect, useState } from 'react';

import './css/App.css'

import logo from './assets/img/logo.png';
import lupa from './assets/img/lupa.png';

import InfoSuccess from './components/InfoSuccess.jsx'
import InfoError from './components/InfoError';


function App() {

  // DECLARE VARIABLES
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([""])
  const conversorBRL = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
  var clientNameId = document.getElementById("client-name");
  var orderPriceId = document.getElementById("order-price");
  var orderDateId = document.getElementById("order-date");
  var orderStatusId = document.getElementById("order-status");
  const url = "http://192.168.15.6:3000/encomendas";

  // DECLARE FUNCTIONS
  const orderStatus = (entregue) => entregue ? "Entregue" : "Entregar";
  const dataFormatada = (encomenda) => {
    let dia = encomenda.data.split("-")[2].slice(0, 2)
    let mes = encomenda.data.split("-")[1]
    let ano = encomenda.data.split("-")[0]

    return `${dia}/${mes}/${ano}`
  };

  // FAKE API
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error("Erro!"))
  },[])

  // HANDLECLICK FUNCTION
  const handleClick = () => {
    const encomenda = data.find(element => element.numero === searchTerm)
    // console.log(`Search value: ${searchTerm} | encomenda.numero: ${encomenda?.numero}`)

    if (searchTerm === encomenda?.numero) {
      clientNameId.innerText = `${encomenda.cliente.id} - ${encomenda.cliente.nome}`
      orderPriceId.innerText = `${conversorBRL.format(encomenda.valor)}`
      orderDateId.innerText = dataFormatada(encomenda)
      orderStatusId.innerText = orderStatus(encomenda.entregue)

      document.getElementById("info-success").style.display = "flex"
      document.getElementById("info-error").style.display = "none"
    } else if (searchTerm === "" || searchTerm === null) {
      alert("Digite o número do pedido.")
      document.getElementById("info-success").style.display = "none"
      document.getElementById("info-error").style.display = "none"
    } else {
      document.getElementById("info-success").style.display = "none"
      document.getElementById("info-error").style.display = ""
    }
  };


  return (
    <div className="App">
      <header>
        <img className="logo" src={logo} alt="logo" />

        <div className="tittle">
          Consulte sua encomenda:
        </div>

        <form>
          <input
            className="search"
            id="search"
            type="text"
            placeholder="Digite o número do pedido"
            onChange={e => setSearchTerm(e.target.value)}
          />
          <img id="btn-buscar" type="submit" src={lupa} alt="Buscar" onClick={handleClick} />
        </form>
      </header>

      <main>
        <InfoSuccess />
        <InfoError />
      </main>
    </div>
  );
}

export default App;
