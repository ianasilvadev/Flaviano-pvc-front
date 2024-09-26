import React, { useRef, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import styles from './Orcamento.module.css';
import Button from 'react-bootstrap/Button';

const Orcamento = ({ onClose }) => {

  const [largura, setLargura] = useState('')
  const [comprimento, setComprimento] = useState('')
  const [corBranca, setCorBranca] = useState(true)
  const [corMadeira, setCorMadeira] = useState(false)
  const [calculoTotal, setCalculoTotal] = useState('')
  const [estadoAgendamento, SetEstadoAgendamento] = useState(false)

  const valoresMedidas = (e) => {
    const { id, value } = e.target

    const valorConvertido = parseFloat(value.replace(',', '.'));

    if(id === 'largura'){
      setLargura(valorConvertido)
    } else if(id === 'comprimento'){
      setComprimento(valorConvertido)
    }
  }

  const corPvc = (e) => {

    const { id } = e.target

    if(id === 'corBranca'){
      setCorBranca(true)
      setCorMadeira(false)
    } else if(id === 'corMadeira'){
      setCorMadeira(true)
      setCorBranca(false)
    }

  }

  const calculoOrcamento = () => {

    if (!largura || !comprimento) {
      alert("Por favor, preencha todos os campos de largura e comprimento.");
      return; 
    }

    const precoBranco = 45
    const precoMadeira = 95

    const calculoMetragem = parseFloat(largura) * parseFloat(comprimento);

    const total = corBranca ? calculoMetragem * precoBranco : calculoMetragem * precoMadeira;
    setCalculoTotal(total);

    // Salvando no localStorage
    const dadosOrcamento = { largura
      , comprimento, total };
    localStorage.setItem('orcamento', JSON.stringify(dadosOrcamento));

    SetEstadoAgendamento(true)

  }
  
  const formatarValor = (valor) => {
    return valor.toFixed(2).replace('.', ',');
  };

  console.log(calculoTotal)


  return (
      <div
      className={`modal show ${styles.modalAgendamento}`}
      style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog className={styles.modalDialog}>
          <Modal.Header onClick={onClose} closeButton>
            <Modal.Title>Orçamento</Modal.Title>
          </Modal.Header>
  
          <Modal.Body className={styles.agendamentoCampos}>

        <div className={styles.camposInline}>

          <div className={styles.inputGroup}>
            <label htmlFor="nome">Largura</label>
            <input 
            onChange={valoresMedidas} 
            id="largura" 
            type="text" 
            placeholder="Digite a largura"/>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Comprimento</label>
            <input 
            onChange={valoresMedidas} 
            id="comprimento" 
            type="text" 
            placeholder="Digite o comprimento"/>
          </div>
        
        </div>
        
        <div className='container' style={{ display: 'flex', gap: '20px' }}>

        <div className='checkBox' style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <label htmlFor="colorWhite">Cor:</label>
            <label htmlFor="">Branco</label>
            <input id="corBranca" checked={corBranca} onClick={corPvc} type="checkbox" name="colorWood" className={`${styles['custom-checkbox']}`} /> 
          </div>

          <div className='checkBox' style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <label htmlFor="colorWood">Madeira</label>
            <input id="corMadeira" checked={corMadeira} onClick={corPvc} type="checkbox" name="colorWood" className={`${styles['custom-checkbox']}`} />          
            </div>
          
        </div>
          </Modal.Body>
      
          <Modal.Footer>
            <Button onClick={onClose} className={styles.btnAgendamento}>
              Fechar tabela
            </Button>
            <Button onClick={calculoOrcamento} className={styles.btnAgendamento}>
              Fazer orçamento
            </Button>
            {estadoAgendamento && 
            <div>
            <h1>Seu orçamento é {formatarValor(calculoTotal)} reais</h1>
            <button>Fazer agendamento</button>
            </div>
            }
            
          </Modal.Footer>
        
        </Modal.Dialog>
      </div>
    );

}

export default Orcamento;
