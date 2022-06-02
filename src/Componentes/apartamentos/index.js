import React, { Component } from "react";
import "./apartamentos.scss";
import Slider from "react-slick";
import LightBox from "react-image-lightbox";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NextArrow, PrevArrow } from "../customArrows/customArrows";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Apartamentos extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
      index: 0
    };
  }

  toggleModal = event => {
    this.setState({
      isActive: !this.state.isActive
    });
    console.log("clicado");
  };

  importAll(r) {
    return r.keys().map(r);
  }

  render() {
    const arrayImg = this.importAll(
      require.context("../../img/apartamentos/", true, /\.(png|jpe?g|svg)$/)
    );
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      // adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) => this.setState({ index: next })
    };
    return (
      <div className="apartamentos" id="apartamentos">
        <div className="texto">
          <h3 className="titulo bordered">Apartamentos</h3>
          <span>
          <p>
          Nossos apartamentos foram projetados por arquitetos, que entendem a necessidade de sua família e estimulam a convivência e o bem-estar. Itens essenciais como infraestrutura de AR-CONDICIONADO, DORMITORIO COM SUITE, até mesmo CLOSET, ajudam a diferenciar nosso projetos. </p>
<p className="linha">
Também não podemos esquecer da ampla varanda com a opção de se tornar uma VARANDA GOURMET contemplando churrasqueira para você poder aproveitar ainda mais o seu lar.

          </p>
          </span>
        </div>
        <div className="aps">
          <ul className="lista">
            <picture
              onClick={() => this.slider.slickGoTo(0)}
              tabIndex="1"
              className={`item1 ${+ this.state.index === 0 ? "active" : ""}`}
            >
              <h4>57,34m²</h4>
              <span>Apartamento</span>
            </picture>
            <picture
              onClick={() => this.slider.slickGoTo(1)}
              tabIndex="2"
              className={`item2 ${+ this.state.index === 1 ? "active" : ""}`}
            >
              <h4>53,78m²</h4>
              <span>Apartamento</span>
            </picture>
            <picture
              onClick={() => this.slider.slickGoTo(2)}
              tabIndex="3"
              className={`item3 ${+ this.state.index === 2 ? "active" : ""}`}
            >
              <h4>55,11m²</h4>
              <span>Apartamento</span>
            </picture>
            <picture
              onClick={() => this.slider.slickGoTo(3)}
              tabIndex="4"
              className={`item4 ${+ this.state.index === 3 ? "active" : ""}`}
            >
              <h4>81,51m²</h4>
              <span>Garden</span>
            </picture>
            <picture
              onClick={() => this.slider.slickGoTo(4)}
              tabIndex="5"
              className={`item5 ${+ this.state.index === 4 ? "active" : ""}`}
            >
              <h4>81,64m²</h4>
              <span>Garden</span>
            </picture>
          </ul>
        </div>
        <Slider
          ref={slider => (this.slider = slider)}
          {...settings}
          className="slider"
        >
          <div onClick={this.toggleModal} className="imgSlider">
            <div className="list_content">
              <ul className="listaCaracteristicas">
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> 02 Dormitorios
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> Varanda Gourmet
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> 01 Suite
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> Cozinha Americana
                </li>
              </ul>
              <ul className="listaCaracteristicas">
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> Sala de Jantar
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> Lavanderia
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> Sala de Estar
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> Estrutura para ar
                  condicionado
                </li>
              </ul>
            </div>
            <img src={arrayImg[0]} alt="Apartamento de 57,34 m²"></img>
          </div>
          <div onClick={this.toggleModal} className="imgSlider">
            <div className="list_content">
              <ul className="listaCaracteristicas">
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> 02 Dormitorios
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> Varanda Gourmet
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> 01 Suite
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> Cozinha Americana
                </li>
              </ul>
              <ul className="listaCaracteristicas">
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> Sala de Jantar
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> Lavanderia
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> Sala de Estar
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> Estrutura para ar
                  condicionado
                </li>
              </ul>
            </div>
            <img src={arrayImg[1]} alt="Apartamento de 57,34 m²"></img>
          </div>
          <div onClick={this.toggleModal} className="imgSlider">
            <div className="list_content">
              <ul className="listaCaracteristicas">
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> 02 Dormitorios
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> Varanda Gourmet
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> 01 Suite
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> Cozinha Americana
                </li>
              </ul>
              <ul className="listaCaracteristicas">
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> Sala de Jantar
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> Lavanderia
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> Sala de Estar
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> Estrutura para ar
                  condicionado
                </li>
              </ul>
            </div>
            <img src={arrayImg[2]} alt="Apartamento de 57,34 m²"></img>
          </div>
          <div onClick={this.toggleModal} className="imgSlider">
            <div className="list_content">
              <ul className="listaCaracteristicas">
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> 02 Dormitorios
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> Varanda Gourmet
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> 01 Suite
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> Cozinha Americana
                </li>
              </ul>
              <ul className="listaCaracteristicas">
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> Sala de Jantar
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> Lavanderia
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> Sala de Estar
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> Estrutura para ar
                  condicionado
                </li>
              </ul>
            </div>
            <img src={arrayImg[3]} alt="Apartamento de 57,34 m²"></img>
          </div>
          <div onClick={this.toggleModal} className="imgSlider">
            <div className="list_content">
              <ul className="listaCaracteristicas">
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> 02 Dormitorios
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> Varanda Gourmet
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> 01 Suite
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> Cozinha Americana
                </li>
              </ul>
              <ul className="listaCaracteristicas">
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> Sala de Jantar
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> Lavanderia
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> Sala de Estar
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} /> Estrutura para ar
                  condicionado
                </li>
              </ul>
            </div>
            <img src={arrayImg[4]} alt="Apartamento de 57,34 m²"></img>
          </div>
        </Slider>
        {this.state.isActive && (
          <LightBox
            clickOutsideToClose={true}
            mainSrc={arrayImg[this.state.index]}
            nextSrc={arrayImg[(this.state.index + 1) % arrayImg.length]}
            prevSrc={
              arrayImg[
                (this.state.index + arrayImg.length - 1) % arrayImg.length
              ]
            }
            onCloseRequest={() => {
              this.setState({ isActive: false });
              this.slider.slickGoTo(this.state.index);
            }}
            onMovePrevRequest={() =>
              this.setState({
                index:
                  (this.state.index + arrayImg.length - 1) % arrayImg.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                index: (this.state.index + 1) % arrayImg.length
              })
            }
          />
        )}
      </div>
    );
  }
}
