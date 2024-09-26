import React from 'react';
import styles from './Footer.module.css'; 
import icon1 from '../Footer/Imagens/instagram.png';
import icon2 from '../Footer/Imagens/whatsapp.png';
import Contato from '../Contato/Contato';

const Footer = () => {
  return (
    <>
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1>Flaviano PVC</h1>
          <p>© 2024 Flaviano PVC</p>
          <p>Todos os direitos reservados</p>
        </div>
        <div className={styles.icons}>
          <img src={icon1} alt="Instagram" />
          <img src={icon2} alt="WhatsApp" />
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
