import React, { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from '../Modal Agendamento/Agendamento.module.css';
import axios from 'axios';

const Agendamento = ({onClose}) => {

  const [cep, setCep] = useState('')
  const [bairro, setBairro] = useState('')
  const [logradouro, setLogradouro] = useState('')
  const [numero, setNumero] = useState('')
  const [cidade, setCidade] = useState('')
  const [orcamento, setOrcamento] = useState('')


  // useEffect(() => {
  //   // Recupera dados do orçamento do local Storage
  //   const dadosOrcamento = JSON.parse(localStorage.getItem('orcamento'))
  //   if(dadosOrcamento){
  //     setOrcamento(dadosOrcamento)
  //   }
  // }, [])

  const handleChange = (event) => {
    setCep(event.target.value) // valor do cep
    console.log(cep)
  }

    useEffect(() => {
        if(cep.length === 8){
          cepApi()
        }

        if(cep === ''){
          setBairro('')
          setLogradouro('')
          setCidade('')
        }
        
    }, [cep])

  const cepApi = () => {
      axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => {
        setBairro(response.data.bairro)
        setLogradouro(response.data.logradouro)
        setCidade(response.data.localidade)
      })
      .catch(error => {
        console.error(error)
      })

    }


  return (
    <div className={`modal show ${styles.modalAgendamento}`}>
      <Modal.Dialog className={styles.modalDialog}>
        <Modal.Header closeButton onClick={onClose}>
          <Modal.Title>Agendamento</Modal.Title>
        </Modal.Header>

        <Modal.Body className={styles.agendamentoCampos}>
          <div className={styles.sectionTitle}>Dados Pessoais</div>
          <div className={styles.camposInline}>
            <div className={styles.inputGroup}>
              <label htmlFor="nome">Nome</label>
              <input id="nome" type="text" placeholder="Digite seu nome"/>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">E-mail</label>
              <input id="email" type="text" placeholder="Digite seu e-mail"/>
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="telefone">Telefone</label>
            <input id="telefone" type="text" placeholder="Digite seu telefone"/>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.sectionTitle}>Endereço</div>

          <div className={styles.camposInline}>

            <div className={styles.inputGroup}>
              <label htmlFor="endereco">Cep</label>
              <input onChange={handleChange} id="endereco" type="text" placeholder="Digite seu cep"/>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="numero">Bairro</label>
              <input value={bairro} id="numero" type="text" placeholder="Digite o bairro"/>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="numero">Número</label>
              <input id="numero" type="text" placeholder="Digite o número"/>
            </div>
            
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="referencia">Logradouro</label>
            <input value={logradouro} id="referencia" type="text" placeholder="Digite seu logradouro"/>
          </div>
          

          <div className={styles.inputGroup}>
              <label htmlFor="numero">Cidade</label>
              <input value={cidade} id="numero" type="text" placeholder="Digite um ponto de referência"/>
            </div>

        </Modal.Body>

        <Modal.Footer>
          <Button onClick={onClose} className={styles.btnAgendamento}>Fechar</Button>
          <Button className={styles.btnAgendamento}>Agendar</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default Agendamento;
