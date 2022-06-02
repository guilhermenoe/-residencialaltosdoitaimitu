import React, { Component } from "react";
import "./banner.scss";
import ImgAp from "../../img/banner/Duas torres com  2 elevadores cada.png";
import ImgFamilia from "../../img/banner/family-png-40068.png";
import tagFinanceiro from '../../img/banner/tag-finaciamento-facilitado.png';

export default class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="texto">
          <h3 id="bold">Qualidade de vida e lazer de resort para a sua família</h3>
          <p id="normal">
            Conquiste uma nova vida e aproveite tudo que você merece.
          </p>
        </div>
        <div className="specs">
          <div className="caixa_info">
            <img src={ImgAp} alt="Dormitórios com Suíte" className="imgTam" />
            <div className="valor">
              <p>
                {/* Com <b>Mensais</b> a partir de */}
              </p>
              <p className="money">
                {/* R$<b className="money heavyMoney">495</b>,00 */}
              </p>
            </div>
          </div>
          <img src={ImgFamilia} className="familia" alt="Familia" />
        </div>
        <img className="img" src={tagFinanceiro} alt="Caixa Financiamento Facilitado" />
      </div>
    );
  }
}
