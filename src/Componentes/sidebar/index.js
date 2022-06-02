import React, { Component } from "react";
import "./sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import PopUp from "../pop_up"

export default class SideBar extends Component {
  constructor(){
    super()
    this.state={
      emailActive:false,
      phoneActive:false,
      whatsActive:false
    }
    this.toogleModal = this.toogleModal.bind(this)
  }

  toogleModal(){
   this.setState({emailActive:!this.state.emailActive})
  }

  render() {
    return (
      <nav className="menu-navigation-icons">
        <a className="menu-orange" onClick={this.toogleModal}>
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          <span>EMAIL</span>
        </a>
        <a target="_blank" rel="noopener" href="tel: 11-99196-0002" className="menu-orange">
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
          <span>11 99196-0002</span>
        </a>
        <a target="_blank" rel="noopener" href="https://api.whatsapp.com/send?phone=5511991960002" className="menu-orange">
          <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
          <span>WHATSAPP</span>
        </a>
        {this.state.emailActive &&
        <PopUp isActive={this.state.emailActive} close={this.toogleModal}/>}
      </nav>
    );
  }
}
