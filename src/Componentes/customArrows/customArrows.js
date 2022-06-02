import React, { Component } from "react";

import LeftArrow from "../../img/icones/chevron-left-solid.svg";
import RightArrow from "../../img/icones/chevron-right-solid.svg";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./customArrows.scss"

export function NextArrow(props) {
  const {style, onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{ ...style}}
      className="next_arrow"
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
}

export function PrevArrow(props) {
  const {style, onClick } = props;
  return (
    <div
      className="prev_arrow"
      style={{ ...style}}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
}
