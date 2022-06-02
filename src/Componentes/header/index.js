import React, { Component } from "react";
import "./header.scss";
import VectorImage from "../../img/header/Vector Smart Object.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false
    };
  }

  smoothScroll = prop => {
    document.querySelector(prop).scrollIntoView({
      behavior: "smooth"
    });
    this.setState({isActive:false})
  };
  toogleClass = () => {
    console.log("oioioi");
    this.setState({ isActive: !this.state.isActive });
  };
  render() {
    // var elmnt = document.getElementById("apartamentos");
    // elmnt.scrollIntoView();

    return (
      <header className="cabecalho centralizado">
        <picture id="img">
          <img src={VectorImage} alt="Residencial Altos do Itaim" />
        </picture>
        <nav
          className={`menu ${this.state.isActive === true ? "active" : ""}`}
          id="menu"
        >
          <a
            onClick={() => this.smoothScroll("#diferenciais")}
            className="Selected"
          >
            Diferenciais
          </a>
          <a
            onClick={() => this.smoothScroll("#apartamentos")}
            className="Selected"
          >
            Apartamentos
          </a>
          <a
            onClick={() => this.smoothScroll("#localizacao")}
            className="Selected"
          >
            Localização
          </a>
          <a
            onClick={() => this.smoothScroll("#implantacao")}
            className="Selected"
          >
            Implantação
          </a>
          <a
            onClick={() => this.smoothScroll("#quemSomos")}
            className="Selected"
          >
            Quem Somos
          </a>
        </nav>
        <picture className="menu-toogle" onClick={() => this.toogleClass()}>
          <FontAwesomeIcon icon={faBars} />
        </picture>
      </header>
    );
  }
}
