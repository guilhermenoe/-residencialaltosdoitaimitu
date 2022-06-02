import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import "./localizacao.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faCoffee,
  faUniversity,
  faPizzaSlice,
  faPencilAlt,
  faShoppingBag,
  faClinicMedical,
  faShoppingCart,
  faHospitalSymbol,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import gmap from "../../img/icones/maps.jpg";
import waze from "../../img/icones/waze.jpg";

import data from "./data";
import Map from "../map";

class Localizacao extends Component {
  constructor() {
    super();
    this.state = {
      maps: data.default,
      type: "",
    };
  }

  changePlaces = (event) => {
    event.preventDefault();
    const type = event.currentTarget.getAttribute("type");
    this.setState({ maps: data[type], type: type });
  };

  onMapLoad = (map) => {
    let info = [];
    let infoWindow = new window.google.maps.InfoWindow();

    this.state.maps.points.map(function (point, index) {
      info.push("<h1>" + point.label + "</h1>");

      let marker = new window.google.maps.Marker({
        position: point.position,
        title: point.label,
        map: map,
        icon: point.icon,
      });

      window.google.maps.event.addListener(
        marker,
        "click",
        (function (marker, index) {
          return function () {
            infoWindow.setContent(info[index]);
            infoWindow.open(map, marker);
          };
        })(marker, index)
      );
    });
  };

  render() {
    return (
      <div className="containerMap" id="localizacao">
        <div className="texto">
          <h3 className="titulo bordered">Localização</h3>
          <p>
            Sua localização privilegiada na cidade de Itu, o{" "}
            <b>RESIDENCIAL ALTOS DE ITAIM</b>, oferece os melhores comércios da
            região, contando com bancos, supermercados, materiais de construção,
            restaurantes, parques, escolas, entre todos os itens a mais que a
            nossa cidade oferece.
          </p>
        </div>
        <div className="content">
          <Map
            id="g-map"
            className="map"
            options={{
              center: this.state.maps.center,
              zoom: this.state.maps.zoom,
            }}
            onMapLoad={this.onMapLoad}
          />
          <div className="markers">
            <h3 className="subtitulo">
              Explore a região e conheça todas as facilidades
            </h3>
            <div className="caixaIcones">
              <a
                href="#"
                title="Academia"
                onClick={this.changePlaces}
                type="academias"
              >
                <picture
                  className={`icones academia ${
                    this.state.type === "academias" ? "active" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faDumbbell} className="rcorners" />
                  <span>Academia</span>
                </picture>
              </a>
              <a
                href="#"
                title="Padaria"
                onClick={this.changePlaces}
                type="padarias"
              >
                <picture
                  className={`icones padaria ${
                    this.state.type === "padarias" ? "active" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faCoffee} className="rcorners" />
                  <span>Padaria</span>
                </picture>
              </a>
              <a
                href="#"
                title="Bancos"
                onClick={this.changePlaces}
                type="bancos"
              >
                <picture
                  className={`icones banco ${
                    this.state.type === "bancos" ? "active" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faUniversity} className="rcorners" />
                  <span>Banco</span>
                </picture>
              </a>
              <a
                href="#"
                title="Restaurantes"
                onClick={this.changePlaces}
                type="restaurantes"
              >
                <picture
                  className={`icones restaurante ${
                    this.state.type === "restaurantes" ? "active" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faPizzaSlice} className="rcorners" />
                  <span>Restaurantes</span>
                </picture>
              </a>
              <a
                href="#"
                title="Escola"
                onClick={this.changePlaces}
                type="escolas"
              >
                <picture
                  className={`icones escola ${
                    this.state.type === "escolas" ? "active" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faPencilAlt} className="rcorners" />
                  <span>Escola</span>
                </picture>
              </a>
              <a
                href="#"
                title="Shopping"
                onClick={this.changePlaces}
                type="shoppings"
              >
                <picture
                  className={`icones shopping ${
                    this.state.type === "shoppings" ? "active" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faShoppingBag} className="rcorners" />
                  <span>Shopping</span>
                </picture>
              </a>
              <a
                href="#"
                title="Farmácia"
                onClick={this.changePlaces}
                type="farmacias"
              >
                <picture
                  className={`icones farmacia ${
                    this.state.type === "farmacias" ? "active" : ""
                  }`}
                >
                  <FontAwesomeIcon
                    icon={faClinicMedical}
                    className="rcorners"
                  />
                  <span>Farmácia</span>
                </picture>
              </a>
              <a
                href="#"
                title="Supermercado"
                onClick={this.changePlaces}
                type="supermercados"
              >
                <picture
                  className={`icones supermercado ${
                    this.state.type === "supermercados" ? "active" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faShoppingCart} className="rcorners" />
                  <span>Supermercado</span>
                </picture>
              </a>
              <a
                href="#"
                title="Hospital"
                onClick={this.changePlaces}
                type="hospitais"
              >
                <picture
                  className={`icones hospital ${
                    this.state.type === "hospitais" ? "active" : ""
                  }`}
                >
                  <FontAwesomeIcon
                    icon={faHospitalSymbol}
                    className="rcorners"
                  />
                  <span>Hospital</span>
                </picture>
              </a>
              <a
                href="#"
                title="Universidades"
                onClick={this.changePlaces}
                type="universidades"
              >
                <picture
                  className={`icones universidade ${
                    this.state.type === "universidades" ? "active" : ""
                  }`}
                >
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    className="rcorners"
                  />
                  <span>Universidades</span>
                </picture>
              </a>
            </div>
          </div>
        </div>
        <div className="links">
          <a
            href="https://www.google.com.br/maps/place/Av.+Caetano+Ruggieri,+3420,+Itu+-+SP/@-23.2761635,-47.3073262,17z/data=!4m5!3m4!1s0x94cf500be74bf9bd:0x1893680f48ab48db!8m2!3d-23.2761675!4d-47.3074346"
            target="_blank"
            rel="noopener"
            className="borda"
          >
            <img alt="GoogleMap" src={gmap} className="botao" />
            <span style={{ height: "100%" }}>Abrir com Google Maps</span>
          </a>
          <a
            href="https://waze.com/ul?ll=-23.2761635,-47.3073262&amp;navigate=yes"
            target="_blank"
            rel="noopener"
            className="borda"
          >
            <img alt="Waze" src={waze} className="botao" />
            Abrir com Waze
          </a>
        </div>
        <p className="margin_esquerda">Empreendimento Localizado na  Avenida Caetano Ruggieri, 3420 - Cruz das Almas- Itu (Ao lado da Bravox)</p>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA5OuvcCJ_pV_jZem7kdhLNHwijwGn3CG8",
})(Localizacao);
