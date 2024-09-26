import React from 'react';
import styles from './Servicos.module.css';
import Card from '../Card/Card';
import icon1 from '../Servicos/Imagens/hammer.png';
import icon2 from '../Servicos/Imagens/paint.png';
import icon3 from '../Servicos/Imagens/home-repair.png';


const cardsData = [
  {
    icon: icon1,
    title: 'Instalação de PVC',
    description: 'Instalação completa de forro PVC, protegendo todos os tipos de ambientes, inclusive aqueles com necessidades específicas e exigências de alta durabilidade.'
  },
  {
    icon: icon2,
    title: 'Variedade de cores',
    description: 'Instalação de forro PVC com diversas cores disponíveis, oferecendo opções que se adaptam a todos os estilos e necessidades, garantindo um acabamento perfeito para qualquer ambiente.'
  },
  {
    icon: icon3,
    title: 'Manutenção de PVC',
    description: 'Manutenção especializada para forro PVC, garantindo durabilidade e segurança para seu ambiente. Conte com nossa expertise para conservar a beleza e funcionalidade do seu espaço.'
  }
];

const Servicos = () => {
  return (
    <div id={styles.container}>
      <div id={styles.tituloServico}>
        <h1>Serviços</h1>
      </div>
      <div id={styles.servicoSubtitulo}>
        <p>
        Com mais de 10 anos de experiência no mercado, a Flaviano PVC se destaca pela <br />excelência em instalação e manutenção de forros PVC. <br /> Nossos serviços exclusivos e de alta qualidade já conquistaram clientes em diversas cidades do Ceará, <br />oferecendo soluções duráveis e completamente personalizadas <br /> para cada necessidade.
        </p>
      </div>
      <div id={styles.cardsContainer}>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Servicos;
