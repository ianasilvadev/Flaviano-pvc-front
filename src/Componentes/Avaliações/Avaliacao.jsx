import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from '../Avaliações/Avaliacao.module.css';


const Avaliacao = ({ onClose }) => {

    return (
        <div
            className={`modal show ${styles.modalAgendamento}`}
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog className={styles.modalDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>Avaliação</Modal.Title>
                </Modal.Header>

                <Modal.Body className={styles.agendamentoCampos}>
                    {/* Renderiza o componente Login se o usuário não estiver logado */}
                   
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

export default Avaliacao;
