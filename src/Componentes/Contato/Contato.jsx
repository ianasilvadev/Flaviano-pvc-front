import React from 'react';
import styles from './Contato.module.css'; 
import telefone from '../Contato/Imagens/telephone.png';
import zap from '../Contato/Imagens/zap.png';
import email from '../Contato/Imagens/mail.png';
import localizacao from '../Contato/Imagens/location.png';
import telefoneContato from '../Contato/Imagens/telephoneContato.png';

const Contato = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <h2>Entre em contato com a gente!</h2>
          <p>Entre em contato com Flaviano PVC, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.</p>
          <button className={styles.contactButton}>
            <img src={telefoneContato} alt="WhatsApp"/>
            Entrar em contato
          </button>
        </div>
        <div className={styles.contactDetails}>
          <div className={styles.detailItem}>
            <img src={telefone} alt="Phone" />
            <p>11 99845-6754</p>
          </div>
          <div className={styles.detailItem}>
            <img src={localizacao} alt="Location" />
            <p>R. Amauri Souza, 346</p>
          </div>
          <div className={styles.detailItem}>
            <img src={email} alt="Email" />
            <p>contato@beautysalon.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
