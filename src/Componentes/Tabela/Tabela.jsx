import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from '../Tabela/Tabela.module.css';
import corMadeira from '../Tabela/Imagens/corMadeira.png';

const Tabela = ({ onClose }) => {
  return (
    <div
      className={`modal show ${styles.modalAgendamento}`}
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog className={styles.modalDialog}>
        <Modal.Header closeButton>
          <Modal.Title>Tabela de preços</Modal.Title>
        </Modal.Header>

        <Modal.Body className={styles.agendamentoCampos}>
          <p>teste</p>
          <div className={styles.icons}>
            <img src={corMadeira} alt="Cor Madeira" />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={onClose} className={styles.btnAgendamento}>
            Fechar tabela
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default Tabela;
