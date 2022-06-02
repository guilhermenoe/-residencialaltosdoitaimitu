import React, { Component } from "react";
import Lightbox from "react-image-lightbox";

import academia from "../../img/iconesImplantacao/academia.png";
import bicicleta from "../../img/iconesImplantacao/bicicleta.png";
import brinquedo from "../../img/iconesImplantacao/brinquedo.png";
import carro from "../../img/iconesImplantacao/carro.png";
import churrasqueira from "../../img/iconesImplantacao/churrasqueira.png";
import festa from "../../img/iconesImplantacao/festa.png";
import fogueira from "../../img/iconesImplantacao/fogueira.png";
import pedestre from "../../img/iconesImplantacao/pedestre.png";
import pet from "../../img/iconesImplantacao/pet.png";
import piscina from "../../img/iconesImplantacao/piscina.png";
import planta from "../../img/iconesImplantacao/planta.png";
import playground from "../../img/iconesImplantacao/playground.png";
import portaria from "../../img/iconesImplantacao/portaria.png";
import praca from "../../img/iconesImplantacao/praca.png";
import predio from "../../img/iconesImplantacao/predio.png";
import quadra from "../../img/iconesImplantacao/quadra.png";
import redario from "../../img/iconesImplantacao/redario.png";
import fotoPlanta from "../../img/iconesImplantacao/IMPLANTACAO.png";

import "./implantacao.scss";

export default class Implantacao extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
      index: 0
    };
  }

  toogleModal = props => {
    this.setState({
      isActive: !this.state.isActive
    });
  };
  importAll(r) {
    return r.keys().map(r);
  }

  render() {
    const arrayImg = this.importAll(
      require.context("../../img/diferencialFotos/", true, /\.(png|jpe?g|svg)$/)
    );
    return (
      <div className="caixaImplantacao" id="implantacao">
        <div className="container">
          <div className="texto">
            <h3 className="titulo bordered">Implantação</h3>
            <span>
              <p>
              Projetada de forma a facilitar o acesso e o conforto de todos os moradores a implantação do RESIDENCIAL ALTOS DO ITAIM foi distribuída em duas áreas de estacionamento distintas, com área especial de carga e descarga em frente a cada Torre. 
                </p>
                <p className="linha">
                A disposição de toda área de lazer está concentrada de forma que todos os moradores possam desfrutar dos espaços oferecidos. 
</p>
            </span>
          </div>
          <img
            src={fotoPlanta}
            alt="Implantação"
            className="planta"
            onClick={this.toogleModal}
          />
          {this.state.isActive && (
            <Lightbox
              clickOutsideToClose={true}
              mainSrc={fotoPlanta}
              onCloseRequest={() => {
                this.setState({ isActive: false });
              }}
            />
          )}
          <div className="caracteristicas">
            <picture className="icones">
              <img src={portaria} alt="Portaria" />
              <p>Portaria</p>
            </picture>
            <picture className="icones">
              <img src={predio} alt="Bloco B" />
              <p>Bloco B</p>
            </picture>
            <picture className="icones">
              <img src={brinquedo} alt="Brinquedoteca" />
              <p>Brinquedoteca</p>
            </picture>
            <picture className="icones">
              <img src={playground} alt="Playground" />
              <p>Playground</p>
            </picture>
            <picture className="icones">
              <img src={pedestre} alt="Estrada de pedestres" />
              <p>Estrada de pedestre</p>
            </picture>
            <picture className="icones">
              <img src={piscina} alt="Piscina" />
              <p>Piscina Adulto e Infantil prainha e solarium</p>
            </picture>
            <picture className="icones">
              <img src={academia} alt="Academia" />
              <p>Academia</p>
            </picture>
            <picture className="icones">
              <img src={pet} alt="Espaço Pet" />
              <p>Espaço Pet</p>
            </picture>
            <picture className="icones">
              <img src={carro} alt="Estacionamento Visitante" />
              <p>Estacionamento visitante</p>
            </picture>
            <picture className="icones">
              <img src={churrasqueira} alt="Churrasqueira" />
              <p>Churrasqueira</p>
            </picture>
            <picture className="icones">
              <img src={festa} alt="Salão de Festas" />
              <p>Salão de festas 1</p>
            </picture>
            <picture className="icones">
              <img src={praca} alt="Praça" />
              <p>Praça</p>
            </picture>
            <picture className="icones">
              <img src={carro} alt="Estacionamento" />
              <p>Estacionamento</p>
            </picture>
            <picture className="icones">
              <img src={quadra} alt="Quadra Poliesportiva" />
              <p>Quadra Poliesportiva</p>
            </picture>
            <picture className="icones">
              <img src={festa} alt="Salão de Festas" />
              <p>Salão de festas 2</p>
            </picture>
            <picture className="icones">
              <img src={bicicleta} alt="Bicicletário" />
              <p>Bicicletário</p>
            </picture>
            <picture className="icones">
              <img src={predio} alt="Bloco A" />
              <p>Bloco A</p>
            </picture>
            <picture className="icones">
              <img src={fogueira} alt="Fireplace" />
              <p>Fireplace</p>
            </picture>
            <picture className="icones">
              <img src={planta} alt="Apartamento Garden" />
              <p>Apartamento Garden</p>
            </picture>
            <picture className="icones">
              <img src={redario} alt="Redário" />
              <p>Redário</p>
            </picture>
          </div>
        </div>
      </div>
    );
  }
}
