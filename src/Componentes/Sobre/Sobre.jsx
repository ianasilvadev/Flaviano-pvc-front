import React from 'react';
import shapeSobre from '../Sobre/Imagens/ShapeSobre.png';
import fotoExemplo from '../Sobre/Imagens/exemploBarbeiro.jpg';
import styles from './Sobre.module.css';

const Sobre = () => {
  return (
    <div className={styles.sobre}>
      {/* Shape azul*/}
      <div className={styles.shapeSobre}>
        <img src={shapeSobre} alt="Logo" />
      </div>
      {/* Imagem */}
      <div>
        <img className={styles.imagemExmp} src={fotoExemplo} alt="" />
      </div>
      {/* Título de Sobre nós*/}
      <div className={styles.tituloSobre}>
        <h1>Sobre nós</h1>
      </div>
      <div className={styles.subtituloSobre}>
        <p>
          Bem-vindo à nossa empresa de Forro PVC em Fortaleza
          <br /> onde transformamos ambientes com soluções práticas e elegantes.
          <br /> Com anos de experiência no mercado, nossa missão é oferecer
          produtos de alta qualidade
          <br /> e um atendimento personalizado de qualidade.
        </p>
        <br />
        <p>
          Especializados em forros de PVC, oferecemos uma ampla variedade de
          modelos que combinam durabilidade,
          <br />
          resistência e estética apurada. Nosso compromisso é transformar seu
          espaço,
          <br />
          seja residencial ou comercial, em um ambiente mais bonito, funcional e
          aconchegante.
        </p>
        <br />
        <p>
          Venha nos conhecer e descubra como podemos transformar seu ambiente
          com forro PVC,
          <br />
          proporcionando mais conforto, beleza e funcionalidade para o seu dia a
          dia.
        </p>
      </div>
    </div>
  );
};

export default Sobre;
