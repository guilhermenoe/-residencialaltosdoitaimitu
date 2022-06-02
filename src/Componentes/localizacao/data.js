import pin from "../../img/map-pins/pin.png";
import academia from "../../img/map-pins/pin-academia.png";
import banco from "../../img/map-pins/pin-banco.png";
import escola from "../../img/map-pins/pin-escola.png";
import farmacia from "../../img/map-pins/pin-farmacia.png";
import hospital from "../../img/map-pins/pin-hospital.png";
import padaria from "../../img/map-pins/pin-padaria.png";
import restaurante from "../../img/map-pins/pin-restaurante.png";
import shopping from "../../img/map-pins/pin-shopping.png";
import universidade from "../../img/map-pins/pin-universidade.png";
import mercado from "../../img/map-pins/pin-mercado.png";

const latitude = -23.2761635;
const longitude = -47.3073262;

const data = {
  default: {
    center: { lat: latitude, lng: longitude },
    zoom: 15,
    points: [
      {
        label: "Altos do Itaim",
        position: {
          lat: latitude,
          lng: longitude,
        },
        icon: pin,
      },
    ],
  },
  academias: {
    center: { lat: latitude, lng: longitude },
    zoom: 15,
    points: [
      {
        label: "Altos do Itaim",
        position: {
          lat: latitude,
          lng: longitude,
        },
        icon: pin,
      },
      {
        label: "Fama Fitness Academia",
        position: {
          lat: -23.27529,
          lng: -47.306432,
        },
        icon: academia,
      },
      {
        label: "NTF - NÚCLEO DE TREINAMENTO FUNCIONAL",
        position: {
          lat: -23.271959,
          lng: -47.30905,
        },
        icon: academia,
      },
      {
        label: "AGE FITNESS",
        position: {
          lat: -23.278602,
          lng: -47.301969,
        },
        icon: academia,
      },
      {
        label: "Mamute Gym",
        position: {
          lat: -23.284022,
          lng: -47.307977,
        },
        icon: academia,
      },
    ],
  },
  bancos: {
    center: { lat: latitude, lng: longitude },
    zoom: 14,
    points: [
      {
        label: "Altos do Itaim",
        position: {
          lat: latitude,
          lng: longitude,
        },
        icon: pin,
      },
      {
        label: "Banco do Brasil",
        position: {
          lat: -23.263097,
          lng: -47.298802,
        },
        icon: banco,
      },
      {
        label: "Caixa Econômica Federal",
        position: {
          lat: -23.270675,
          lng: -47.309682,
        },
        icon: banco,
      },
      {
        label: "Banco Santander",
        position: {
          lat: -23.270009,
          lng: -47.294057,
        },
        icon: banco,
      },
      {
        label: "Banco Bradesco",
        position: {
          lat: -23.264212,
          lng: -47.298144,
        },
        icon: banco,
      },
      {
        label: "Agência Itaú",
        position: {
          lat: -23.264151,
          lng: -47.297958,
        },
        icon: banco,
      },
      {
        label: "Banco Santander",
        position: {
          lat: -23.281398,
          lng: -47.290045,
        },
        icon: banco,
      },
    ],
  },
  padarias: {
    center: { lat: latitude, lng: longitude },
    zoom: 16,
    points: [
      {
        label: "Altos do Itaim",
        position: {
          lat: latitude,
          lng: longitude,
        },
        icon: pin,
      },
      {
        label: "Só Pães",
        position: {
          lat: -23.276628,
          lng: -47.302058,
        },
        icon: padaria,
      },
      {
        label: "Padaria Empório dos Pães",
        position: {
          lat: -23.276332,
          lng: -47.305148,
        },
        icon: padaria,
      },
      {
        label: "Padaria Duas Irmãs",
        position: {
          lat: -23.279922,
          lng: -47.309394,
        },
        icon: padaria,
      },
      {
        label: "Big Pão",
        position: {
          lat: -23.272641,
          lng: -47.30564,
        },
        icon: padaria,
      },
      {
        label: "Casa de Pães Famiglia Italiani",
        position: {
          lat: -23.274477,
          lng: -47.301559,
        },
        icon: padaria,
      },
    ],
  },
  restaurantes: {
    center: { lat: latitude, lng: longitude },
    zoom: 16,
    points: [
      {
        label: "Altos do Itaim",
        position: {
          lat: latitude,
          lng: longitude,
        },
        icon: pin,
      },
      {
        label: "Restaurante São José 3 Irmãos",
        position: {
          lat: -23.273802,
          lng: -47.307646,
        },
        icon: restaurante,
      },
      {
        label: "Choperia e Pizzaria 3 Irmãos",
        position: {
          lat: -23.273488,
          lng: -47.307955,
        },
        icon: restaurante,
      },
      {
        label: "Império dos Sabores",
        position: {
          lat: -23.272511,
          lng: -47.308606,
        },
        icon: restaurante,
      },
      {
        label: "Nossa Pizza",
        position: {
          lat: -23.272418,
          lng: -47.308878,
        },
        icon: restaurante,
      },
      {
        label: "Volks Burguer",
        position: {
          lat: -23.278422,
          lng: -47.306912,
        },
        icon: restaurante,
      },
    ],
  },
  escolas: {
    center: { lat: latitude, lng: longitude },
    zoom: 15,
    points: [
      {
        label: "Altos do Itaim",
        position: {
          lat: latitude,
          lng: longitude,
        },
        icon: pin,
      },
      {
        label: "Sociedade Educacional Cidade de Itú",
        position: {
          lat: -23.276619,
          lng: -47.302182,
        },
        icon: escola,
      },
      {
        label: "Escola Rabisco",
        position: {
          lat: -23.274346,
          lng: -47.304413,
        },
        icon: escola,
      },
      {
        label: "EMEI - SÍTIO DO PIPA-PAU AMARELO, ITU",
        position: {
          lat: -23.280722,
          lng: -47.304688,
        },
        icon: escola,
      },
      {
        label: "EMEF. MONSENHOR CAMILO FERRARINI",
        position: {
          lat: -23.282846,
          lng: -47.302093,
        },
        icon: escola,
      },
      {
        label: "EMEF Prof. Ermelinda Silveira Machado",
        position: {
          lat: -23.271611,
          lng: -47.308471,
        },
        icon: escola,
      },
    ],
  },
  shoppings: {
    center: { lat: latitude, lng: longitude },
    zoom: 14,
    points: [
      {
        label: "Altos do Itaim",
        position: {
          lat: latitude,
          lng: longitude,
        },
        icon: pin,
      },
      {
        label: "Plaza Shopping Itu",
        position: {
          lat: -23.263943,
          lng: -47.280446,
        },
        icon: shopping,
      },
    ],
  },
  farmacias: {
    center: { lat: latitude, lng: longitude },
    zoom: 15,
    points: [
      {
        label: "Altos do Itaim",
        position: {
          lat: latitude,
          lng: longitude,
        },
        icon: pin,
      },
      {
        label: "Drogaria e Cosméticos Drogavilla - Loja Paraíso",
        position: {
          lat: -23.273969,
          lng: -47.30592,
        },
        icon: farmacia,
      },
      {
        label: "Farma Santa Cruz",
        position: {
          lat: -23.272315,
          lng: -47.301371,
        },
        icon: farmacia,
      },
      {
        label: "Droga Líder",
        position: {
          lat: -23.282146,
          lng: -47.298382,
        },
        icon: farmacia,
      },
      {
        label: "Drogaria Farma Ramos de Itú",
        position: {
          lat: -23.266122,
          lng: -47.310343,
        },
        icon: farmacia,
      },
      {
        label: "Farma Rica",
        position: {
          lat: -23.266189,
          lng: -47.314078,
        },
        icon: farmacia,
      },
    ],
  },
  supermercados: {
    center: { lat: latitude, lng: longitude },
    zoom: 15,
    points: [
      {
        label: "Altos do Itaim",
        position: {
          lat: latitude,
          lng: longitude,
        },
        icon: pin,
      },
      {
        label: "Supermercado Alvorada",
        position: {
          lat: -23.280503,
          lng: -47.306484,
        },
        icon: mercado,
      },
      {
        label: "Supermercado Alvorada Ville",
        position: {
          lat: -23.271611,
          lng: -47.309283,
        },
        icon: mercado,
      },
      {
        label: "Riva Frutas",
        position: {
          lat: -23.276994,
          lng: -47.306932,
        },
        icon: mercado,
      },
      {
        label: "Mercado Real",
        position: {
          lat: -23.274871,
          lng: -47.30163,
        },
        icon: mercado,
      },
      {
        label: "Supermercado Vila Roma",
        position: {
          lat: -23.278437,
          lng: -47.298437,
        },
        icon: mercado,
      },
    ],
  },
  hospitais: {
    center: { lat: latitude, lng: longitude },
    zoom: 14,
    points: [
      {
        label: "Altos do Itaim",
        position: {
          lat: latitude,
          lng: longitude,
        },
        icon: pin,
      },
      {
        label: "Hospital São Camilo Santa Casa de Itu",
        position: {
          lat: -23.270481,
          lng: -47.295291,
        },
        icon: hospital,
      },
      {
        label: "Hospital Municipal Dr Emilio Chierighini",
        position: {
          lat: -23.2727461,
          lng: -47.291445,
        },
        icon: hospital,
      },
      {
        label: "UPA 24hrs",
        position: {
          lat: -23.2561,
          lng: -47.3129752,
        },
        icon: hospital,
      },
    ],
  },
  universidades: {
    center: { lat: latitude, lng: longitude },
    zoom: 14,
    points: [
      {
        label: "Altos do Itaim",
        position: {
          lat: latitude,
          lng: longitude,
        },
        icon: pin,
      },
      {
        label: "Universidade São Paulo",
        position: {
          lat: -23.2648087,
          lng: -47.2989978,
        },
        icon: universidade,
      },
      {
        label: "Unicesumar - Itu",
        position: {
          lat: -23.2838957,
          lng: -47.2873486,
        },
        icon: universidade,
      },
      {
        label: "Unicesumar - Itu",
        position: {
          lat: -23.2915763,
          lng: -47.2984266,
        },
        icon: universidade,
      },
    ],
  },
};

export default data;
