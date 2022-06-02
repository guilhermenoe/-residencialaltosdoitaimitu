import React, { Component, useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

import "./pop_up.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function PopUp(props) {
  const { register, handleSubmit, watch, errors } = useForm();
  var [load, setload] = useState(false);

  const onSubmit = data => {
    setload((load = true));

    let formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key]);
    }
    console.log(data);
    fetch("https://formsquash.io/f/RUFvAYJUVcWArhSdcg9W", {
      method: "POST",
      body: formData
    }).then(response => {
      setload((load = false));
      if (response.ok) {
        alert("Formulário enviado com sucesso");
      } else {
        alert("Ocorreu um erro no envio, por favor tente mais tarde");
      }
      props.close();
    }); /*"https://formsquash.io/f/RUFvAYJUVcWArhSdcg9W"*/
  };

  const telMask = e => {
    var content = e.target;
    content.value = content.value.replace(/\D/g, ""); //Remove tudo o que nãp é dÃ­gito
    content.value = content.value.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dÃ­gitos
    content.value = content.value.replace(/(\d)(\d{4})$/, "$1-$2");
  };

  const customStyle = {
    overlay: {
      zIndex: "100"
    },
    content: {
      maxWidth: "760px",
      height: "500px",
      margin: "auto",
      backgroundColor: "#03adf8",
      borderRadius: "30px",
      overflow: "hidden"
    }
  };
  Modal.setAppElement("#root");
  return (
    <Modal isOpen={props.isActive} style={{ ...customStyle }}>
      <div className="caixa_modal">
        <button className="close" onClick={props.close}>
          X
        </button>
        <h3 className="titulo bordered">
          QUER MAIS INFORMAÇÕES SOBRE O ALTOS DO ITAIM?
        </h3>
        <div className="sub_caixa">
          <p>
            Cadastre-se e seja um dos primeiros a receber o contato de nossos
            corretores.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="inputs">
            <input
              type="text"
              placeholder="NOME"
              name="name"
              className={`nome  ${errors.name ? "error" : ""}`}
              ref={register({ required: "teste" })}
            />
            <div className="content">
              <input
                type="text"
                placeholder="EMAIL"
                name="email"
                className={`email ${errors.email ? "error" : ""}`}
                ref={register({
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i
                  }
                })}
              />
              <input
                onChange={telMask}
                maxLength={15}
                type="tel"
                placeholder="TELEFONE"
                name="tel"
                id="phone-mask"
                className={`tel ${errors.tel ? "error" : ""}`}
                ref={register({ required: true })}
              />
            </div>
            <FontAwesomeIcon
              icon={faSpinner}
              className={`${load === true ? "active" : "inactive"}`}
            />
            <input
              type="submit"
              value="CADASTRAR AGORA"
              className={`${load === true ? "inactive" : "button"}`}
            />
          </form>
        </div>
      </div>
    </Modal>
  );
}
