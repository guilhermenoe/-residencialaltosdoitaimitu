import React, { Component } from "react";

import sustentavel from "../../img/footer/engenhariaSustentavel.png";
import construtora from "../../img/footer/construtoraIncorporadora.png";
import imobiliarios from "../../img/footer/cccastro-logo-branco.png";
import { faFacebookSquare,faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <div className="caixaFooter">
        <div className="subCaixa">
          <picture>
            <p className="nome">Vendas e Incorporações</p>
            <img src={imobiliarios} alt="Investidor" className="foto"/>
          </picture>
          <picture>
            <p className="nome">Gerenciamento e Contrução </p>
            <img src={construtora} alt="Construtora" />
          </picture>
        </div>
        <div className="subCaixa">
          <p className="descricao">
            <p>Conforme projeto aprovado nº 23982/209 incorporação devidamente registrada no R-15 da matrícula nº 14144 do CRI de Itu/SP de 21/08/2020</p>
            <p>Projeto aprovado pela Prefeitura de Itu N 175/2020</p>
          </p>
          <picture>
            <p className="nome">Padrões de Qualidade</p>
            <img src={sustentavel} alt="Engenharia Sustentável" />
          </picture>
          <div className="redes_sociais">
            <p className="nome">Redes Sociais</p>
            <div className="icones">
              <a target="_blank" rel="noopener" href="https://www.facebook.com/Residencial-Altos-do-Itaim-Itu-100430531550797">
                <FontAwesomeIcon icon={faFacebookSquare} className="branco" />
              </a>
              <a target="_blank" rel="noopener" href="https://www.instagram.com/residencialaltosdoitaimitu/">
                <FontAwesomeIcon icon={faInstagram} className="branco" alt="Instagram"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
