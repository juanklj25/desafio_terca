'use client'
import Image from "next/image";
import  "./globals.css"
import { useState, useEffect } from "react";

//nao tive conhecimento para finalizar//
export default function Home() {

  const [data, setData] = useState({
    cep: "",
    logradouro: "",
    bairro: "",
    uf: "",
    ibge: ""
  })  
  
  useEffect (() => {
    fetch(
      'https://viacep.com.br/ws/01001000/json/'
    )
    .then((response => response.json()))
    .then((data) => {
      setCepData({
      cep: data.cep,
      logradouro: data.logradouro,
      bairro: data.bairro,
      uf: data.uf,
      ibge: data.ibge
    });
})
    .catch((error) => console.log('error',error));
  },[]);
  console.log(data)
  return (
<main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="meio">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQStyOvX4XntNRP_A7q-po8D22nntEcU9vb9zsL0biuKg&s" alt="Descrição da imagem"></img>

        <label htmlFor="cep">CEP:</label>
        <br />
        <input className="cep" type="number" id="cep" name="cep_usuario"></input>
        <br />
        <label htmlFor="logradouro">Logradouro:</label>
        <br />
        <input className="logradouro" type="text" id="logradouro" name="logradouro_usuario"></input>
        <br />
        <label htmlFor="bairro">Bairro:</label>
        <br />
        <input className="bairro" type="text" id="bairro" name="bairro_usuario"></input>
        <br />
        <label htmlFor="uf">UF:</label>
        <br />
        <input className="uf" type="text" id="uf" name="uf_usuario"></input>
        <br />
        <label htmlFor="ibge">IBGE:</label>
        <br />
        <input className="ibge" type="number" id="ibge" name="ibge_usuario"></input>
        <br />
        <div className="flex justify-center"></div>
        
      </div>
    </main>
  );
  }

