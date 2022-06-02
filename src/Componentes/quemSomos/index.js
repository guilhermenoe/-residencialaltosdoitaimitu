import React, { Component } from "react";

import fotoQuemSomos from "../../img/quemSomos/1 fachada 6.png";

import "./quemSomos.scss";

export default class QuemSomos extends Component {
  render() {
    return (
      <div className="caixaQuemSomos" id="quemSomos">
        <picture>
          <img src={fotoQuemSomos} alt="Quem Somos" className="foto" />
        </picture>
        <div className="texto">
          <h3 className="titulo bordered">Quem Somos</h3>
          <div className="paragrafo">
            
              <h4>A INCORPORADORA</h4>
            
            <p>
              A Incorporadora e proprietária C&Castro Empreendimento
              Imobiliários é uma empresa de Família Ituana, que tem experiência
              junto ao mercado imobiliário e empresarial desde 1992, adquirido
              em sua jornada no mercado e experiências passadas de Pai para
              Filho, sempre com transparência e honestidade, firmando assim sua
              solidez em seus compromissos, mantem sua posição e almeja em ser o
              líder do mercado imobiliário junto á região. Dentro seu portfolio
              tem alguns projetos como: Construções de casas e barracões
              industriais, gerenciamento de vendas de lotes próprios em Itu,
              Tatuí, Mato-Grosso, Rubineia entre outros. Reformas de imóveis,
              para comercialização própria. Sempre interessado e capacitado para
              atender os interesses de seus clientes.
            </p>
            <h4 className="paragrafo">A CONSTRUTORA</h4>
            <p>
              Quem hoje olha para os resultados da MFalcão Arquitetura &
              Engenharia pode se impressionar com a trajetória da empresa.
              Completando dez anos de existência em 2020, a companhia acumula
              números e conquistas que fazem de nosso Know-How.
            </p>
            <p className="linha">
              Este desempenho acima da curva, porém, não é por acaso.
              Estabelecida em 2010, a MFalcão Arquitetura & Engenharia surgiu da
              vontade de se criar uma empresa que fosse reflexo dos valores e
              das experiências dos profissionais, que tinham o pensamento de
              aliar qualidade em nível de excelência, pontualidade rigorosa e
              custos acessíveis com rentabilidade, sem jamais abrir mão da
              segurança do trabalho. Um conceito simples, que até parecia óbvio,
              mas que se mostrava um desafio para todo o mercado. A MFalcão
              Arquitetura & Engenharia, desde seu início, provou que era
              possível fazer diferente, e transformou a filosofia da empresa
              recém-fundada em seu principal diferencial competitivo, sem jamais
              se esquecer que o crescimento mais importante é o da confiança:
              números são apenas consequência de um trabalho bem feito.
            </p>
            <h4 className="paragrafo">PROJETOS EXECUTADOS</h4>
            <div className="linha">
              <p>
                - 110.850,00 M² de construção residencial entregues (Sorocaba,
                Itu e Região)
              </p>
              <p>- 12.000 m² de pavimentação e infra-estrutura urbana</p>
              <p>- 735.000 m² de loteamentos urbanos</p>
              <p>- 685 unidades de médio e alto padrão</p>
              <p>- 950 unidades do programa Minha Casa minha Vida</p>
            </div>
            <h4 className="paragrafo">NOSSOS PILARES</h4>
            <h5 className="linha">Prazo</h5>
            <p>
              Pontualidade é uma questão de princípio o respeito pelo prazo é
              levado a sério. Os trabalhos são entregues, invariavelmente,
              dentro do estabelecido.
            </p>
            <h5 className="linha">Qualidade</h5>
            <p>
              Entregar qualidade é o mínimo que se espera de uma empresa séria.
              A busca pela superação de metas e expectativas faz parte da
              filosofia, está no DNA desta parceria.
            </p>
            <h5 className="linha">Segurança do trabalho</h5>
            <p>
              Promover a proteção do trabalhador e garantir um ambiente seguro,
              controlado e saudável é a premissa básica para qualquer iniciativa
              na construção civil e em qualquer outra área da vida.
            </p>
            <h4 className="paragrafo">NOSSA MISSÃO</h4>
            <p>
              Produzir experiências exclusivas de sucesso na incorporação,
              construção, gestão de projetos e venda de unidades, além de
              programas e portfólios através de soluções inteligentes capazes de
              superar os obstáculos operacionais e conectar os objetivos
              estratégicos com os produtos, serviços e projetos dos nossos
              clientes. Nutrir o amor pela inovação e o inabalável compromisso
              com a integridade social.
            </p>
            <p className="linha">
              Para a <b>nossa parceria</b>, trabalhar pelo sucesso dos nossos
              clientes é uma entrega que vai além do resultado esperado da nossa
              atuação. Esse referencial, que está na essência da nossa missão, é
              pautado pelo{" "}
              <b>
                nosso inabalável compromisso com as questões socioambientais e
                com a sustentabilidade
              </b>
              , que fundamentam nossos processos, nossas operações e nossa
              reputação.
            </p>
            <p className="linha">
              Acreditamos que{" "}
              <b>
                os projetos que conduzimos têm a capacidade de transformar
                positivamente a vida das empresas, das pessoas e da sociedade
                como um todo
              </b>
              .
            </p>
            <p className="linha">
              Geramos um valor que é compartilhado com todos os nossos públicos
              de interesse, motivando a escolha pela nossa marca e gerando a
              fidelização de cada um deles. Essa crença está alinhada a um
              propósito maior que nos move: contribuir para um mundo melhor.
            </p>
            <p className="linha">
              <b>
                As práticas que adotamos e as certificações que conquistamos
              </b>
                {" "}legitimam nossa responsabilidade corporativa e o nosso
              comprometimento com o desenvolvimento sustentável. Ao alinhar
              nossa atuação a essas grandes causas, reforçamos também <b>a nossa
              consciência do quanto é fundamental nos orientar, no presente, por
              processos capazes de se perpetuar no futuro.</b>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
