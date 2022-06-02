import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import ModalImg from './Componentes/modal';
//Componentes
import Cabecalho from "./Componentes/header";
import Banner from "./Componentes/banner";
import SideBar from "./Componentes/sidebar";
import Diferencial from "./Componentes/diferencial";
import DiferencialFotos from "./Componentes/diferencialFotos"
import Localizacao from "./Componentes/localizacao"
import Apartamentos from "./Componentes/apartamentos"
import DentroApartamentos from "./Componentes/dentroApartamentos"
import Implantacao from "./Componentes/implantacao";
import QuemSomos from "./Componentes/quemSomos";
import Footer from "./Componentes/footer";
import PopUp from "./Componentes/pop_up";

ReactDOM.render(
  <BrowserRouter basename="">
    <Cabecalho />
    <Banner />
    <Diferencial />
    <DiferencialFotos/>
    <Localizacao/>
    <Apartamentos/>
    <DentroApartamentos/>
    <Implantacao/>
    <QuemSomos/>
    <Footer/>
    {/* <ModalImg /> */}
    <PopUp/>
    <SideBar />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
