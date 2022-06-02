import React, { Component } from "react";
import Slider from "react-slick";
import Lightbox from "react-image-lightbox";
import { NextArrow, PrevArrow } from "../customArrows/customArrows";

import "./dentroApartamentos.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class DentroApartamentos extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
      index: 0
    };
  }
  toogleModal = prop => {
    this.setState({
      isActive: !this.state.isActive
    });
  };

  repeater = prop => {
    return prop.map(path => {
      return <img src={path} alt={path} onClick={this.toogleModal} />;
    });
  };
  importAll(r) {
    return r.keys().map(r);
  }

  render() {
    const arrayImg = this.importAll(
      require.context(
        "../../img/dentroApartamentos/",
        true,
        /\.(png|jpe?g|svg)$/
      )
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
      <div className="caixaDentroApartamento">
          <h3 className="titulo">Por dentro dos Apartamentos</h3>
        <div className="caixaSlider">
          <Slider
            ref={slider => (this.slider = slider)}
            {...settings}
            className="slider"
          >
            {this.repeater(arrayImg)}
          </Slider>
          <p>Imagens meramente ilustrativas</p>
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
