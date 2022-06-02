import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Product(props) {
  const [activeModal, setActiveModal] = useState(false);

  const { name, ingredients, img, prices, tag, obs } = props.product;
  const priceElements = Object.keys(prices).map(price => (
    <Price key={price} price={{ [price]: prices[price] }} />
  ));

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);

    return () => document.removeEventListener("keydown", handleKeyDown, false);
  }, []);

  const handleKeyDown = event => {
    if (event.keyCode == 27)
      //ESC
      closeModal();
  };

  const openModal = () => setActiveModal(true);

  const closeModal = () => setActiveModal(false);

  return (
    <div className="product">
      <div className="container">
        {img && (
          <img
            className="prod-img"
            src={img}
            alt={name}
            onClick={() => openModal()}
          />
        )}
        <div className="prod-text">
          <p className="title">
            {tag && (
              <span className="tag" style={{ backgroundColor: tag.color }}>
                {tag.name}
              </span>
            )}
            {name}
          </p>
          <p className="ingredients">{ingredients}</p>
          {obs && <p className="prod-obs">{obs}</p>}
        </div>
        <div className="prod-prices">{priceElements}</div>
      </div>

      {/* Modal */}
      {activeModal && (
        <div
          className="modal-image"
          onClick={e => e.target.className == "modal-image" && closeModal()}
        >
          <div className="modal-container">
            <button onClick={() => setActiveModal(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <img src={img} />
          </div>
        </div>
      )}
    </div>
  );
}
