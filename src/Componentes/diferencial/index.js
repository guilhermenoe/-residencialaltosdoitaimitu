import React, { Component } from "react";
import "./diferencial.scss";
import academia from "../../img/icones/academia.png";
import festa from "../../img/icones/festa.png";
import piscina from "../../img/icones/piscina.png";
import portaria from "../../img/icones/portaria.png";
import quadra from "../../img/icones/quadra.png";
import brinquedo from "../../img/icones/brinquedo.png";

export default class Diferencial extends Component {
  render() {
    return (
      <div className="caixaDiferencial" id="diferenciais">
        <div className="texto">
          <h3 id="titulo" className="azul titulo">
            Um residencial com lazer de resort
          </h3>
          <div className="ciano">
          <b>O RESIDENCIAL ALTOS DO ITAIM</b> oferece a você e toda sua família, um condomínio clube, onde todos tem espaços especiais e preparados para recebe-los.
 <p className="linha">As crianças e os bebês podem aproveitar lugares como brinquedoteca e playground, que envolvem atividades recreativas que estimulam o corpo, a mente e a interação com outros pequenos.</p>
<p className="linha">Os jovens podem usufruir da quadra esportiva e se divertir e fazer novas amizades.</p>
<p className="linha">Os adultos não ficam de fora e têm suas próprias opções para descontrair, Salão de festas, Piscina, churrasqueira com espaço gourmet e academia são perfeitos para quem gosta de promover eventos em família, com os amigos ou praticar atividades físicas de diversas modalidades.</p>

          </div>
        </div>

        <div className="container">
          <ul className="imagens ciano">
            <li className="caixa">
              <img src={portaria} alt="Portaria" />
              <p id="diferenciais">PORTARIA 24h</p>
              <p id="corpo">
              Portaria 24 horas, com controle de acesso de veículos e pedestres, oferecem o melhor da segurança ao condomínio.
              </p>
            </li>
            <li className="caixa">
              <img src={festa} alt="Portaria" />
              <p id="diferenciais">SALÃO DE FESTA</p>
              <p id="corpo">
              Os dois Salões de Festas serão totalmente equipado, e o melhor, integrado com um área gourmet, para você fazer aquela festa com sua família e seus amigos.
              </p>
            </li>
            <li className="caixa">
              <img src={quadra} alt="Portaria" />
              <p id="diferenciais">QUADRA POLIESPORTIVA</p>
              <p id="corpo">
              Quadra Poliesportiva de piso próprio para garantir a melhor diversão das crianças, e dos adultos também.
              </p>
            </li>
            <li className="caixa">
              <img src={piscina} alt="Portaria" />
              <h4 id="diferenciais">PISCINA</h4>
              <p id="corpo">
              Piscina Adulto e Infantil equipadas com cadeiras tipo espreguiçadeiras, além de um lava-pés. Podemos ainda contar com uma prainha artificial dentro da piscina.
              </p>
            </li>
            <li className="caixa">
              <img src={academia} alt="Portaria" />
              <p id="diferenciais">ACADEMIA</p>
              <p id="corpo">
              Academia totalmente montado com equipamentos de última geração e garantir aquele treino sem sair do conforto de sua casa.
              </p>
            </li>
            <li className="caixa">
              <img src={brinquedo} alt="Portaria" />
              <p id="diferenciais">BRINQUEDOTECA</p>
              <p id="corpo">
              A brinquedoteca foi desenvolvida para envolver as crianças e os bebes em atividades recreativas que estimulam o corpo, a mente e a interação com outros pequenos.
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
