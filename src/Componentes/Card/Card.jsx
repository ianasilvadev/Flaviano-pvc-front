import React from 'react';
import styles from './Card.module.css';

const Card = ({ icon, title, description }) => {
  return (
    <div className={styles.card}>
      <img src={icon} alt="Icon" className={styles.icon} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Card;
