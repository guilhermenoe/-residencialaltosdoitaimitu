import React, { Component } from "react";
import "./diferencialFotos.scss";
import churrasqueira from "../../img/icones/churrasqueira.png";
import redario from "../../img/icones/redario.png";
import playground from "../../img/icones/playground.png";
import pet from "../../img/icones/pet.png";
import bicicleta from "../../img/icones/bicicleta.png";
import praca from "../../img/icones/praca.png";

import Slider from "react-slick";
import Lightbox from "react-image-lightbox";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-image-lightbox/style.css";
import { NextArrow, PrevArrow } from "../customArrows/customArrows";


export default class DiferencialFotos extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
      activeImg: "",
      index: 0
    };
  }

  importAll(r) {
    return r.keys().map(r);
  }

  sliderHelper = event => {
    this.setState({});
  };

  toggleModal = event => {
    this.setState({
      isActive: !this.state.isActive,
      activeImg: event.target.src
    });
  };

  search = (list, string) => {
    let ret = list.filter(data => data === string);
    return ret;
  };

  repeater = prop => {
    return prop.map(path => {
      return <img src={path} alt={path} onClick={this.toggleModal} />;
    });
  };
  
  render() {

    //**********Inicio Procurar no Slider**********
    function achar(array) {
      var ret = array.filter(procurar1);
      return procurarIndex(ret, array);
    }
    function procurar1(value, index, array) {
      return value.search(/churras/i) >= 0;
    }

    function achar2(array) {
      var ret = array.filter(procurar2);
      return procurarIndex(ret, array);
    }
    function procurar2(value, index, array) {
      return value.search(/redario/i) >= 0;
    }

    function achar3(array) {
      var ret = array.filter(procurar3);
      return procurarIndex(ret, array);
    }
    function procurar3(value, index, array) {
      return value.search(/playground/i) >= 0;
    }

    function achar4(array) {
      var ret = array.filter(procurar4);
      return procurarIndex(ret, array);
    }
    function procurar4(value, index, array) {
      return value.search(/pet/i) >= 0;
    }

    function achar5(array) {
      var ret = array.filter(procurar5);
      return procurarIndex(ret, array);
    }
    function procurar5(value, index, array) {
      return value.search(/bicicleta/i) >= 0;
    }

    function achar6(array) {
      var ret = array.filter(procurar6);
      return procurarIndex(ret, array);
    }
    function procurar6(value, index, array) {
      return value.search(/praca/i) >= 0;
    }
    function procurarIndex(value, array) {
      return array.indexOf(value[0]);
    }
    //******Fim Procurar no Slider*********

    const arrayImg = this.importAll(
      require.context("../../img/diferencialFotos/", true, /\.(png|jpe?g|svg)$/)
    );

    const customStyles = {
      arrows: {
        right: "0",
        bottom: "0",
        left: "unset",
        top: "unset",
        backgroundColor: "rgba(0, 0, 0, 0.5)"
      },
      prev:{
        right: "25px",
      }
    };
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <NextArrow/>,
      prevArrow: <PrevArrow/>,
      adaptiveHeight: false,
      beforeChange: (current, next) => this.setState({ index: next })
    };
    return (
      <div className="caixaDiferencialFotos">
        <div className="caixaCaracteristicas">
          <div className="container">
            <h3 className="titulo bordered">
              E MUITO MAIS DIVERSÃO PRA VOCÊ E SUA FAMÍLIA
            </h3>
            <div className="content">
              <div className="listaCaracteristicas">
                <picture
                  name="churrascaria"
                  className="caracteristicas"
                  onClick={() =>
                    this.slider.slickGoTo(parseInt(achar(arrayImg), false))
                  }
                >
                  <img src={churrasqueira} alt="Churrasqueira" />
                  <p>Churrasqueira</p>
                </picture>
                <picture
                  className="caracteristicas"
                  onClick={() =>
                    this.slider.slickGoTo(parseInt(achar2(arrayImg)), false)
                  }
                >
                  <img src={redario} alt="Redario" />
                  <p>Redario</p>
                </picture>
                <picture
                  className="caracteristicas"
                  onClick={() =>
                    this.slider.slickGoTo(parseInt(achar3(arrayImg)), false)
                  }
                >
                  <img src={playground} alt="Playground" />
                  <p>Playground</p>
                </picture>
                <picture
                  className="caracteristicas"
                  onClick={() =>
                    this.slider.slickGoTo(parseInt(achar4(arrayImg)), false)
                  }
                >
                  <img src={pet} alt="Espaço Pet" />
                  <p>Espaço Pet</p>
                </picture>
                <picture
                  className="caracteristicas"
                  onClick={() =>
                    this.slider.slickGoTo(parseInt(achar5(arrayImg)), false)
                  }
                >
                  <img src={bicicleta} alt="Bicicleta" />
                  <p>Bicicleta</p>
                </picture>
                <picture
                  className="caracteristicas"
                  onClick={() =>
                    this.slider.slickGoTo(parseInt(achar6(arrayImg)), false)
                  }
                >
                  <img src={praca} alt="Praça" />
                  <p>Praça</p>
                </picture>
              </div>
              <div className="caixaSlider">
              <Slider
                ref={slider => (this.slider = slider)}
                {...settings}
                className="slider"
              >
                {this.repeater(arrayImg)}
              </Slider>
              <p className="espaco">Imagens meramente ilustrativas</p>
              </div>
            </div>
          </div>
        </div>
        {this.state.isActive && (
          <Lightbox
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
